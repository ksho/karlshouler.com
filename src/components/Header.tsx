import * as React from 'react';
import { Subtitle, Title } from './SharedComponents';
import styled from 'styled-components';

export default class Header extends React.Component {
    
    public renderNavigation() {
        return (
            <NavigationContainer>
                <div>Writing</div>
                <div>Photography</div>
                <div>Contact</div>
            </NavigationContainer>
        );
    }
    
    public render() {
        return (
            <div>
                <Title href='/'>KARL SHOULER.</Title>
                {/* <Subtitle>Moving bits around, shooting photos, writing songs.</Subtitle> */}
                {/* <Subtitle>This is where I share my thoughts on technology, photography, and music.</Subtitle> */}
                { this.renderNavigation() }
            </div>
        );
    }
}

const NavigationContainer = styled.div.attrs({
    className: 'measure-narrow-ns sans-serif f6 fw2'
})`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`;
