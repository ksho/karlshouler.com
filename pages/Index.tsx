import * as React from 'react';

import Link from 'next/link'
import { Content, Divider, LiNonBulleted, UlNonBulleted, StyledAnchor } from 'src/components/SharedComponents';
import PageContainer from 'src/components/PageContainer';

interface LinkItem {
    href: string,
    title: string,
}

const WRITING_ITEMS: LinkItem[] = [
    { href: '/posts/2018-11-28-secure-cloud-storage', title: 'Securing Personal Documents in the Cloud with Cryptomator' },
    { href: '/posts/2017-08-06-when-is-golden-hour', title: 'Building whenisgoldenhour.com' },
    { href: '/posts/2015-12-15-mile', title: 'M.I.L.E.' },
];

const PHOTO_ITEMS: LinkItem[] = [
    { href: '/posts/2016-09-21-sunset', title: 'Dat Phl Sunset' },
    { href: '/posts/2015-05-10-discover-the-railyard', title: 'Discover the Railyard' },
];

const PROJECT_ITEMS: LinkItem[] = [
    { href: 'http://engineering.curalate.com', title: 'Curalate' },
    { href: 'http://kshopho.com', title: 'Karl Shouler Photography' },
    { href: 'https://whenisgoldenhour.com', title: 'whenisgoldenhour.com' },
];

export default class App extends React.Component {
    public renderWritingItems(items: LinkItem[]) {
        return (
            items.map((i) => {
                return (
                    <LiNonBulleted key={i.href}>
                        <Link href={i.href} as={i.href}>
                            <StyledAnchor>{i.title}</StyledAnchor>
                        </Link>
                    </LiNonBulleted>
                )
            })
        )
    }

    public renderProjectItems() {
        return (
            PROJECT_ITEMS.map((i) => {
                return (
                    <LiNonBulleted key={i.href}>
                        <StyledAnchor href={i.href} target='_blank'>
                            {i.title}
                        </StyledAnchor>
                    </LiNonBulleted>
                )
            })
        )
    }

    render() {
        return (
            <PageContainer>
                <Content>
                    <h4 className='fw4 mb1 sans-serif'>Hey! I'm Karl. This is where I share my love of technology, photography, and music.</h4>
                </Content>
                <Divider>ᐧ ᐧ ᐧ</Divider>
                <Content>
                    <div className='f4 mb2 sans-serif'>Recent things</div>
                    <UlNonBulleted>
                        { this.renderWritingItems(WRITING_ITEMS) }
                    </UlNonBulleted>
                    <Link href='/posts' as='/posts'>
                        <span className='sans-serif f6 gray i no-underline'>..the rest of them</span>
                    </Link>
                </Content>
                <Divider>ᐧ ᐧ ᐧ</Divider>
                <div className='f4 mb2 sans-serif'>Projects I'm working on</div>
                <Content>
                    <UlNonBulleted>
                        { this.renderProjectItems() }
                    </UlNonBulleted>
                </Content>
                <Divider>ᐧ ᐧ ᐧ</Divider>
                <Content>
                    <div className='f4 mb2 sans-serif'>Things I've seen</div>
                    <UlNonBulleted>
                        { this.renderWritingItems(PHOTO_ITEMS) }
                    </UlNonBulleted>
                </Content>
                <Divider>ᐧ ᐧ ᐧ</Divider>
                <Content>Find me on <StyledAnchor href='http://instagram.com/_ksho' target='_blank'>Instagram</StyledAnchor>
                    , <StyledAnchor href='http://github.com/ksho' target='_blank'>Github</StyledAnchor>
                    , and <StyledAnchor href='http://twitter.com/_ksho' target='_blank'>Twitter</StyledAnchor>.
                </Content>
            </PageContainer>
        )
    }
}
