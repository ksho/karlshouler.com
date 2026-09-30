import * as React from 'react';

import PageContainer from 'src/components/PageContainer';
import { Content, UlNonBulleted, LiNonBulleted, StyledAnchor } from 'src/components/SharedComponents';
import components from 'src/components/md-components';

// Unlisted page: nothing on the site links here, it carries a noindex robots
// tag, and its content only renders client-side so crawlers and scrapers that
// don't run JavaScript get an empty page.

// Styled like the markdown posts.
const { h1: H1, h2: H2, h3: H3, p: P, ol: Ol, ul: Ul, li: Li, blockquote: Blockquote, cite: Cite, strong: Strong } = components;

interface Section {
    id: string,
    title: string,
}

interface Role {
    title: string,
    highlights: string[],
}

interface Testimonial {
    quote: string,
    author: string,
}

const SECTIONS: Section[] = [
    { id: 'what-i-do', title: 'What I do' },
    { id: 'experience', title: 'Experience / credibility' },
    { id: 'what-people-say', title: 'What people say' },
    { id: 'my-pov', title: 'My POV' },
    { id: 'how-to-work-with-me', title: 'How to work with me' },
];

const ROLES: Role[] = [
    {
        title: 'Director of Engineering- Perpay',
        highlights: [
            'Increased output while reducing headcount 30%, as revenue 3x’d ($XXX millions in revenue)',
            'Evolved org from single to multi-product',
            'Reduced P1 incidents from many/wk —> 1 / month',
            'Took entire 100 person company 0 —> 1 on AI transformation',
            'Grew 4 first-time managers',
        ],
    },
    {
        title: 'Director of Engineering- Thirty Madison (acq. by RemedyMeds)',
        highlights: [
            'Scaled big healthcare brands ($XXX millions in rev) through tech maturity and merger with another hundred person org',
            'High clinical, regulatory, security stakes',
            'Grew 5 first-time managers',
        ],
    },
    {
        title: 'Staff Engineer- Curalate (acq. by Bazaarvoice)',
        highlights: [
            'Built SaaS products for the world’s biggest ecomm brands from Series C through acquisition',
            'Led big platform migrations across 1,000+ clients with no downtime',
        ],
    },
    {
        title: 'Engineering Director- Monetate (acq. by Kibo Commerce)',
        highlights: [
            'Engineer #5 from Seed through Series C and 40x revenue',
            `Built SaaS platform that enabled the world's biggest brands to personalize their on-site experience based on visitor attributes and behavior`
        ],
    },
];

const TESTIMONIALS: Testimonial[] = [
    {
        quote: 'Thirty Madison was a complicated place to build an engineering organization: you have healthcare requirements, security, sensitive information, and a business serving customers directly. Karl was a strong voice and an architect of how we navigated that. He makes it look easy, even though it absolutely isn’t.',
        author: 'Andrew Smagin, Sr Engineering Manager, Thirty Madison',
    },
    {
        quote: 'Karl has mentored me through several of the biggest transitions in my career, from individual contributor to engineering manager and more recently into a founding engineer role, and each time his guidance held up when I put it to work.',
        author: 'Alexander Pearson-Goulart, Founding Engineer, Sailor Health',
    },
    {
        quote: 'Karl became a real thought leader inside our company on what AI means for how engineering teams should be structured and run – and that thinking reached well beyond his own team. He builds lasting capability, not just short-term output.',
        author: 'Chris DiMarco, CEO, Perpay',
    },
];

interface IOwnState {
    mounted: boolean,
}

export default class Fractional extends React.Component<{}, IOwnState> {
    state: IOwnState = { mounted: false };

    componentDidMount() {
        this.setState({ mounted: true });
    }

    public renderContent() {
        return (
            <Content>
                {/* <UlNonBulleted>
                    { SECTIONS.map((s) =>
                        <LiNonBulleted key={s.id}>
                            <StyledAnchor href={`#${s.id}`}>{s.title}</StyledAnchor>
                        </LiNonBulleted>
                    ) }
                </UlNonBulleted> */}

                <H3 id='what-i-do'>What I do</H3>
                <P>High-growth startups change seasons every year or so; especially today. The way your Engineering team works has to change with it, and it rarely does on its own because everyone’s heads down shipping the work. I help you and your team figure out what the next version looks like, and put you on the path to implementation.
</P>

                <H3 id='my-pov'>My POV</H3>
                <P>Your focus is rightfully on your customer and product, and it’s easy to end up in place where you blink and your founding engineer is managing 10 people when they never really thought about how or if they were the best person to do it.</P>
                <P>Should they promote another one of them to manage, hire from outside, have someone else pick up all people lead responsibilities?</P>
                <P>I’ll partner with you to build a map you have high conviction in and coach the team through it.</P>
                <P>Hiring pipelines, manager coaching, career frameworks, vendor management, org design are all possible pieces to the puzzle.</P>

                <H3 id='how-to-work-with-me'>How to work with me</H3>
                <P>I work directly with founders/exec leadership and their engineering team, to figure out what their goals are and map out how to get there. This applies to teams who haven’t thought much at all about what’s possible, as well as those that already have some sense of direction but need to operate through it. One-time org diagnostics and longer term embedded coaching and fractional execution available.</P>
                <P>Please schedule time with me <StyledAnchor href='https://fantastical.app/karl-shouler/30-min-meet' target='_blank'>here.</StyledAnchor></P>

                <H3 id='what-people-say'>What people say</H3>
                { TESTIMONIALS.map((t) =>
                    <div key={t.author}>
                        {/* f5 (16px, matching body text) overrides the post blockquote's f4 */}
                        <Blockquote className='f5'>“{t.quote}”</Blockquote>
                        <Cite><Strong>-{t.author}</Strong></Cite>
                    </div>
                ) }

                <H3 id='experience'>Experience / credibility</H3>
                <Ol>
                    <Li>I’ve built within several startups, Seed → Series C across e-commerce, fintech, healthtech, SaaS, and D2C .. supporting $1mm to hundreds of millions in revenue</Li>
                    <Li>Within Engineering orgs at their first 5 heads up to 100+ spanning multiple specialities and business units</Li>
                    <Li>I’ve managed $2mm+ vendor budgets, grown a dozen first time managers, and guided teams through countless consequential situations and incidents</Li>
                </Ol>
                <P>I’ve led through numerous of seasons of tech startups .. specifically:</P>
                {/* <Ul> */}
                    { ROLES.map((r) =>
                        <P key={r.title}>
                            <Strong>{r.title}</Strong>
                            <Ul>
                                { r.highlights.map((h) => <Li key={h}>{h}</Li>) }
                            </Ul>
                        </P>
                    ) }
                {/* </Ul> */}
            </Content>
        );
    }

    render() {
        return (
            <PageContainer title='Fractional | Karl Shouler' noIndex>
                { this.state.mounted && this.renderContent() }
            </PageContainer>
        );
    }
}
