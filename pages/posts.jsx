import React from 'react'
import Link from 'next/link';

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

                const title = value.default().props.title
                const url = `/blog/${slug}`
                const date = value.default().props.date || value.default().props.created

                return {
                    title,
                    slug,
                    url,
                    date,
                };
            });

            return data;
        })(require.context('./blog', true, /\.md$/));

        return {
            posts
        };
    }

    render() {
        return (
            <PageContainer>
                {this.props.posts.map(({ title, slug, url, date }) => 
                    (
                        <div className='mb3'>
                            <StyledAnchor href={url} key={slug}>
                                <span className='sans-serif fw4'>{title}</span>
                            </StyledAnchor>
                            <span className='ml2 sans-serif f7 moon-gray'>{date}</span>
                        </div>
                    )
                )}
            </PageContainer>
        )
    }
}
