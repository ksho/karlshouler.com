import * as React from 'react';
import Head from './head';
import Link from 'next/link'
import { Body, Divider, Grid, ListWrapper, StyledAnchor, Subtitle, Title } from '../src/components/SharedComponents';
import Header from '../src/components/Header';

export default class App extends React.Component {
    render() {
        return (
            <div className='baskerville'>
                <Head/>
                <Grid>
                    <Header/>
                    <Divider>✷</Divider>
                    <Body>
                        <div className='f3 mb2 sans-serif'>Writing</div>
                        <Link href="/blog/2018-11-28-secure-cloud-storage.html">
                            <StyledAnchor>Securing Personal Documents in the Cloud with Cryptomator</StyledAnchor>
                        </Link><br/><br/>
                        <Link href="/blog/2017-08-06-when-is-golden-hour.html">
                            <StyledAnchor>whenisgoldenhour.com</StyledAnchor>
                        </Link>
                    </Body>
                    <Divider>✷</Divider>
                    <div className='f3 mb2 sans-serif'>Projects I'm working on</div>
                    <Body>
                        <ListWrapper><StyledAnchor href='http://engineering.curalate.com' target='_blank'>Curalate</StyledAnchor></ListWrapper>
                        <ListWrapper><StyledAnchor href='http://kshopho.com' target='_blank'>Karl Shouler Photography</StyledAnchor></ListWrapper>
                        <ListWrapper><StyledAnchor href='https://whenisgoldenhour.com' target='_blank'>whenisgoldenhour.com</StyledAnchor></ListWrapper>
                    </Body>
                    {/* <div className='f4 mb2 sans-serif'>Projects I used to work on</div>
                    <Body>
                        <StyledAnchor href='http://engineering.monetate.com' target='_blank'>Monetate</StyledAnchor>
                        <StyledAnchor href='http://www.musiciansoncall.org/site/PageNavigator/Chapters/Philadelphia' target='_blank'>Musicians On Call</StyledAnchor>
                        <StyledAnchor href='http://www.themusicisloveexchange.org/' target='_blank'>M.I.L.E.</StyledAnchor>
                        <StyledAnchor href='https://www.instagram.com/explore/tags/threesixtyphive/' target='_blank'>#threesixtyphive</StyledAnchor>
                        <StyledAnchor href='http://karlshouler.bandcamp.com/' target='_blank'>Wild Green Life</StyledAnchor>
                        <StyledAnchor href='http://kshopho.com' target='_blank'>Karl Shouler Photography</StyledAnchor>
                    </Body>
                    */}
                    <Divider>✷</Divider>
                    <div className='f3 mb2 sans-serif'>Some other things about me</div>
                    <Body>Find me on <StyledAnchor href='http://instagram.com/_ksho' target='_blank'>Instagram</StyledAnchor>
                        , <StyledAnchor href='http://github.com/ksho' target='_blank'>Github</StyledAnchor>
                        , and <StyledAnchor href='http://twitter.com/_ksho' target='_blank'>Twitter</StyledAnchor>.
                    </Body>
                </Grid>
            </div>
        );
    }
}
