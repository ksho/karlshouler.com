import Head from 'next/head'

export default ({
    title='Karl Shouler',
    description='Karl Shouler is an Engineering Leader based out of Philadelphia.'
}) =>
    <Head>
        <meta charSet="utf-8" />
        <title>{ title }</title>
        <meta name="author" content="Karl Shouler" />
        <meta name="description" content={ description } />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={ title } />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="" />
        <meta property="og:description" content={ description } />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/images/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/images/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
    </Head>
