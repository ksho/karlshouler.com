import Head from 'next/head'

export default ({ title='Karl Shouler', description='' }) =>
    <Head>
        <meta charSet="utf-8" />
        <title>{title} ✷ karlshouler.com</title>
        <meta name="author" content="Karl Shouler" />
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="" />
        <meta property="og:description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/static/tachyons.min.css" />
    </Head>
