<script lang="ts">
	export let id: string;
	export let title: string;
	export let description: string | null;
	export let author: string;
	export let author_id: number;
	export let thumbnail: string;
	export let rating: number;
	export let pair: string;
	export let tier: string;
	export let benzene: boolean;
	export let favorites: number;
	export let tags: any[];
	export let pages: number;
	export let show_description: boolean;

	let expand: boolean;
</script>

<div
	id="entry-card-big"
	class="flex w-[90%] max-w-[900px] m-auto bg-light-fg dark:bg-dark-fg rounded-lg my-5"
>
	<div id="thumbnail" class="w-min">
		<img class="w-[30%] md:min-w-[170px] min-w-[120px] rounded-l-lg" src={thumbnail} alt="" />
	</div>
	<div id="meta" class="p-5 text-sm md:text-base">
		<div class="flex">
			<a href="/g/{id}" class="hover:underline hover:underline-offset-1">
				{#if tier === 'S'}
					<div
						id="title"
						class="text-lg md:text-2xl font-bold bg-gradient-to-r from-red-500 to-yellow-400 text-transparent bg-clip-text"
					>
						{title}
					</div>
				{:else if tier === 'A'}
					<div
						id="title"
						class="text-lg md:text-2xl font-bold bg-gradient-to-r from-yellow-400 to-violet-400 text-transparent bg-clip-text"
					>
						{title}
					</div>
				{:else if tier === 'B'}
					<div
						id="title"
						class="text-lg md:text-2xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 text-transparent bg-clip-text"
					>
						{title}
					</div>
				{:else if tier === 'C'}
					<div
						id="title"
						class="text-lg md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-300 text-transparent bg-clip-text"
					>
						{title}
					</div>
				{:else if tier === 'D'}
					<div
						id="title"
						class="text-lg md:text-2xl font-bold bg-gradient-to-r from-emerald-300 to-lime-400 text-transparent bg-clip-text"
					>
						{title}
					</div>
				{:else if tier === 'E'}
					<div
						id="title"
						class="text-lg md:text-2xl font-bold bg-gradient-to-r from-lime-400 to-green-400 text-transparent bg-clip-text"
					>
						{title}
					</div>
				{:else if tier === 'F'}
					<div
						id="title"
						class=" font-bold bg-gradient-to-r from-green-400 to-teal-600 text-transparent bg-clip-text"
					>
						{title}
					</div>
				{/if}
			</a>
			<div id="id" class="text-lg md:text-2xl ml-4 text-gray-300">#{id}</div>
			<div class="flex-grow" />
			<div class="hidden md:block ml-2">
				{#if tier === 'S'}
					<div
						id="tier"
						class="py-1 px-3 text-black font-bold rounded-lg bg-gradient-to-r from-red-500 to-yellow-400"
					>
						S
					</div>
				{:else if tier === 'A'}
					<div
						id="tier"
						class="py-1 px-3 text-black font-bold rounded-lg bg-gradient-to-r from-yellow-400 to-violet-400"
					>
						A
					</div>
				{:else if tier === 'B'}
					<div
						id="tier"
						class="py-1 px-3 text-black font-bold rounded-lg bg-gradient-to-r from-violet-400 to-cyan-400"
					>
						B
					</div>
				{:else if tier === 'C'}
					<div
						id="tier"
						class="py-1 px-3 text-black font-bold rounded-lg bg-gradient-to-r from-cyan-400 to-emerald-300"
					>
						C
					</div>
				{:else if tier === 'D'}
					<div
						id="tier"
						class="py-1 px-3 text-black font-bold rounded-lg bg-gradient-to-r from-emerald-300 to-lime-400"
					>
						D
					</div>
				{:else if tier === 'E'}
					<div
						id="tier"
						class="py-1 px-3 text-black font-bold rounded-lg bg-gradient-to-r from-lime-400 to-green-400"
					>
						E
					</div>
				{:else if tier === 'F'}
					<div
						id="tier"
						class="py-1 px-3 text-black font-bold rounded-lg bg-gradient-to-r from-green-400 to-teal-600"
					>
						F
					</div>
				{/if}
			</div>
		</div>
		<div id="author" class="text-gray-400">
			by <a href={`/a/${author_id}`} class="text-gray-300 hover:underline hover:underline-offset-1"
				>{author}</a
			>
		</div>
		{#if show_description && description}
			<div id="description" class="line-clamp-3 md:line-clamp-2 mt-2 mb-4 text-gray-400">
				{description}
			</div>
		{:else}
			<div class="py-5" />
		{/if}

		<div id="em-data-1" class="flex flex-row mb-4">
			<div>
				{#if pair === 'FM' || pair === 'MF'}
					<div
						id="pair"
						class="px-2 bg-gradient-to-r from-fuchsia-500 to-blue-500 text-transparent bg-clip-text md:text-lg font-semibold border rounded border-gray-600"
					>
						{pair}
					</div>
				{:else if pair === 'MM'}
					<div
						id="pair"
						class="px-2 bg-blue-500 text-transparent bg-clip-text md:text-lg font-semibold border rounded border-gray-600"
					>
						{pair}
					</div>
				{:else if pair === 'FF'}
					<div
						id="pair"
						class="px-2 bg-pink-500 text-transparent bg-clip-text md:text-lg font-semibold border rounded border-gray-600"
					>
						{pair}
					</div>
				{/if}
			</div>
			<div>
				<button
					class="px-3 text-lg text-gray-500"
					on:click={() => {
						expand = !expand;
					}}
					>Show Tags<i
						class="fa-solid fa-caret-{expand ? 'down' : 'right'} pl-2 text-gray-400"
					/></button
				>
				<div id="tags" class="{expand ? '' : 'hidden'} mt-2 ml-2 flex flex-row flex-wrap">
					{#each tags as tag}
						<div class="p-1 m-1 text-gray-400 bg-dark-bg rounded border border-gray-600">{tag.name}</div>
					{/each}
				</div>
			</div>
		</div>
		<div id="em-data-2" class="flex flex-row">
			<div class="block md:hidden">
				{#if tier === 'S'}
					<div
						id="tier"
						class="px-3 text-black font-bold rounded-lg bg-gradient-to-r from-red-500 to-yellow-400"
					>
						S
					</div>
				{:else if tier === 'A'}
					<div
						id="tier"
						class="px-3 text-black font-bold rounded-lg bg-gradient-to-r from-yellow-400 to-violet-400"
					>
						A
					</div>
				{:else if tier === 'B'}
					<div
						id="tier"
						class="px-3 text-black font-bold rounded-lg bg-gradient-to-r from-violet-400 to-cyan-400"
					>
						B
					</div>
				{:else if tier === 'C'}
					<div
						id="tier"
						class="px-3 text-black font-bold rounded-lg bg-gradient-to-r from-cyan-400 to-emerald-300"
					>
						C
					</div>
				{:else if tier === 'D'}
					<div
						id="tier"
						class="px-3 text-black font-bold rounded-lg bg-gradient-to-r from-emerald-300 to-lime-400"
					>
						D
					</div>
				{:else if tier === 'E'}
					<div
						id="tier"
						class="px-3 text-black font-bold rounded-lg bg-gradient-to-r from-lime-400 to-green-400"
					>
						E
					</div>
				{:else if tier === 'F'}
					<div
						id="tier"
						class="px-3 text-black font-bold rounded-lg bg-gradient-to-r from-green-400 to-teal-600"
					>
						F
					</div>
				{/if}
			</div>
			<div id="rating" class="px-2 ml-2 rounded border border-gray-600 text-gray-300">
				<span class="hidden md:inline">Rating:</span> <span class="font-semibold">{rating}/10</span>
			</div>
			<div id="pages" class="px-2 ml-2 rounded border border-gray-600 text-gray-300">
				<span class="font-semibold">{pages}</span> <span class="hidden md:inline">pages</span>
			</div>

			<div
				id="favorites"
				class="hidden md:block px-2 ml-2 rounded border border-gray-600 text-gray-300"
			>
				<span class="font-semibold">{favorites}</span> favorites
			</div>
			{#if benzene}
				<div id="benzene" class="px-2 ml-2 rounded border border-gray-600 text-amber-400 font-bold">
					⌬
				</div>
			{/if}
		</div>
	</div>
</div>
