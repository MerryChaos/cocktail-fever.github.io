<template>
  <div class="flex flex-1 flex-col h-screen overflow-hidden bg-zinc-900 text-white font-fenix">
    <AppHeader />
		<main class="flex flex-col w-full h-full overflow-y-auto">
			<NuxtPage />
			<AppFooter />
		</main>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fenix&family=Fjalla+One&display=swap');
</style>

<style>
html {
	scroll-behavior: smooth;
}

.font-fjalla {
	font-family: 'Fjalla One', sans-serif;
}

.font-fenix {
	font-family: 'Fenix', serif;
}
</style>