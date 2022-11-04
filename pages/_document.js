import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import styled from 'styled-components';

export default class MyDocument extends Document {
    static async getInitialProps (ctx) {
        const initialProps = await Document.getInitialProps(ctx)

        // styled-components in nextjs -- https://jsramblings.com/2017/11/27/using-styled-components-with-next-js.html
        const sheet = new ServerStyleSheet()
        const page = ctx.renderPage(App => props => sheet.collectStyles(<App {...props} />))
        const styleTags = sheet.getStyleElement()
        
        return { ...initialProps, ...page, styleTags }
    }

    render () {
        return (
            <Html>
                <Head>
                    {this.props.styleTags}
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
    background: 'fixed linear-gradient(#d8a158, 95%, #2d2d2d)'
}

const bodyStylePop = {
    // background: 'fixed linear-gradient(#acbad8, 95%, pink)'
    background: 'fixed linear-gradient(#f7f7f7, 85%, #517efd)'
}
