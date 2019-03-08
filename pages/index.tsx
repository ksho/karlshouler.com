import * as React from 'react';
import styled from 'styled-components';

import Head from './head';
import Link from 'next/link'
import { Content, Divider, Grid, LiNonBulleted, UlNonBulleted, StyledAnchor } from 'src/components/SharedComponents';
import Header from 'src/components/Header';

const ALL_WRITING_ITEMS = [
    { href: '/blog/2018-11-28-secure-cloud-storage.html', title: 'Securing Personal Documents in the Cloud with Cryptomator' },
    { href: '/blog/2017-08-06-when-is-golden-hour.html', title: 'Building whenisgoldenhour.com' },
    { href: '/blog/2016-09-21-sunset.html', title: 'Dat Phl Sunset' },
];

const PROJECT_ITEMS = [
    { href: 'http://engineering.curalate.com', title: 'Curalate' },
    { href: 'http://kshopho.com', title: 'Karl Shouler Photography' },
    { href: 'https://whenisgoldenhour.com', title: 'whenisgoldenhour.com' },
];

export default class App extends React.Component {
    public renderWritingItems() {
        return (
            ALL_WRITING_ITEMS.map((i) => {
                return (
                    <LiNonBulleted key={i.href}>
                        <Link href={i.href}>
                            <StyledAnchor>{i.title}</StyledAnchor>
                        </Link>
                    </LiNonBulleted>
                )
            })
        )
    }

    public renderProjectItems() {
        return (
            PROJECT_ITEMS.map((i) => {
                return (
                    <LiNonBulleted key={i.href}>
                        <StyledAnchor href={i.href} target='_blank'>
                            {i.title}
                        </StyledAnchor>
                    </LiNonBulleted>
                )
            })
        )
    }

    render() {
        return (
            <div className='baskerville ma2'>
                <Head/>
                <Grid>
                    <Header/>
                    <Divider>✷</Divider>
                    <Content>
                        <div className='f4 mb2 sans-serif'>Writing</div>
                        <UlNonBulleted>
                            { this.renderWritingItems() }
                        </UlNonBulleted>
                    </Content>
                    <Divider>✷</Divider>
                    <div className='f4 mb2 sans-serif'>Projects I'm working on</div>
                    <Content>
                        <UlNonBulleted>
                            { this.renderProjectItems() }
                        {/* <LiNonBulleted><StyledAnchor href='http://engineering.curalate.com'>Curalate</StyledAnchor></LiNonBulleted>
                        <LiNonBulleted><StyledAnchor href='http://kshopho.com'>Karl Shouler Photography</StyledAnchor></LiNonBulleted>
                        <LiNonBulleted><StyledAnchor href='https://whenisgoldenhour.com'>whenisgoldenhour.com</StyledAnchor></LiNonBulleted> */}
                        </UlNonBulleted>
                    </Content>
                    <Divider>✷</Divider>
                    <div className='f4 mb2 sans-serif'>Some other things about me</div>
                    <Content>Find me on <StyledAnchor href='http://instagram.com/_ksho' target='_blank'>Instagram</StyledAnchor>
                        , <StyledAnchor href='http://github.com/ksho' target='_blank'>Github</StyledAnchor>
                        , and <StyledAnchor href='http://twitter.com/_ksho' target='_blank'>Twitter</StyledAnchor>.
                    </Content>
                </Grid>
            </div>
        );
    }
}

const WritingWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const AnchorInner = styled.div.attrs({
    className: 'mb1'
})`
    
`;
