<script lang="ts">
	import { onMount } from 'svelte';
	export let data: any;

	const id = (link: string) => {
		const matches = link.match(/g\/(\d{1,6})/g) ?? [];
		return matches[0];
	};

	let showDesc: boolean = true;
	onMount(() => {
		showDesc = localStorage.getItem('showDesc') === 'true' ? true : false;
	});
</script>

<div class="text-gray-600 m-5 border-b border-b-gray-600">gallery >> {data.id}</div>
<div class="text-white flex flex-col md:flex-row justify-around px-5">
	<div class="items-center md:w-[50%] relative">
		<div class="absolute left-2 top-2 shadow-lg">
			{#if data.tier === 'S'}
				<div
					id="tier"
					class="py-1 px-3 text-black font-bold rounded-lg bg-gradient-to-r from-red-500 to-yellow-400"
				>
					S
				</div>
			{:else if data.tier === 'A'}
				<div
					id="tier"
					class="py-1 px-3 text-black font-bold rounded-lg bg-gradient-to-r from-yellow-400 to-violet-400"
				>
					A
				</div>
			{:else if data.tier === 'B'}
				<div
					id="tier"
					class="py-1 px-3 text-black font-bold rounded-lg bg-gradient-to-r from-violet-400 to-cyan-400"
				>
					B
				</div>
			{:else if data.tier === 'C'}
				<div
					id="tier"
					class="py-1 px-3 text-black font-bold rounded-lg bg-gradient-to-r from-cyan-400 to-emerald-300"
				>
					C
				</div>
			{:else if data.tier === 'D'}
				<div
					id="tier"
					class="py-1 px-3 text-black font-bold rounded-lg bg-gradient-to-r from-emerald-300 to-lime-400"
				>
					D
				</div>
			{:else if data.tier === 'E'}
				<div
					id="tier"
					class="py-1 px-3 text-black font-bold rounded-lg bg-gradient-to-r from-lime-400 to-green-400"
				>
					E
				</div>
			{:else if data.tier === 'F'}
				<div
					id="tier"
					class="py-1 px-3 text-black font-bold rounded-lg bg-gradient-to-r from-green-400 to-teal-600"
				>
					F
				</div>
			{/if}
		</div>
		<img src={data.thumbnail} alt="" class="rounded m-auto" />
	</div>
	<div class="p-4 md:px-4">
		<div class="text-lg md:text-2xl mb-3">
			{#if data.tier === 'S'}
				<div
					id="title"
					class="text-lg md:text-2xl font-bold bg-gradient-to-r from-red-500 to-yellow-400 text-transparent bg-clip-text"
				>
					{data.title}
				</div>
			{:else if data.tier === 'A'}
				<div
					id="title"
					class="text-lg md:text-2xl font-bold bg-gradient-to-r from-yellow-400 to-violet-400 text-transparent bg-clip-text"
				>
					{data.title}
				</div>
			{:else if data.tier === 'B'}
				<div
					id="title"
					class="text-lg md:text-2xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 text-transparent bg-clip-text"
				>
					{data.title}
				</div>
			{:else if data.tier === 'C'}
				<div
					id="title"
					class="text-lg md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-300 text-transparent bg-clip-text"
				>
					{data.title}
				</div>
			{:else if data.tier === 'D'}
				<div
					id="title"
					class="text-lg md:text-2xl font-bold bg-gradient-to-r from-emerald-300 to-lime-400 text-transparent bg-clip-text"
				>
					{data.title}
				</div>
			{:else if data.tier === 'E'}
				<div
					id="title"
					class="text-lg md:text-2xl font-bold bg-gradient-to-r from-lime-400 to-green-400 text-transparent bg-clip-text"
				>
					{data.title}
				</div>
			{:else if data.tier === 'F'}
				<div
					id="title"
					class=" font-bold bg-gradient-to-r from-green-400 to-teal-600 text-transparent bg-clip-text"
				>
					{data.title}
				</div>
			{/if}
			<div class="flex justify-between">
				<span class="text-gray-400 text-lg"
					>by <a href="/author/{data.author_id}" class="text-yellow-500 underline"
						>{data.author_name}</a
					></span
				>
				<span class="text-gray-400 text-lg">#{data.id}</span>
			</div>
		</div>
		<div class="w-min flex mb-3">
			{#if data.pair === 'FM' || data.pair === 'MF'}
				<div
					id="pair"
					class="px-2 bg-gradient-to-r from-fuchsia-500 to-blue-500 text-transparent bg-clip-text md:text-lg font-semibold border rounded border-gray-600"
				>
					{data.pair}
				</div>
			{:else if data.pair === 'MM'}
				<div
					id="pair"
					class="px-2 bg-blue-500 text-transparent bg-clip-text md:text-lg font-semibold border rounded border-gray-600"
				>
					{data.pair}
				</div>
			{:else if data.pair === 'FF'}
				<div
					id="pair"
					class="px-2 bg-pink-500 text-transparent bg-clip-text md:text-lg font-semibold border rounded border-gray-600"
				>
					{data.pair}
				</div>
			{/if}
			{#if data.benzene}
				<div
					id="benzene"
					class="px-2 pt-0.5 ml-2 rounded border border-gray-600 text-amber-400 font-bold"
				>
					⌬
				</div>
			{/if}
		</div>
		<div class="flex mb-3">
			<div id="rating" class="px-2 rounded border border-gray-600 text-gray-300">
				<span>Rating:</span>
				<span class="font-semibold">{data.rating}/10</span>
			</div>
			<div id="pages" class="px-2 ml-2 rounded border border-gray-600 text-gray-300">
				<span class="font-semibold">{data.pages.length}</span>
				<span>pages</span>
			</div>
			<div
				id="favorites"
				class="hidden md:block px-2 ml-2 rounded border border-gray-600 text-gray-300"
			>
				<span class="font-semibold">{data.favorites}</span> favorites
			</div>
		</div>
		{#if showDesc}
			<div class="mb-3">
				<div class="text-xl font-bold text-gray-300">Description</div>
				{#if data.description}
					<div class="text-gray-400 text-lg">{data.description}</div>
				{:else}
					<div class="text-gray-400 text-lg">No description available</div>
				{/if}
			</div>
		{/if}
		<div class="mb-3">
			{#if data.description}
				<div class="text-gray-400 text-lg">
					Parody: <a href="/search?include_parodies={data.parody}" class="text-yellow-500"
						>{data.description}</a
					>
				</div>
			{:else}
				<div class="text-gray-400 text-lg">
					<span class="font-bold">Parody:</span> This work is not part of a parody
				</div>
			{/if}
		</div>
		<div class="flex text-gray-300 text-lg flex-wrap mb-3">
			<div class="font-bold text-gray-400">Tags:</div>
			{#each data.tags as tag}
				<a href="/tag/{tag.id}"><div class="bg-gray-800 mx-1 mb-2 px-1 rounded">{tag.name}</div></a>
			{/each}
		</div>
		<div class="bg-yellow-500 px-3 py-2 w-min text-black text-xl rounded m-auto">
			{#if data.nhentai}
				<a href="https://cubari.moe/read/nhentai/{data.nhentai}">Read</a>
			{/if}
			{#if data.imgur}
				<a href="https://cubari.moe/read/imgur/{data.imgur}">Read</a>
			{/if}
		</div>
	</div>
</div>
