<template>
	<UContainer>
		<div class="grid grid-cols-1 md:grid-cols-2">
			<div class="flex flex-col">
				<h1 class="text-center py-8 text-lg md:text-4xl font-bold">
					<span
						class="bg-gradient-to-r from-purple-400 to-cyan-300 text-transparent bg-clip-text"
					>
						Texto de bienvenida.
					</span>
				</h1>
				<!-- Utilizando un degradado de izquierda a derecha en el texto -->
				<p class="text-lg md:text-2xl text-center">
					<span
						class="bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text"
					>
						Subtexto de bienvenida.
					</span>
				</p>
				<p class="typeWrite">
					Efecto maquina de escribir brutal<span class="cursor">|</span>
				</p>
			</div>
			<div class="flex flex-col">
				<NuxtPicture format="avif,webp" src="/img/hero.png" />
			</div>
		</div>
	</UContainer>
</template>

<script setup></script>

<style scoped>
	.typeWrite {
		font-size: 2rem;
		display: block;
		font-family: monospace;
		white-space: nowrap; /* los espacios en blanco no rompen la línea */
		width: 28ch; /* el ancho será el número de caracteres que tiene nuestra línea */
		animation: escribiendo 3s steps(28) infinite alternate;
		overflow: hidden;
	}

	.cursor {
		animation: 0.6s parpadeo-cursor infinite;
		color: white;
	}

	@keyframes escribiendo {
		from {
			width: 100%;
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
