<script lang="ts">
	import { page } from '$app/stores';
	let messages404 = ['but did you know water is more acidic than alcohol?', "but did you know adding phenol to bromine water turns the solution white?"];
	let message = messages404[Math.floor(Math.random() * messages404.length)];
</script>

<div class="text-gray-400 text-7xl text-center my-10">{$page.status}</div>
{#if $page.status === 404}
	<div class="text-gray-400 text-3xl text-center mt-10">
		We could not find "{$page.url.pathname}",
	</div>
	<div class="text-gray-400 text-xl text-center">{message}</div>
{/if}
