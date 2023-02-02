import { RedirectHook, type RegexRedirect } from "@svackages/sveltekit-hook-redirect";
import type { Handle } from "@sveltejs/kit";

const matchers: RegexRedirect[] = [
    {
        fromMatcher: /^\/blog.*/,
        to: '/content',
        code: 301,
    },
    {
        fromMatcher: /^\/talks.*/,
        to: '/content',
        code: 301,
    },
]

export const handle: Handle = ({ event, resolve }) => RedirectHook({ event, resolve, matchers });