<template>
	<div class="flex flex-col gap-12">
		<div v-for="categorie in categories">
			<div class="relative mb-4">
				<div :id="`${categorie.name}`" class="absolute top-[-4rem]" />
				<h2 class="text-5xl font-fjalla text-center mb-2">{{ categorie.name }}</h2>
				<p class="text-center">{{ categorie.description }}</p>
			</div>
			<div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
				<div v-for="cocktail in categorie.cocktails" class="rounded-lg bg-zinc-800">
					<img
            :alt="cocktail.name"
            class="block h-80 w-full rounded-t-xl object-cover object-center"
            src="@/assets/cocktails/47-800x1000.png" />
					<div class="p-4">
						<h4 class="font-fjalla text-center">{{ cocktail.name }}</h4>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import categories from "@/data/cocktails.json"

export default {
	name: "Cocktails",
	data() {
		return {
			categories: categories
		}
	}
}

</script>