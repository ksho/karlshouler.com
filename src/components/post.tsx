import React from 'react'
import Link from 'next/link'
import Head from '../../pages/head';

import { Body, Divider, Grid, Subtitle, Title } from './SharedComponents';

const styles = {
  anchor: 'dark-gray link bb',
  h1: 'sans-serif lh-title fw3'
}

export default (props) =>
    <div className='baskerville'>
        <Head/>
        <Grid>
            <Title href='/'>Karl's website.</Title>
                <Subtitle>This is where I share my thoughts on technology, photography, and music.</Subtitle>
                <Divider>✷</Divider>
            <Body>
                {props.children}
            </Body>
        </Grid>
    </div>