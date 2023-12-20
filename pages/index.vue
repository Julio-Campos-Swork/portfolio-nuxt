<template>
	<NuxtLayout>
		<GeneralHero />
	</NuxtLayout>
</template>

<script setup>
	// import { testStore } from '../stores/test/test'
	// const test = testStore()
	const { $useTestStore } = useNuxtApp()
	const ui = /*ui*/ {
		background: 'bg-white dark:bg-slate-900',
	}
</script>
