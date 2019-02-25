import * as React from 'react';
import Head from './head';
import Link from 'next/link'
import { Body, Divider, Grid, StyledAnchor, Subtitle, Title } from '../src/components/SharedComponents';

export default class App extends React.Component {
    render() {
        return (
            <div className='baskerville'>
                <Head/>
                <Grid>
                    <Title href='/'>Karl's website.</Title>
                    <Subtitle>This is where I share my thoughts on technology, photography, and music.</Subtitle>
                    <Divider>✷</Divider>
                    <Body>
                        <div className='f3 mb2 sans-serif'>Writing</div>
                        <Link href="/blog/2018-11-28-secure-cloud-storage.html">
                            <StyledAnchor>Securing Personal Documents in the Cloud with Cryptomator</StyledAnchor>
                        </Link>
                    </Body>
                    <Divider>✷</Divider>
                    <Body>Find me on <StyledAnchor href='http://instagram.com/_ksho' target='_blank'>Instagram</StyledAnchor>
                        , <StyledAnchor href='http://github.com/ksho' target='_blank'>Github</StyledAnchor>
                        , and <StyledAnchor href='http://twitter.com/_ksho' target='_blank'>Twitter</StyledAnchor>.
                    </Body>
                </Grid>
            </div>
        );
    }
}
