import { RedirectHook, type StringRedirects } from "@svackages/sveltekit-hook-redirect";
import type { Handle } from "@sveltejs/kit";

const redirects: StringRedirects = {
    '/blog': {
        to: '/content',
        code: 301
    },
    '/talks': {
        to: '/content',
        code: 301
    },
}

export const handle: Handle = ({ event, resolve }) => RedirectHook({ event, resolve, redirects });