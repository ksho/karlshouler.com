import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
    static async getInitialProps (ctx) {
        // styled-components in nextjs -- https://github.com/vercel/next.js/tree/canary/examples/with-styled-components
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
                })

            const initialProps = await Document.getInitialProps(ctx)

            return {
                ...initialProps,
                styles: [initialProps.styles, sheet.getStyleElement()],
            }
        } finally {
            sheet.seal()
        }
    }

    render () {
        return (
            <Html>
                <Head>
                    <link rel="stylesheet" href="/static/tachyons.min.css" />
                </Head>
                <body style={bodyStyleCool}>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

// The style currently live on karlshouler.com.
const bodyStyleCool = {
    background: 'fixed linear-gradient(#e4e4e4, 85%, #5162fd)'
}

const bodyStyleWarm = {
    background: 'fixed linear-gradient(#f7f7f7, 90%, #e7b963)'
}

const bodyStyleSpring = {
    background: 'fixed linear-gradient(#f7f7f7, 90%, #109217)'
}

const bodyStylePop = {
    // background: 'fixed linear-gradient(#acbad8, 95%, pink)'
    background: 'fixed linear-gradient(#f7f7f7, 85%, #517efd)'
}
