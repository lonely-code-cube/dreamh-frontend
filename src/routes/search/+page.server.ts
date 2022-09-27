import { error } from '@sveltejs/kit';
import { BACKEND_URL } from '$env/static/private';

/** @type {import('./$types').PageServerLoad} */
export async function load({ url }: any) {
    const res = await fetch(`${BACKEND_URL}/search`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            page: url.searchParams.page ?? 0,
            limit: 15,
            include_tags: url.searchParams.get('include_tags') ? url.searchParams.get('include_tags').split(',') : null,
            exclude_tags: url.searchParams.get('exclude_tags') ? url.searchParams.get('exclude_tags').split(',') : null,
            query: url.searchParams.get('query') ?? null,
        })
    })
    if (res.ok) {
        return {
            entries: await res.json(),
            page: url.searchParams.page ?? 0,
        }
    } else {
        throw error(500, "Failed to fetch data");
    }
}