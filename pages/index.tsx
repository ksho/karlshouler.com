import * as React from 'react';

import Link from 'next/link'
import { Content, Divider, LiNonBulleted, UlNonBulleted, StyledAnchor } from 'src/components/SharedComponents';
import PageContainer from 'src/components/PageContainer';

interface LinkItem {
    href: string,
    title: string,
    description?: string,
    past?: boolean,
}

const WRITING_ITEMS: LinkItem[] = [
    { href: '/posts/2020-11-02-x100v', title: 'The Fuji X100S (and V); On Upgrading High Value Objects' },
    { href: '/posts/2019-08-10-when-is-golden-hour-updates', title: 'whenisgoldenhour; now with HTTPS and React' },
    { href: '/posts/2019-05-31-secure-cloud-storage', title: 'Securing Personal Documents in the Cloud with Cryptomator' },
    { href: '/posts/2017-08-06-when-is-golden-hour', title: 'Building whenisgoldenhour.com' },
    { href: '/posts/2015-12-15-mile', title: 'M.I.L.E.' },
];

const PROJECT_ITEMS: LinkItem[] = [
    { href: 'http://thirtymadison.com', title: 'Thirty Madison' },
    { href: 'https://github.com/ksho/yearbook', title: 'Yearbook', description: 'Photo gallery app to host annual yearbooks' },
    { href: 'https://beartrap.email', title: 'Bear Trap', description: 'Daily email service for stock futures and insights' },
    { href: 'https://whenisgoldenhour.com', title: 'whenisgoldenhour.com', description: 'Golden hour, where you\'re standing' },
    { href: 'http://kshopho.com', title: 'Karl Shouler Photography' },
    { href: 'http://curalate.com', title: 'Curalate', description: 'Acquired by Bazaarvoice', past: true },
    { href: 'http://monetate.com', title: 'Monetate', description: 'Acquired by Kibo Commerce', past: true },
];

export default class App extends React.Component {
    public renderWritingItems(items: LinkItem[]) {
        return (
            items.map((i) => {
                return (
                    <LiNonBulleted key={i.href}>
                        <Link href={i.href} as={i.href} style={{cursor: "pointer", textDecoration: "none"}} className={`dark-gray link bb hover-gold mb1`}>
                            <span>{i.title}</span>
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
                        {i.past &&
                            <span>*</span>
                        }
                        <StyledAnchor href={i.href} target='_blank'>
                            {i.title}
                        </StyledAnchor>
                        { i.description &&
                            <span className='gray f7'>
                                &nbsp;&nbsp;{i.description}
                            </span>
                        }
                    </LiNonBulleted>
                )
            })
        )
    }

    render() {
        return (
            <PageContainer>
                {/* <h4 className='fw4 mb1 sans-serif'>Hey! I'm Karl. This is where I share my love of technology, photography, and music.</h4>
                <Divider>ᐧ ᐧ ᐧ</Divider> */}
                <div className='f4 mb2 sans-serif'>Working on..</div>
                <Content>
                    <UlNonBulleted>
                        { this.renderProjectItems() }
                    </UlNonBulleted>
                    <div><span>* </span><span className='f7'>past work</span></div>
                </Content>
                <Divider>ᐧ ᐧ ᐧ</Divider>
                {/* <Content>
                    <div className='f4 mb2 sans-serif'>Recents</div>
                    <UlNonBulleted>
                        { this.renderWritingItems(WRITING_ITEMS) }
                    </UlNonBulleted>
                    <Link href='/posts' as='/posts' className='hover-gold link sans-serif f6 gray i no-underline pointer'>
                        <span>..the rest of them</span>
                    </Link>
                </Content>
                <Divider>ᐧ ᐧ ᐧ</Divider> */}
                <Content>Find me on <StyledAnchor href='http://instagram.com/_ksho' target='_blank'>Instagram</StyledAnchor>
                    , <StyledAnchor href='http://github.com/ksho' target='_blank'>Github</StyledAnchor>
                    , <StyledAnchor href='https://www.linkedin.com/in/karlshoulerjr/' target='_blank'>LinkedIn</StyledAnchor>
                    , and <StyledAnchor href='http://twitter.com/_ksho' target='_blank'>Twitter</StyledAnchor>.
                </Content>
            </PageContainer>
        )
    }
}
