import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import styled from 'styled-components';

export default class MyDocument extends Document {
    static getInitialProps ({ renderPage }) {
        // styled-components in nextjs -- https://jsramblings.com/2017/11/27/using-styled-components-with-next-js.html
        const sheet = new ServerStyleSheet()
        const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
        const styleTags = sheet.getStyleElement()
        return { ...page, styleTags }
    }

    render () {
        return (
            <html>
                <Head>
                {this.props.styleTags}
                </Head>
                <body style={bodyStylePop}>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}

const bodyStyleWarm = {
    background: 'fixed linear-gradient(#d8a158, 95%, #2d2d2d)'
}

const bodyStylePop = {
    // background: 'fixed linear-gradient(#acbad8, 95%, pink)'
    background: 'fixed linear-gradient(#f7f7f7, 85%, pink)'
}
