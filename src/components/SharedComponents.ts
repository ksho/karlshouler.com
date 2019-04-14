import styled from 'styled-components';

// Tachyons + styled-components -- https://medium.com/@jikkujose/tachyons-styled-components-pure-joy-6173d3888548
export const Title = styled.a.attrs({
    className: 'sans-serif f1',
})`
    color: #f7f7f7;
    text-decoration: none;
    /* text-shadow: 4px -4px #3a48af, 8px -8px #3ed8f1; */
    /* text-shadow: 4px -4px #3a48af, 8px -8px #df35ea; */
    text-shadow: -4px -4px #3a48af, 4px 4px #3ed8f1;
    font-weight: 900;
    letter-spacing: 3px;
    padding-left: 2px;
`;

export const Subtitle = styled.div.attrs({
    className: 'sans-serif f5 dark-grey',
})`
    margin-top: 10px;
    text-decoration: none;
`;

export const Grid = styled.div.attrs({
    className: `pt4 w-100 ma2 w-50-l ml7-l ml5-m w-70-m pa2`,
})`
    -webkit-font-smoothing: antialiased; /* Chrome, Safari */
    -moz-osx-font-smoothing: grayscale;
    font-feature-settings: "onum" 1, "pnum" 1, "kern" 1, "ss01" 1;
`;

export const Content = styled.div.attrs({
    className: 'baskerville dark-grey',
})`
    font-size: 18px;
    margin-bottom: 16px;
`;

export const StyledAnchor = styled.a.attrs({
    className: `dark-gray link bb hover-gold mb1`,
})`
    cursor: pointer;
`;

export const Divider = styled.div`
    display: flex;
    justify-content: center;
    margin: 16px 0;
`;

export const UlNonBulleted = styled.ul`
    list-style-type: none;
    padding-left: 0;
    margin-top: 5px;
`;

export const LiNonBulleted = styled.li.attrs({
    className: 'mb2',
})``;
