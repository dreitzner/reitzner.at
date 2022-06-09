import type { Talk } from "src/global";


export const talks: Talk[] = [
    {
        title: 'How to build a preorder service with SvelteKit in 8 weeks',
        description: `I'll talk about how we build a preorder service for Billa PLUS (part of REWE group) as a team of nine, from 4 countries, in 8 weeks.
        The main focus will be on how we build out the Frontend with SvelteKit and tailwind. We connected the frontend to a .NET 5 backend running inside of docker.
        As a team we really enjoyed the freedom of working with a fast dev environment (powered by vite), coupled with the rapid style development (JIT compilation of tailwind) and all of the tools (e.g. animations) baked into svelte, while maintaining a small bundle size shipped to the client.
        I'll also mention the deployment to Azure static web app and how the api driven static site approach worked for us.
        I'll close with some of the challenges we faced, specifically around stale data and team communication, before I'll show some code examples.`,
        date: '2022-06-14',
        slug: '/talks/2022-06-we-are-developers',
        assets: [
            {
                name: 'Slides',
                url: '/public/talks/2022-06-we-are-developers.ppsx',
            },
            {
                name: 'Vorbestellservice',
                url: 'https://vorbestellservice.billa.at/',
            },
            {
                name: 'Svelte',
                url: 'https://svelte.dev/',
            },
            {
                name: 'Tailwind',
                url: 'https://tailwindcss.com/',
            },
            {
                name: 'Svackages',
                url: 'https://github.com/svackages',
            },
        ],
    },
    {
        title: 'Svelte Radio Episode 38: SvelteKit in Production with Domenik Reitzner',
        description: `This week we talk with Domenik Reitzner about a project they've built and launched using SvelteKit.`,
        date: '2022-04-08',
        slug: '/talks/2022-04-svelte-radio-38',
        assets: [
            {
                name: 'Podcast',
                url: 'https://www.svelteradio.com/episodes/sveltekit-in-production-with-domenik-reitzner',
            },
        ],
    },
    {
        title: 'Webrush Episode 170: Building a Web App with SvelteKit with Domenik Reitzner',
        description: `Domenik Reitzner returns to talk about his experiences building an app with SvelteKit. How did Svelte help meet their goals for the app? What went wrong with the project? How much overhead did TypeScript add? What other technologies did they use?`,
        date: '2022-02-10',
        slug: '/talks/2022-02-webrush-170',
        assets: [
            {
                name: 'Podcast',
                url: 'https://webrush.io/episodes/episode-170-building-a-web-app-with-sveltekit-with-domenik-reitzner',
            },
        ],
    },
    {
        title: 'SvelteKit and the dawn of serverless – Domenik Reitzner @TechTalk Days 2021',
        description: `Domenik Reitzner von Emakina CEE zeigt in seinem devjobs.at TechTalk die Vorteile von SvelteKit sowie serverless und demonstriert diese anhand von Beispielen.`,
        date: '2021-07-05',
        slug: '/talks/2021-07-sveltkit-and-the-dawn-of-serverless',
        assets: [
            {
                name: 'Video',
                url: 'https://youtu.be/Z_H5g2NR080',
            },
        ],
    },
    {
        title: 'TechLead-Story: Domenik Reitzner, Development Lead von Emakina CEE',
        description: `Der Development Lead von Emakina CEE Domenik Reitzner gibt im Interview Einblicke über die Zusammenstellung der Teams, das Recruiting, die Lernkultur – Technik und Freizeit betreffend – im Unternehmen, sowie die Herangehensweise an die Projekte.`,
        date: '2021-07-12',
        slug: '/talks/2021-07-tech-lead-story',
        assets: [
            {
                name: 'Video',
                url: 'https://youtu.be/xFxVuZgb1AM',
            },
        ],
    },
    {
        title: 'Webrush Episode 83: Adventcalendar with Svelte - Domenik Reitzner',
        description: `Craig and John talk with Domenik Reitzner about Svelte. Can you write less code and build boilerplate-free components using HTML, CSS, and Javascript? What about the lack of cli? What is it really like developing with Svelte and why might someone not want to use Svelte?`,
        date: '2020-05-12',
        slug: '/talks/2020-05-webrush-83',
        assets: [
            {
                name: 'Podcast',
                url: 'https://webrush.io/episodes/episode-83-online-store-with-svelte-domenik-reitzner',
            },
        ],
    },
];
