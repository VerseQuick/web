<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>About • VerseQuick</title>
</svelte:head>

<div class="px-4 md:px-0">
	<h1 class="mb-4 mt-4 text-xl font-bold">About</h1>
	<ul class="mb-8 ml-4 list-disc space-y-4 leading-8 md:ml-8">
		{#each data.aboutPoints as point}
			<li>{@html point}</li>
		{/each}
	</ul>
	<h1 class="mb-4 mt-4 text-xl font-bold">Thanks</h1>
	<ul class="mb-8 ml-4 list-disc space-y-4 leading-8 md:ml-8">
		{#each data.thanksPoints as point}
			<li>{@html point}</li>
		{/each}
	</ul>
	<!-- <h1 class="mt-4 mb-4 text-xl font-bold">Donate</h1>
	If this site benefits you, consider donating. Your contributions will help us improve our services by funding faster servers. 
	<ul class="mt-4 mb-8 ml-4 list-disc space-y-4 leading-8 md:ml-8">
		{#each data.donationPoints as point}
			<li>{@html point}</li>
		{/each}
	</ul> -->
</div>
