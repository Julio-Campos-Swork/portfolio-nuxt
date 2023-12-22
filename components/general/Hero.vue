<template>
	<UContainer class="border-b-[1px] border-black dark:border-blue-400 pt-2 lg:pt-12 pb-6">
		<div class="grid grid-cols-1 md:grid-cols-2">
			<div class="flex flex-col">
				<h1 class="text-center lg:py-8 py-2 text-lg lg:text-4xl font-bold">
					<span
						class="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text"
					>
						Texto de bienvenida.
					</span>
				</h1>
				<!-- Utilizando un degradado de izquierda a derecha en el texto -->
				<p class="text-base lg:text-2xl text-center">
					<span
						class="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text"
					>
						Subtexto de bienvenida.
					</span>
				</p>
				<div class="flex justify-center">
					<p class="typeWrite text-lg md:text-xl lg:text-3xl py-6">
						Desarrollador Web<span class="cursor text-lg md:text-xl lg:text-3xl">|</span>
					</p>
				</div>
			</div>
			<div class="flex flex-col justify-center">
				<NuxtPicture format="avif,webp" src="/img/hero.png" />
			</div>
		</div>
	</UContainer>
</template>

<script setup></script>

<style scoped>
	.typeWrite {
		display: block;
		font-family: monospace;
		white-space: nowrap; /* los espacios en blanco no rompen la línea */
		width: 18ch; /* el ancho será el número de caracteres que tiene nuestra línea */
		animation: escribiendo 3s steps(18) infinite alternate;
		overflow: hidden;
	}

	.cursor {
		animation: 0.6s parpadeo-cursor infinite;
		color: white;
	}

	@keyframes escribiendo {
		from {
			width: 50%;
		}
		to {
			width: 0;
		}
	}

	@keyframes parpadeo-cursor {
		50% {
			opacity: 0;
		}
	}
</style>
