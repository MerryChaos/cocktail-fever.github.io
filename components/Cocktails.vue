<template>
	<div class="flex flex-col gap-12">
		<div v-for="categorie in categories">
			<div class="relative mb-4">
				<div :id="`${categorie.name}`" class="absolute top-[-5rem]" />
				<h2 class="text-5xl font-fjalla text-center mb-2">{{ categorie.name }}</h2>
				<p class="text-center">{{ categorie.description }}</p>
			</div>
			<div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
				<div v-for="cocktail in categorie.cocktails" class="rounded-lg bg-zinc-800">
					<img
            :alt="cocktail.name"
            class="block h-80 w-full rounded-t-xl object-cover object-center"
            :src="`/images/cocktails/${cocktail.image}`" />
					<div class="p-4">
						<h4 class="font-fjalla text-center flex justify-center">
							{{ cocktail.name }}
							<icon v-if="cocktail?.veganOption" name="mdi:leaf" class="text-green-600 ml-1"></icon>
						</h4>						
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