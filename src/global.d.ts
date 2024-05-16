/// <reference types="@sveltejs/kit" />

import type { contentFilters, contentTypes, contentTypesTalks } from "$lib/data/filters";

export type Talk = {
    title: string;
    description: string;
    date: string;
    slug: string;
    assets: {
        name: string;
        url: string;
    }[],
    type: typeof contentTypesTalks[number],
}

export type ContentTypes = typeof contentTypes[number];
export type ContentFilter = typeof contentFilters[number];

export type SharedContent = ({
    url?: undefined;
    title: string;
    image?: undefined;
    date: string;
    slug: string;
    type: ContentTypes;
    visible: boolean;
} | {
    url: string;
    title: string;
    image: string;
    date: string;
    slug?: undefined;
    type: ContentTypes;
    visible: boolean;
})
