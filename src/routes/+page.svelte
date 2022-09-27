<script lang="ts">
	import Loading from '$lib/Loading.svelte';
	import EntryShowCard from '$lib/EntryShowCard.svelte';
	import EntryBigCard from '$lib/EntryBigCard.svelte';

	export let data: any;
</script>

<svelte:head>
	<title>DreamH | Sauce matters, source doesn't</title>
</svelte:head>

<div class="dark:text-white">
	<div class="mt-5">
		<div
			class="text-center text-5xl font-medium [text-shadow:_2px_2px_0_var(--tw-shadow-color)] shadow-cyan-600 text-gray-200"
		>
			⌬reamH
		</div>
		<div class="text-center text-gray-300">Sauce matters, source doesn't.</div>
	</div>
	<div class="w-[90%] m-auto p-1.5 rounded-lg mt-10">
		<div class="bg-dark-fg p-5 rounded">
			<p class="text-2xl font-bold">Recent Additions</p>
			<p>Checkout recent additions by the DreamH team!</p>
		</div>
	</div>
	<div class="flex overflow-auto my-4 w-[90%] m-auto">
		{#each data.recent as entry, i}
			<div class="flex p-2">
				<div class="p-1">
					<EntryShowCard
						id={entry.id}
						title={entry.title}
						thumbnail={entry.thumbnail}
						tier={entry.tier}
					/>
				</div>
			</div>
		{/each}
		<div class="flex items-center p-4">
			<a href="/recent" class="bg-gray-800 text-gray-300 rounded-full px-3 py-2"
				><i class="fa-solid fa-plus" /></a
			>
		</div>
	</div>
	<div class="w-[90%] m-auto p-1.5 rounded-lg">
		<div class="bg-dark-fg p-5 rounded">
			<p class="text-2xl font-bold">Top Tiers</p>
			<p>Checkout our top tier entries!</p>
		</div>
	</div>
	<div class="flex overflow-auto my-4 w-[90%] m-auto">
		{#each data.topTier as entry, i}
			<div class="flex p-2">
				<div class="p-1">
					<EntryShowCard
						id={entry.id}
						title={entry.title}
						thumbnail={entry.thumbnail}
						tier={entry.tier}
					/>
				</div>
			</div>
		{/each}
		<div class="flex items-center p-4">
			<a href="/top-tiers" class="bg-gray-800 text-gray-300 rounded-full px-3 py-2"
				><i class="fa-solid fa-plus" /></a
			>
		</div>
	</div>
	<div class="w-[90%] m-auto p-1.5 rounded-lg">
		<div class="bg-dark-fg p-5 rounded">
			<p class="text-2xl font-bold">Most Popular</p>
			<p>Checkout the most popular entries!</p>
		</div>
	</div>
	<div class="flex overflow-auto my-4 w-[90%] m-auto">
		{#each data.popular as entry, i}
			<div class="flex p-2">
				<div class="p-1">
					<EntryShowCard
						id={entry.id}
						title={entry.title}
						thumbnail={entry.thumbnail}
						tier={entry.tier}
					/>
				</div>
			</div>
		{/each}
		<div class="flex items-center p-4">
			<a href="/popular" class="bg-gray-800 text-gray-300 rounded-full px-3 py-2"
				><i class="fa-solid fa-plus" /></a
			>
		</div>
	</div>
	<div class="w-[90%] m-auto p-1.5 rounded-lg">
		<div class="bg-dark-fg p-5 rounded">
			<p class="text-2xl font-bold">Top Rated</p>
			<p>Checkout our top rated entries!!</p>
		</div>
	</div>
	<div class="flex overflow-auto my-4 w-[90%] m-auto">
		{#each data.topRated as entry, i}
			<div class="flex p-2">
				<div class="p-1">
					<EntryShowCard
						id={entry.id}
						title={entry.title}
						thumbnail={entry.thumbnail}
						tier={entry.tier}
					/>
				</div>
			</div>
		{/each}
		<div class="flex items-center p-4">
			<a href="/top-rated" class="bg-gray-800 text-gray-300 rounded-full px-3 py-2"
				><i class="fa-solid fa-plus" /></a
			>
		</div>
	</div>
</div>
