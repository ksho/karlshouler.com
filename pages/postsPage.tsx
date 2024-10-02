import React from 'react'
import Link from 'next/link';
import _ from 'underscore';
import styled from 'styled-components';

import PageContainer from 'src/components/PageContainer';

interface IOwnState {
    posts: Post[],
    children: unknown,
}

interface Post {
    title: string,
    slug: string,
    url: string,
    created: string,
    tags: string[],
    draft: boolean,
}

export default class Posts extends React.Component<IOwnState> {

    static async getInitialProps() {
        // Get posts from folder
        const posts = (ctx => {
            const keys = ctx.keys().filter(k => k.startsWith('./'));
            const values = keys.map(ctx);

            const data = keys.map((key: string, index: number) => {
                // Create slug from file name
                const slug = key.replace(/^.*[\\\/]/, '').split('.').slice(0, -1).join('.');
                const value: any = values[index];

                const title = value.default().props.title;
                const url = `/posts/${slug}/`;
                const created = value.default().props.created;
                const tags = value.default().props.tags;
                const draft = value.default().props.draft;

                return {
                    title,
                    slug,
                    url,
                    created,
                    tags,
                    draft,
                };
            });

            return data;
        })(require.context('./posts', true, /\.md$/));

        return {
            posts,
        };
    }

    render() {
        const { posts } = this.props;
        // List posts with the most recent one first.
        const postList = _(posts).sortBy((i) => {
            return i.created;
        }).reverse();

        // const nonPhotoPosts = _(postList).reject((i) => {
        //     return i.tags && _(i.tags).contains('photo');
        // });
        return (
            <PageContainer>
                { postList.filter(({draft}) => !draft).map(({ title, slug, url, created, tags }) =>
                    (
                        <div className='mb3' key={slug}>
                            <Link href={url} as={url} style={{cursor: "pointer", textDecoration: "none"}} className={`sans-serif fw4 dark-gray link hover-gold mb1`}>
                                <span>{title}</span>
                            </Link>
                            <Created>{created}</Created>
                            <Tags>{tags.join(', ')}</Tags>
                        </div>
                    )
                ) }
            </PageContainer>
        )
    }
}

export const CreatedWarm = styled.span.attrs({
    className: `ml2 sans-serif f7 mid-gray`,
})``;

export const Created = styled.span.attrs({
    className: `ml2 sans-serif f7 light-silver`,
})``;

export const TagsWarm = styled.span.attrs({
    className: `ml2 sans-serif f7`,
})`
    color: #ffd499
`;

export const Tags = styled.span.attrs({
    className: `ml2 sans-serif f7 moon-gray`,
})``;
