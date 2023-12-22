<template>
	<UContainer class="border-b-2 border-blue-400 py-12">
		<div class="w-full flex flex-col gap-y-4">
			<UCard :ui="{ body: { base: 'grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-24' } }">
				<div>
					<p class="text-center text-xl md:text-3xl font-bold pb-10">Principal Skills</p>
					<div class="grid grid-cols-3 lg:grid-cols-4">
						<div class="flex flex-col items-center gap-4" v-for="icon in icons">
							<a target="_blank" :href="icon.link">
								<img
									:src="icon.icon"
									class="w-12 transition-all ease-in-out duration-300 hover:scale-110"
								/>
							</a>
							<p class="text-center pb-8 font-semibold">{{ icon.name }}</p>
						</div>
					</div>
				</div>

				<div>
					<p class="text-center text-xl md:text-3xl font-bold pb-10">Secondary Skills</p>
					<div class="grid grid-cols-3 lg:grid-cols-4">
						<div class="flex flex-col items-center gap-4" v-for="icon in secondIcons">
							<a target="_blank" :href="icon.link">
								<img
									:src="icon.icon"
									class="w-12 transition-all ease-in-out duration-300 hover:scale-110"
								/>
							</a>
							<p class="text-center pb-8 font-semibold">{{ icon.name }}</p>
						</div>
					</div>
				</div>
			</UCard>
		</div>
	</UContainer>
</template>

<script setup>
	const icons = [
		{
			name: 'HTML',
			icon: '/img/skills/html.svg',
			link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
		},
		{
			name: 'CSS',
			icon: '/img/skills/css.svg',
			link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
		},
		{
			name: 'JavaScript',
			icon: '/img/skills/javascript.svg',
			link: 'https://www.javascript.com/',
		},
		{ name: 'Vue.js', icon: '/img/skills/vue.svg', link: 'https://vuejs.org/' },
		{ name: 'Nuxt.js', icon: '/img/skills/nuxt.svg', link: 'https://nuxt.com/' },
		{
			name: 'Tailwindcss',
			icon: '/img/skills/tailwind.svg',
			link: 'https://tailwindcss.com/',
		},
		{
			name: 'Vuetify',
			icon: '/img/skills/vuetify.svg',
			link: 'https://vuetifyjs.com/en/',
		},
		{ name: 'Astro', icon: '/img/skills/astro.svg', link: 'https://astro.build/' },
	]

	const secondIcons = [
		{
			name: 'Bootstrap',
			icon: '/img/skills/bootstrap.svg',
			link: 'https://getbootstrap.com/',
		},
		{
			name: 'React.js',
			icon: '/img/skills/react.svg',
			link: 'https://react.dev/',
		},
		{
			name: 'Next.js',
			icon: '/img/skills/next.svg',
			link: 'https://nextjs.org/',
		},
		{
			name: 'PHP',
			icon: '/img/skills/php.svg',
			link: 'https://www.php.net/',
		},
		{
			name: 'Laravel',
			icon: '/img/skills/laravel.svg',
			link: 'https://laravel.com/',
		},
		{
			name: 'MySql',
			icon: '/img/skills/mysql.svg',
			link: 'https://www.mysql.com/',
		},
	]
</script>

<style scoped></style>
