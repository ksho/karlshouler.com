import React from 'react'
import Link from 'next/link';
import _ from 'underscore';

import PageContainer from 'src/components/PageContainer';
import { StyledAnchor } from 'src/components/SharedComponents';

export default class extends React.Component {
    static async getInitialProps() {
        // Get posts from folder
        const posts = (ctx => {
            const keys = ctx.keys();
            const values = keys.map(ctx);

            const data = keys.map((key, index) => {
                // Create slug from file name
                const slug = key.replace(/^.*[\\\/]/, '').split('.').slice(0, -1).join('.');
                const value = values[index];

                const title = value.default().props.title;
                const url = `/posts/${slug}`;
                const created = value.default().props.created;
                const tags = value.default().props.tags;

                return {
                    title,
                    slug,
                    url,
                    created,
                    tags,
                };
            });

            return data;
        })(require.context('./posts', true, /\.md$/));

        return {
            posts
        };
    }

    render() {
        // List posts with the most recent one first.
        const postList = _(this.props.posts).sortBy((i) => {
            return i.created;
        }).reverse();

        const nonPhotoPosts = _(postList).reject((i) => {
            return i.tags && _(i.tags).contains('photo');
        });
        return (
            <PageContainer>
                { postList.map(({ title, slug, url, created, tags }) =>
                    (
                        <div className='mb3' key={slug}>
                            <Link href={url} as={url}>
                                <StyledAnchor className='sans-serif fw4'>{title}</StyledAnchor>
                            </Link>
                            <span className='ml2 sans-serif f7 light-silver'>{created}</span>
                            <span className='ml2 sans-serif f7 moon-gray'>{tags.join(', ')}</span>
                        </div>
                    )
                ) }
            </PageContainer>
        )
    }
}
