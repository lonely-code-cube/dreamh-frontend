<script lang="ts">
	export let id: number;
	export let title: string;
	export let thumbnail: string;
	export let tier: string;
</script>

<a href="{`/g/${id}`}">
	<div id="entry-card-small" class="relative overflow-hidden min-w-[200px]">
		<div class="absolute left-2 top-2 shadow-lg">
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
		<img src={thumbnail} alt="" class="rounded-t-lg" />
		<div class="text-center bg-gray-800 font-medium text-yellow-200">{title}</div>
	</div>
</a>
