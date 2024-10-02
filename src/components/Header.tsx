import * as React from 'react';
import Link from 'next/link'
import { Title } from './SharedComponents';
import styled from 'styled-components';

export default class Header extends React.Component {
    
    public renderNavigation() {
        return (
            <NavigationContainer>
                <div><Link legacyBehavior href='/posts'><NavLink>Writing</NavLink></Link></div>
                <div><NavLink href='https://kshopho.com' target='_blank'>Photography</NavLink></div>
                <div>Contact</div>
            </NavigationContainer>
        );
    }
    
    public render() {
        return (
            <div>
                <Title href='/'>KARL SHOULER</Title>
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

const NavLink = styled.a.attrs({
    className: 'near-black hover-gold link'
})`
    cursor: pointer;
    font-weight: 500;
`;
