<script lang="ts">
	import '../app.pcss';
	import { ModeWatcher } from 'mode-watcher';
	import { Toaster } from '$lib/components/ui/sonner';
	import { page } from '$app/stores';
	import Header from '$lib/components/Header.svelte';
	import { Separator } from '$lib/components/ui/separator';
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
</script>

<div class="mx-auto max-w-screen-md font-sans">
	<ModeWatcher />
	<Toaster />
	<div class="fixed top-0 mx-auto w-screen max-w-screen-md bg-background md:w-screen">
		<Header
			displayParallel={$page.data.displayParallel}
			parallelSelectionForm={$page.data.form}
			currentTranslation={$page.data.currentTranslation}
			checkedTranslations={$page.data.selectedParallelTranslations}
		/>
		<Separator />
		<Breadcrumb crumbItems={$page.data.currentLocation} />
	</div>
	<div class="h-32 w-full"></div>
	<div class="scroll-mt-44">
		<slot />
	</div>
</div>
