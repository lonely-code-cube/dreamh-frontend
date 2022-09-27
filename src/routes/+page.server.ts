import { error } from "@sveltejs/kit";
import { BACKEND_URL } from "$env/static/private";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const res = await fetch(`${BACKEND_URL}/all`);
    if (res.ok) {
        const data = await res.json();
        return data;
    }
    throw error(500, "Failed to fetch resources")
}