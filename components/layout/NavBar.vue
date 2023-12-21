<template>
	<header class="w-screen bg-transparent h-16 mb-8 sticky z-10">
		<div
			class="h-[1px] w-full absolute bottom-0 bg-gradient-to-r from-[#29eecc] to-cyan-100"
		></div>
		<nav class="flex justify-between px-4 py-4 z-50">
			<div class="flex justify-center">
				<p>Logo</p>
			</div>
			<div class="hidden justify-end md:flex md:flex-row gap-14 pr-8">
				<NuxtLink to="/" class="menuItems">Inicio</NuxtLink>
				<NuxtLink class="menuItems">Menu 2</NuxtLink>
				<NuxtLink class="menuItems">Menu 3</NuxtLink>
				<NuxtLink class="menuItems">Menu 4</NuxtLink>
			</div>
			<div class="md:hidden cursor-pointer z-50" @click="actionMenu()">
				<Icon name="mdi:menu" size="50" color="white" :class="btnMenu" />
			</div>
			<div :class="lateral">
				<div :class="menuList">
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
	const lateral = ref(
		'md:hidden w-1/6 top-0 right-0 h-screen absolute bg-white/5  transform transition ease-in-out duration-300 translate-x-full'
	)
	const menuList = ref(
		'grid absolute right-5 top-20 grid-cols-1 gap-4 justify-end z-50 w-100 transition-all duration-300 ease-in-out'
	)
	const btnMenu = ref(
		'cursor-pointer z-10 transition-transform ease-in-out duration-500 pb-4'
	)

	const actionMenu = () => {
		if (btnMenu.value.includes('rotate-90')) {
			btnMenu.value = btnMenu.value.replace('rotate-90', ' ')
			lateral.value = lateral.value.replace('translate-x-0', 'translate-x-full')
		} else {
			btnMenu.value = btnMenu.value + ' ' + 'rotate-90'
			lateral.value = lateral.value.replace('translate-x-full', 'translate-x-0')
		}
		// menuList.value = menuList.value.includes('hidden')
		// 	? menuList.value.replace('hidden', 'grid')
		// 	: menuList.value.replace('grid', 'hidden')
	}
</script>

<style scoped>
	.menuItems {
		@apply text-sm md:text-xl font-bold text-slate-300 hover:text-cyan-300 hover:skew-x-2 z-10  cursor-pointer;
	}
	.menuItems::before {
		--BottomOffset: -2px;
		--LineHeight: 3px;
		--LineColor: #29eecc;
		position: absolute;
		content: '';
		display: block;
		z-index: -1;
		background: var(--LineColor);
		width: 0;
		height: var(--LineHeight);
		bottom: var(--BottomOffset);
		left: calc(var(--LineHeight) / -2);
		transition: 0.3s cubic-bezier(0.03, 0.3, 0.4, 0.96);
		transform: skew(-10deg);
	}
	.menuItems:hover::before {
		width: calc(100% + 3px);
	}
</style>
