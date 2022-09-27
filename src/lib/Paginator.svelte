<script lang="ts">
	export let currentPage: any;
	export let callback: any;
	let display_pages: number[];

	currentPage = parseInt(currentPage);

	// Assign page numbers to display;
	if (currentPage == 0) {
		display_pages = [0, 1, 2];
	} else {
		display_pages = [currentPage - 1, currentPage, currentPage + 1];
	}
	//

	let ensure = (task: string) => {
		if (task === 'next') {
			return currentPage < 10;
		} else {
			return currentPage > 0;
		}
	};

	let next = () => {
		if (ensure('next')) {
			currentPage++;
			callback(currentPage);
			if (currentPage === 1) {
				display_pages = [0, 1, 2];
			} else if (currentPage === 10) {
				display_pages = [8, 9, 10];
			} else {
				display_pages = display_pages.map((page) => page + 1);
			}
		}
	};
	let prev = () => {
		if (ensure('prev')) {
			currentPage--;
			callback(currentPage);
			if (currentPage === 0) {
				display_pages = [0, 1, 2];
			} else if (currentPage === 9) {
				display_pages = [8, 9, 10];
			} else {
				display_pages = display_pages.map((page) => page - 1);
			}
		}
	};
	let teleport = (i: number) => {
		if (i === 0) {
			prev();
		} else if (i === 2) {
			next();
		}
	};
</script>

<div class="flex my-3">
	<div class="flex-grow" />
	<button on:click={prev} class="py-2 px-3 mx-2 bg-dark-fg hover:bg-gray-700 rounded"
		><i class="fa-solid fa-caret-left" /></button
	>
	{#each display_pages as page, i}
		<button
			on:click={() => {
				teleport(i);
			}}
			class="py-2 px-3 mx-2 bg-dark-fg hover:bg-gray-700 rounded {page === currentPage
				? 'bg-gray-700'
				: ''}">{page}</button
		>
	{/each}
	<button on:click={next} class="py-2 px-3 mx-2 bg-dark-fg hover:bg-gray-700 rounded"
		><i class="fa-solid fa-caret-right" /></button
	>
	<div class="flex-grow" />
</div>
