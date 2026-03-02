import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />)
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: [initialProps.styles, sheet.getStyleElement()]
            }
        } finally {
            sheet.seal()
        }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="stylesheet" href="/static/tachyons.min.css" />
                </Head>
                <body style={bodyStylePop}>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

const bodyStyleWarm = {
    background: 'fixed linear-gradient(#f7f7f7, 90%, #e7b963)'
}

const bodyStyleSpring = {
    background: 'fixed linear-gradient(#f7f7f7, 90%, #109217)'
}

const bodyStylePop = {
    // background: 'fixed linear-gradient(#acbad8, 95%, pink)'
    background: 'fixed linear-gradient(#e4e4e4, 85%, #5162fd)'
}

const bodyStylePop26 = {
    background: 'fixed linear-gradient(#f7f7f7, 90%, #f890ec)'
}
