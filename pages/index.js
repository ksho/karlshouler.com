import styled from 'styled-components';
import Head from './head'

export default () => 
    <div>
        <Head/>
        <GridLeft>
            <Title>This is Karl\'s website.</Title>
        </GridLeft>
    </div>

// Tachyons + styled-components -- https://medium.com/@jikkujose/tachyons-styled-components-pure-joy-6173d3888548
const Title = styled.div.attrs({
    className: 'f2 green',
})``;

const GridLeft = styled.div.attrs({
    className: 'fl w-50',
})`
    padding: 32px;
    padding-top: 200px;
`;
