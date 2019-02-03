import * as React from 'react';
import styled from 'styled-components';
import Head from './head';

export default class App extends React.Component {

    render() {
        return (
            <div className='baskerville'>
                <Head/>
                <Grid>
                    <Title>This is Karl's website.</Title>
                    <Body>Find me on <Link href='http://instagram.com/_ksho' target='_blank'>Instagram</Link>
                        , <Link href='http://github.com/ksho' target='_blank'>Github</Link>
                        , and <Link href='http://twitter.com/_ksho' target='_blank'>Twitter</Link>.
                    </Body>
                </Grid>
            </div>
        );
    }
}

// Tachyons + styled-components -- https://medium.com/@jikkujose/tachyons-styled-components-pure-joy-6173d3888548
const Title = styled.div.attrs({
    className: 'green sans-serif f2',
})`
    margin-bottom: 16px;
`;

const Grid = styled.div`
    padding: 32px;
    padding-top: 170px;
`;

const Body = styled.div.attrs({
    className: 'serif dark-grey',
})``

const Link = styled.a.attrs({
    className: `dark-gray link bb hover-gold`,
})``
