import * as React from 'react';
import { Divider, Grid } from 'src/components/SharedComponents';

import Header from 'src/components/Header';
import Head from 'pages/head';

interface IOwnState {
    children: unknown;
}

export default class PageContainer extends React.Component<IOwnState> {

    public render() {
        const { children } = this.props;

        return (
            <div className='baskerville ma2'>
                <Head/>
                <Grid>
                    <Header/>
                    <Divider>✷</Divider>
                    {children}
                </Grid>
            </div>
        )
    }
}
