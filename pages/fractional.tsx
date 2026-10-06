import * as React from 'react';
import Head from 'next/head';

import PageContainer from 'src/components/PageContainer';
import { Content, StyledAnchor } from 'src/components/SharedComponents';

// /fractional was the scaling page's original address and has already been
// shared, so it forwards there. A static export can't do server redirects, and
// a redirect object in S3 would be removed by the deploy's `s3 sync --delete`,
// so the redirect ships as a page: a meta refresh in the exported HTML, with a
// plain link as the fallback.
const DESTINATION = '/scaling/';

export default class FractionalRedirect extends React.Component {
    render() {
        return (
            <PageContainer title='Scaling | Karl Shouler' noIndex>
                <Head>
                    <meta httpEquiv='refresh' content={`0; url=${DESTINATION}`} />
                </Head>
                <Content>
                    This page has moved. <StyledAnchor href={DESTINATION}>Continue to the new page.</StyledAnchor>
                </Content>
            </PageContainer>
        );
    }
}
