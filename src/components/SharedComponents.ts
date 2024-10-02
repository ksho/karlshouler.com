import styled from 'styled-components';

// Tachyons + styled-components -- https://medium.com/@jikkujose/tachyons-styled-components-pure-joy-6173d3888548
export const TitlePop = styled.a.attrs({
    className: 'f1',
})`
    font-family: "Arial Black", -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", 'Inter', "Helvetica Neue", sans-serif;
    color: #f7f7f7;
    text-decoration: none;
    text-shadow: -3px -3px #3a48af, 3px 3px #5fd1e4;
    font-weight: 900;
    letter-spacing: 4px;
    padding-left: 2px;
`;

export const Title = styled.a.attrs({
    className: 'f1',
})`
    font-family: "Arial", -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", 'Inter', "Helvetica Neue", sans-serif;
    color: #f7f7f7;
    text-decoration: none;
    text-shadow: 1px -1px #3c3c3c, 2px -2px #3090c5, -1px 1px #d5b6c5;
    font-weight: 900;
    letter-spacing: 4px;
    padding-left: 2px;
`;

export const TitleWarm = styled.a.attrs({
    className: 'f1',
})`
    font-family: -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", 'Inter', "Helvetica Neue", sans-serif;
    color: #d8a158;
    text-decoration: none;
    text-shadow: -4px -4px #f9c888, 4px 4px #1e1f1f;
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
    className: `pt4 w-100 w-50-l ml7-l ml5-m w-70-m pa3`,
})`
    -webkit-font-smoothing: antialiased; /* Chrome, Safari */
    -moz-osx-font-smoothing: grayscale;
    font-feature-settings: "onum" 1, "pnum" 1, "kern" 1, "ss01" 1;
`;

export const Content = styled.div.attrs({
    className: 'sans-serif dark-grey',
})`
    font-size: 16px;
    margin-bottom: 16px;
    font-weight: 300;
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
