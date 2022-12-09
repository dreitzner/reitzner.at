export const contentTypesTalks = [
    'talk',
    'podcast'
] as const;

export const contentTypes = [
    'blog',
    ...contentTypesTalks,
] as const;

export const contentFilters = [
    'all',
    ...contentTypes,
] as const;