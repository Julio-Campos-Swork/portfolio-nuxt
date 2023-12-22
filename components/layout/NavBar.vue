<template>
	<header class="w-full bg-gray-100 dark:bg-transparent h-16 mb-8 sticky z-10">
		<div
			class="h-[1px] w-full absolute bottom-0 bg-black dark:bg-gradient-to-r dark:from-[#29eecc] dark:to-cyan-100"
		></div>
		<nav class="flex justify-between px-4 py-4 z-50">
			<div class="flex justify-center">
				<p>Logo</p>
			</div>
			<div class="hidden justify-end lg:flex lg:flex-row gap-10 pr-2">
				<NuxtLink to="/" class="menuItems">Inicio</NuxtLink>
				<NuxtLink class="menuItems">Menu 2</NuxtLink>
				<NuxtLink class="menuItems">Menu 3</NuxtLink>
				<NuxtLink class="menuItems">Menu 4</NuxtLink>
				<UButton
					:icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
					color="gray"
					variant="ghost"
					aria-label="Theme"
					@click="isDark = !isDark"
				/>
			</div>
			<div class="lg:hidden cursor-pointer z-50" @click="toggleMenu()">
				<Icon name="mdi:menu" size="50" color="white" :class="btnMenu" />
			</div>
			<div :class="mobileMenuClasses">
				<div
					class="grid absolute right-5 top-20 grid-cols-1 gap-8 place-items-center z-50 w-100 transition-all duration-300 ease-in-out"
				>
					<NuxtLink to="/" class="menuItems">Inicio</NuxtLink>
					<NuxtLink class="menuItems">Menu 2</NuxtLink>
					<NuxtLink class="menuItems">Menu 3</NuxtLink>
					<NuxtLink class="menuItems">Menu 4</NuxtLink>
				</div>
			</div>
		</nav>
	</header>
</template>

<script setup>
	const mobileMenuClasses = ref(
		'lg:hidden w-1/4 top-0 right-0 h-screen absolute bg-white/20 transform transition ease-in-out duration-300 translate-x-full'
	)

	const btnMenu = ref(
		'cursor-pointer z-10 transition-transform ease-in-out duration-500 pb-4'
	)

	const toggleMenu = () => {
		if (btnMenu.value.includes('-rotate-90')) {
			btnMenu.value = btnMenu.value.replace('-rotate-90', ' ')
			mobileMenuClasses.value = mobileMenuClasses.value.replace(
				'translate-x-0',
				'translate-x-full'
			)
		} else {
			btnMenu.value = btnMenu.value + ' ' + '-rotate-90'
			mobileMenuClasses.value = mobileMenuClasses.value.replace(
				'translate-x-full',
				'translate-x-0'
			)
		}
	}

	// color mode

	const colorMode = useColorMode()

	const isDark = computed({
		get() {
			return colorMode.value === 'dark'
		},
		set() {
			colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
		},
	})
</script>

<style scoped>
	.menuItems {
		@apply text-sm md:text-xl font-bold text-black dark:text-slate-300 dark:hover:text-cyan-300 hover:text-red-500 hover:skew-x-0  cursor-pointer;
	}
	.menuItems::before {
		--LineHeight: 3px;
		--LineColor: #29eecc;
		position: relative;
		top: 2rem;
		content: '';
		display: block;
		z-index: -1;
		background: var(--LineColor);
		width: 0;
		height: var(--LineHeight);
		left: calc(var(--LineHeight) / -2);
		transition: 0.3s cubic-bezier(0.03, 0.3, 0.4, 0.96);
		transform: skew(-10deg);
	}
	.menuItems:hover::before {
		width: calc(100% + 3px);
	}
</style>
