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
                url: '/public/talks/',
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
];
