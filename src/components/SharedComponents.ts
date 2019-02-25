import styled from 'styled-components';

// Tachyons + styled-components -- https://medium.com/@jikkujose/tachyons-styled-components-pure-joy-6173d3888548
export const Title = styled.a.attrs({
    className: 'sans-serif f2',
})`
    color: #3a58d2;
    text-decoration: none;
`;

export const Subtitle = styled.div.attrs({
    className: 'sans-serif f5 dark-grey',
})`
    margin-top: 10px;
    text-decoration: none;
`;

export const Grid = styled.div.attrs({
    className: `ml7 pt4`,
})`
    width: 660px;
`;

export const Body = styled.div.attrs({
    className: 'baskerville dark-grey',
})`
    font-size: 18px;
    margin-bottom: 16px;
`;

export const StyledAnchor = styled.a.attrs({
    className: `dark-gray link bb hover-gold`,
})`
    cursor: pointer;
`

export const ListWrapper = styled.div.attrs({
    className: `mb1`,
})`
    
`;

export const Divider = styled.div`
    display: flex;
    justify-content: center;
    margin: 16px 0;
`;
