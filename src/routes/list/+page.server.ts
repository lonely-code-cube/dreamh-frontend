import { error } from '@sveltejs/kit';
import { BACKEND_URL } from '$env/static/private';

/** @type {import('./$types').PageServerLoad} */
export async function load({ url }: any) {
    let res = await fetch(`${BACKEND_URL}/entries?page=${url.searchParams.get("page") ?? 0}&limit=50`);
    if (res.ok) {
        let entries = await res.json();
        return {
            entries: entries,
            page: url.searchParams.get("page") ?? 0,
        }
    }
    else {
        throw error(500, 'Failed to fetch resources');
    }
}