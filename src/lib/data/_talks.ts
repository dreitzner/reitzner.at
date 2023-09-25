import type { Talk } from "../../global";

export const talks: Talk[] = [
    {
        title: 'Progressive Enhancement with SvelteKit',
        description: `Is there a way to build your web app, so it runs even without JavaScript? With SvelteKit it is easy to progressively enhance your app so it will feel like an SPA, but will continue to function the worst conditions. By looking at an example to-do app, we can see the patterns that enable us to build robust applications with SvelteKit.`,
        date: '2023-09-27',
        slug: '/talks/2023-09-viennajs',
        assets: [
            {
                name: 'Slides',
                url: 'https://docs.google.com/presentation/d/141oACbTjUnnHw4rH4RXVQad5a8WaI-q2NTAOBjMk-WY/edit?usp=sharing',
            },
            {
                name: 'Repo',
                url: 'https://github.com/dreitzner/progressive-todo',
            },
            {
                name: 'Svelte',
                url: 'https://svelte.dev/',
            },
            {
                name: 'SvelteKit',
                url: 'https://kit.svelte.dev/',
            },
            {
                name: 'Svelte Snaps (by Rich Harris)',
                url: 'https://sveltesnaps.vercel.app/',
            },
            {
                name: 'Progressive Enhancement on mdn',
                url: 'https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement?retiredLocale=de',
            },
            {
                name: 'ViennaJS',
                url: 'https://viennajs.org/',
            },
        ],
        type: "talk",
    },
    {
        title: 'Progressive Enhancement with SvelteKit',
        description: `I talked about progressive enhancement and how we can make our applications more robust. SvelteKit provides a lot of nice features out of the box `,
        date: '2023-06-19',
        slug: '/talks/2023-06-svienna',
        assets: [
            {
                name: 'Slides',
                url: 'https://drive.google.com/file/d/1KHm3HNiMFiQ6Z1qXHULYuxmiFZXaO9kp/view?usp=sharing',
            },
            {
                name: 'Repo',
                url: 'https://github.com/dreitzner/progressive-todo',
            },
            {
                name: 'Svelte',
                url: 'https://svelte.dev/',
            },
            {
                name: 'SvelteKit',
                url: 'https://kit.svelte.dev/',
            },
            {
                name: 'Svelte Snaps (by Rich Harris)',
                url: 'https://sveltesnaps.vercel.app/',
            },
            {
                name: 'Progressive Enhancement on mdn',
                url: 'https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement?retiredLocale=de',
            },
        ],
        type: "talk",
    },
    {
        title: 'Let\'s have a <dialog>',
        description: `The topic of this talk was the <dialog> element. It has some nice accaccibility features baked in. We can use it with SvelteKit to enhance our UX by using the platform.`,
        date: '2023-02-20',
        slug: '/talks/2023-02-svienna',
        assets: [
            {
                name: 'Video',
                url: 'https://youtu.be/XkC29lskoM0',
            },
            {
                name: 'Slides',
                url: 'https://drive.google.com/file/d/15fYpv-SCQksO3caJpnsoxPHYsHtOeus8/view?usp=sharing',
            },
            {
                name: 'Repo',
                url: 'https://github.com/dreitzner/lets-have-a-dialog',
            },
            {
                name: 'Svelte',
                url: 'https://svelte.dev/',
            },
            {
                name: 'SvelteKit',
                url: 'https://kit.svelte.dev/',
            },
            {
                name: '<dialog> on mdn',
                url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog',
            },
        ],
        type: "talk",
    },
    {
        title: 'The easy way - an introduction to Sveltekit',
        description: `In this talk, I present the story of Franz and how he found his way to Svelte.
        There is also a nice demo of the SvelteKit Starter App.`,
        date: '2022-10-24',
        slug: '/talks/2022-10-svienna',
        assets: [
            {
                name: 'Video',
                url: 'https://youtu.be/t-LKRrNedps',
            },
            {
                name: 'Slides',
                url: 'https://drive.google.com/file/d/1_E2_X4mbqhsMtTnJotwf3yD0dpl5NUQG/view?usp=sharing',
            },
            {
                name: 'Svelte',
                url: 'https://svelte.dev/',
            },
            {
                name: 'SvelteKit',
                url: 'https://kit.svelte.dev/',
            },
        ],
        type: "talk",
    },
    {
        title: 'Svackage - Svelte package inception with turborepo',
        description: `In this live coding experiment, I talked about SvelteKit, the use of monorepos in combination with turborepo and how you can use SvelteKit to generate your packages that can be used inside your monorepo.`,
        date: '2022-07-04',
        slug: '/talks/2022-07-svienna',
        assets: [
            {
                name: 'Video',
                url: 'https://youtu.be/CjtlKDDJAf0',
            },
            {
                name: 'Svelte',
                url: 'https://svelte.dev/',
            },
            {
                name: 'SvelteKit',
                url: 'https://kit.svelte.dev/',
            },
            {
                name: 'PNPM',
                url: 'https://pnpm.io/',
            },
            {
                name: 'turborepo',
                url: 'https://turborepo.org/',
            },
            {
                name: 'Svackages',
                url: 'https://github.com/svackages',
            },
        ],
        type: 'talk',
    },
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
                name: 'Video',
                url: 'https://youtu.be/VnAUOWzaCh0',
            },
            {
                name: 'Slides',
                url: 'https://drive.google.com/file/d/1iRdmgG9ecUtt1MGAF8tDE9HgHBujAh4s/view?usp=sharing',
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
        type: 'talk',
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
        type: 'podcast',
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
        type: 'podcast',
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
        type: 'talk',
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
        type: 'talk',
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
        type: 'podcast',
    },
];
