<script lang="ts">
	import EntryBigCard from '$lib/EntryBigCard.svelte';
	import { PUBLIC_BACKEND_URL } from '$env/static/public';
	import Paginator from '$lib/Paginator.svelte';

	export let data: any;
	let currentPage: number = data.page;

	async function get_page(page: number) {
		let res = await fetch(`${PUBLIC_BACKEND_URL}/recent?page=${page}&limit=15`);
		if (res.ok) {
			data.entries = await res.json();
		}
		window.scrollTo(0, 0);
		window.history.pushState(null, "", `/recent?page=${currentPage}`);
	}
</script>

<svelte:head>
	<title>DreamH | Sauce matters, source doesn't</title>
</svelte:head>

<div class="dark:text-white mt-10">
	<div class="w-[90%] m-auto bg-red-200 p-1 rounded-lg">
		<div class="bg-light-fg dark:bg-dark-fg p-5 rounded">
			<p class="text-2xl font-bold">Recent Additions</p>
			<p>Checkout recent additions by the DreamH team!</p>
		</div>
	</div>

	<div id="content" class="flex flex-wrap">
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
