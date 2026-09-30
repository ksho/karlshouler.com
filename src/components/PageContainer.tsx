import * as React from 'react';
import { Divider, Grid } from 'src/components/SharedComponents';

import Header from 'src/components/Header';
import Head from 'pages/head';

interface IOwnState {
    children: React.ReactNode;
    title?: string;
    description?: string;
    noIndex?: boolean;
}

export default class PageContainer extends React.Component<IOwnState> {

    public render() {
        const { children, title, description, noIndex } = this.props;

        return (
            <div className='baskerville ma2'>
                <Head title={title} description={description} noIndex={noIndex}/>
                <Grid>
                    <Header/>
                    <Divider>✷</Divider>
                    {children}
                </Grid>
            </div>
        )
    }
}
