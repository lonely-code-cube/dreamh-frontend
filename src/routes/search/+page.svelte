<script lang="ts">
	import EntryBigCard from '$lib/EntryBigCard.svelte';
	import { PUBLIC_BACKEND_URL } from '$env/static/public';
	import Paginator from '$lib/Paginator.svelte';

	export let data: any;
	let currentPage: number = data.page;

	async function get_page(page: number) {
		let searchParams = new URLSearchParams(window.location.search);
		const res = await fetch(`${PUBLIC_BACKEND_URL}/search`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				page: page,
				limit: 15,
				include_tags: searchParams.get('include_tags')
					? // @ts-ignore
					  searchParams.get('include_tags').split(',')
					: null,
				exclude_tags: searchParams.get('exclude_tags')
					? // @ts-ignore
					  searchParams.get('exclude_tags').split(',')
					: null,
				query: searchParams.get('query') ?? null
			})
		});
		if (res.ok) {
			data.entries = await res.json();
		}
		window.scrollTo(0, 0);
		searchParams.set('page', page.toString());
		window.history.pushState(null, '', `/search?${searchParams.toString()}`);
	}
</script>

<svelte:head>
	<title>DreamH | Sauce matters, source doesn't</title>
</svelte:head>

<div class="dark:text-white mt-10">
	<div id="content" class="flex flex-wrap">
		{#if data.entries.length === 0}
			<div class="m-auto p-5 text-3xl text-gray-400">No Results Found</div>
		{/if}
		{#each data.entries as entry}
			<EntryBigCard
				title={entry.title}
				id={entry.id}
				thumbnail={entry.thumbnail}
				description={entry.description}
				tier={entry.tier}
				pair={entry.pair}
				rating={entry.rating}
				tags={entry.tags}
				pages={data.entries.length}
				benzene={entry.benzene}
				favorites={entry.favorites}
				author={entry.author_name}
				author_id={entry.author_id}
				show_description={true}
			/>
		{/each}
	</div>

	<div id="paginator">
		<Paginator bind:currentPage callback={get_page} />
	</div>
</div>
