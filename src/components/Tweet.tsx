import React, { useEffect, useRef, useState } from 'react'

// Rich tweet embeds, without letting widgets.js anywhere near hydration.
//
// The markdown for these posts carries the standard twitter embed markup: a
// <blockquote class="twitter-tweet"> fallback plus a <script src="widgets.js">.
// That script rewrites the blockquote in place, which is DOM React thinks it
// owns — the result is a hydration failure. So md-components maps those
// blockquotes here instead: the fallback stays a plain, React-owned blockquote,
// and the widget is created after mount inside an empty div React never diffs.

const WIDGETS_SRC = 'https://platform.twitter.com/widgets.js'

declare global {
    interface Window {
        twttr?: any;
    }
}

let widgets: Promise<any> | null = null

const loadWidgets = (): Promise<any> => {
    if (!widgets) {
        widgets = new Promise((resolve, reject) => {
            if (window.twttr && window.twttr.ready) {
                window.twttr.ready(resolve)
                return
            }
            const script = document.createElement('script')
            script.src = WIDGETS_SRC
            script.async = true
            script.charset = 'utf-8'
            script.onload = () => {
                if (window.twttr && window.twttr.ready) {
                    window.twttr.ready(resolve)
                } else {
                    reject(new Error('widgets.js loaded without twttr'))
                }
            }
            script.onerror = () => reject(new Error('widgets.js failed to load'))
            document.head.appendChild(script)
        })
    }
    return widgets
}

interface IOwnProps {
    align?: 'left' | 'center' | 'right';
    className?: string;
    children?: React.ReactNode;
}

export default function Tweet({ align, className, children }: IOwnProps) {
    const fallback = useRef<HTMLQuoteElement>(null)
    const mount = useRef<HTMLDivElement>(null)
    const attempt = useRef(0)
    const [embedded, setEmbedded] = useState(false)

    useEffect(() => {
        const permalink = fallback.current?.querySelector<HTMLAnchorElement>('a[href*="/status/"]')
        const id = permalink?.href.match(/\/status\/(\d+)/)?.[1]
        if (!id) return

        // Refs, not state: this has to survive StrictMode's double effect without
        // leaving two widgets behind.
        const run = attempt.current + 1
        attempt.current = run

        loadWidgets()
            .then((twttr) => {
                if (run !== attempt.current || !mount.current) return null
                mount.current.replaceChildren()
                return twttr.widgets.createTweet(id, mount.current, { align, dnt: true })
            })
            .then((el) => {
                if (el && run === attempt.current) setEmbedded(true)
            })
            .catch(() => {
                // Nothing to do — the blockquote fallback is already on the page.
            })
    }, [align])

    return (
        <>
            <div ref={mount} />
            <blockquote ref={fallback} className={className} hidden={embedded}>
                {children}
            </blockquote>
        </>
    )
}
