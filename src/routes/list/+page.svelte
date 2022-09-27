<script lang="ts">
	import { PUBLIC_BACKEND_URL } from '$env/static/public';
	import Paginator from '$lib/Paginator.svelte';

	export let data: any;
	let currentPage: number = data.page;

	async function get_page(page: number) {
		let res = await fetch(`${PUBLIC_BACKEND_URL}/entries?page=${page}&limit=50`);
		if (res.ok) {
			data.entries = await res.json();
		}
		window.scrollTo(0, 0);
		window.history.pushState(null, '', `/list?page=${currentPage}`);
	}
</script>

<svelte:head>
	<title>DreamH | Sauce matters, source doesn't</title>
</svelte:head>

<div class="dark:text-white mt-10">
	<div class="">
		<table class="text-center w-full table-auto">
			<thead>
				<tr>
					<th class="px-2">ID</th>
					<th class="px-2">Title</th>
					<th class="px-2">Author</th>
					<th class="px-2">Tier</th>
					<th class="px-2">Pages</th>
					<th class="hidden lg:table-cell px-2">Rating</th>
					<th class="hidden lg:table-cell px-2">Favorites</th>
					<th class="hidden lg:table-cell px-2">Parody</th>
					<th class="hidden lg:table-cell px-2">Tags</th>
				</tr>
			</thead>
			<tbody>
				{#each data.entries as entry, i}
					<tr class="odd:bg-dark-fg">
						<td class="px-2 py-3"
							>{entry.id}
							{#if entry.benzene}
								⌬
							{/if}
						</td>
						<td class="px-2 py-1"
							><a href="/g/{entry.id}" class="text-yellow-600 hover:text-yellow-400 hover:underline"
								>{entry.title}</a
							></td
						>
						<td class="px-2"
							><a
								href="/author/{entry.author_id}"
								class="text-yellow-500 hover:text-yellow-400 hover:underline">{entry.author_name}</a
							></td
						>
						<td class="px-2">{entry.tier}</td>
						<td class="px-2">{entry.pages.length}</td>
						<td class="hidden lg:table-cell px-2">{entry.rating}</td>
						<td class="hidden lg:table-cell px-2">{entry.favorites}</td>
						<td class="hidden lg:table-cell px-2"
							><a
								href="/search?include_parodies={entry.parody}"
								class="text-yellow-500 hover:text-yellow-400 hover:underline">{entry.parody}</a
							></td
						>
						<td />
						<td class="hidden lg:table-cell px-2">
							{#each entry.tags as tag}
								<span class="pl-1">
									{tag.name},
								</span>
							{/each}
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>

	<div id="paginator">
		<Paginator bind:currentPage callback={get_page} />
	</div>
</div>
