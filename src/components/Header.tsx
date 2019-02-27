import * as React from 'react';
import { Subtitle, Title } from './SharedComponents';

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <Title href='/'>KARL SHOULER.</Title>
                <Subtitle>This is where I share my thoughts on technology, photography, and music.</Subtitle>
            </div>
        );
    }
}
