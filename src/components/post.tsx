import React from 'react'
import styled from 'styled-components';

import Head from 'pages/head';

import { Content, Divider, Grid } from './SharedComponents';
import Header from './Header';
interface IOwnState {
    title: string;
    created: string;
    children: unknown;
}

export default class Post extends React.Component<IOwnState> {
    render() {
        const { title, created, children } = this.props;
        return (
            <div className='baskerville ma2'>
                <Head/>
                <Grid>
                    <Header/>
                    <Divider>✷</Divider>
                    <PostMeta>
                        <h2 className='sans-serif lh-title fw3 ma0'>{title}</h2>
                        <CreatedTime>{created}</CreatedTime>
                    </PostMeta>
                    <Content>
                        {children}
                    </Content>
                </Grid>
            </div>
        );
    }
}

const PostMeta = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const CreatedTime = styled.div.attrs({
    className: `sans-serif f7`,
})`
    color: #797979;
    font-weight: 500;
`;
