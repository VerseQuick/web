<script lang="ts">
	export let data;
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<svelte:head>
	<title>{data.currentTranslation} • VerseQuick</title>
</svelte:head>

<div class={'mx-auto grid w-max grid-cols-1 md:grid-cols-2 ' + data.font}>
	{#each data.splitBooks as testament}
		<div class="mx-4 mb-8 w-72">
			<h3 class="mb-4 text-center font-bold">{testament.testamentName}</h3>
			<ul>
				{#each testament.bookNames as element}
					<a href={'/' + data.currentTranslation + '/' + element.book.replace(' ', '-')}
						><li class="my-2">
							<Button class="w-72" variant={'outline'}>{element.book_name}</Button>
						</li></a
					>
				{/each}
			</ul>
		</div>
	{/each}
</div>
