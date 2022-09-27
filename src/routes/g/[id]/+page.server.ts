import { error } from '@sveltejs/kit';
import { BACKEND_URL } from '$env/static/private';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }: any) {
    const res = await fetch(`${BACKEND_URL}/entry/${params.id}`);

    if (res.ok) {
        return await res.json();
    } else if (res.status === 404) {
        throw error(404, 'Not found');
    } else {
        throw error(500, 'Failed to fetch resources');
    }
}