import React from 'react'
import styled from 'styled-components';

import PageContainer from 'src/components/PageContainer';
import { Content } from './SharedComponents';

interface IOwnState {
    title: string;
    created: string;
    children: unknown;
}

export default class Post extends React.Component<IOwnState> {
    render() {
        const { title, created, children } = this.props;
        return (
            <PageContainer>
                <PostMeta>
                    <h2 className='sans-serif lh-title fw3 ma0'>{title}</h2>
                    <CreatedTime>{created}</CreatedTime>
                </PostMeta>
                <Content>
                    {children}
                </Content>
            </PageContainer>
        );
    }
}

const PostMeta = styled.div``;

const CreatedTime = styled.div.attrs({
    className: `sans-serif f7`,
})`
    color: #797979;
    font-weight: 500;
    margin-top: 8px;
`;
