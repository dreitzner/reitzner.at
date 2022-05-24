/// <reference types="@sveltejs/kit" />

export type Talk = {
    title: string;
    description: string;
    date: string;
    slug: string;
    assets: {
        name: string;
        url: string;
    }[],
}
