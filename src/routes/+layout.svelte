<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { clickoutside } from '@svelteuidev/composables';
	import { stringify } from 'postcss';
	import { append } from 'svelte/internal';

	let theme: string;
	let loggedin: boolean = true;
	let menuVisible = false;
	let menuButton;
	let searchString = '';
	// const re = /(t):"([^"]+)"|(t):([^ ]+)|(-t):"([^"]+)"|(-t):([^ ]+)/gim;
	onMount(() => {
		theme = localStorage.getItem('theme') || 'dark';
		if (theme === 'dark') {
			document.querySelector('body')?.style.setProperty('--bg-color', '#0e0e0f');
		} else {
			document.querySelector('body')?.style.setProperty('--bg-color', '#d0d9e8');
		}
	});

	function openMenu() {
		menuVisible = !menuVisible;
	}
	function closeMenu() {
		menuVisible = false;
	}

	async function search() {
		let searchParams: any = {
			include_tags: [],
			exclude_tags: [],
			query: ''
		};

		const tokens = searchString.split(/ +(?=(?:(?:[^"]*"){2})*[^"]*$)/g);
		for (const token of tokens) {
			const [flag, value] = token.split(':');
			if (flag === 't') {
				searchParams.include_tags.push(value.replaceAll('"', ''));
			} else if (flag === '-t') {
				searchParams.exclude_tags.push(value.replaceAll('"', ''));
			} else {
				searchParams.query += flag + ' ';
			}
		}
		let params = [];
		if (searchParams.include_tags.length > 0) {
			params.push('include_tags=' + searchParams.include_tags.join());
		}
		if (searchParams.exclude_tags.length > 0) {
			params.push('exclude_tags=' + searchParams.exclude_tags.join());
		}
		if (searchParams.query !== '') {
			params.push('query=' + searchParams.query);
		}
		location.href = `/search?${params.join('&')}`;
	}

	function searchOnEnter(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			search();
		}
	}
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
		integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
		crossorigin="anonymous"
		referrerpolicy="no-referrer"
	/>
</svelte:head>

<div id="theme" class={theme}>
	<div id="nav" class="flex text-gray-300 p-2 sticky top-0 z-50 bg-dark-bg">
		<div use:clickoutside={{ enabled: menuVisible, callback: closeMenu }}>
			<button on:click={openMenu} bind:this={menuButton} class="mx-2 hover:text-cyan-300 md:text-xl"
				><i class="fa-solid fa-bars" /></button
			>
			{#if menuVisible}
				<div
					id="menu"
					class="flex flex-col absolute top-10 left-5 rounded-lg bg-dark-fg w-[200px] border border-gray-700"
				>
					<a href="/" class="p-2 hover:bg-dark-bg">Home</a>
					<a href="/recent" class="p-2 hover:bg-dark-bg">Recent</a>
					<a href="/top-tiers" class="p-2 hover:bg-dark-bg">Top Tiers</a>
					<a href="/popular" class="p-2 hover:bg-dark-bg">Most Popular</a>
					<a href="/top-rated" class="p-2 hover:bg-dark-bg">Top Rated</a>
				</div>
			{/if}
		</div>
		<div class="relative mx-2">
			<input
				on:keypress={searchOnEnter}
				bind:value={searchString}
				type="text"
				placeholder="Search"
				class="mx-2 px-1 rounded md:py-1 md:w-[300px] md:hover:w-[500px] md:focus:w-[500px] duration-500 text-black"
			/>
			<button on:click={search} class="absolute right-4 top-0.5 md:top-1 text-gray-500">
				<i class="fa-solid fa-magnifying-glass hover:text-cyan-700" />
			</button>
		</div>
		<div class="flex-grow" />
		{#if loggedin}
			<div class="w-[35px] mx-2">
				<button>
					<img
						src="https://cdn.discordapp.com/avatars/823588482273902672/feddff02d4e36bf84c68d88737f2619e.png"
						alt=""
						class="rounded-full"
					/>
				</button>
			</div>
		{/if}
		<a
			href="https://discord.gg/zkXTRqgQFT"
			target="_blank"
			class="text-cyan-300 hover:bg-gray-800 py-2 px-3 bg-gray-900 rounded-full"
			><i class="fa-brands fa-discord" /></a
		>
	</div>
	<slot />
</div>

<style>
	:global(body) {
		background-color: var(--bg-color);
	}
</style>
