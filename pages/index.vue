<template>
	<NuxtLayout>
		<UContainer>
			<UCard :ui="ui">
				<UButton @click="$useTestStore.counterPlus()">Button</UButton>
				<p>{{ $useTestStore.counter }}</p>
				<Icon name="uil:github" color="white" size="50" />
			</UCard>
		</UContainer>
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
