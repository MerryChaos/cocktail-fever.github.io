<template>
	<!-- <PageTitle
		title="Onze Cocktails"
		subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
	/> -->
	<nav class="sticky top-0 bg-zinc-800 p-3 drop-shadow z-10">
		<div class="flex items-center justify-center">
			<ul class="flex gap-4 w-11/12 overflow-x-auto">
				<li v-for="info in categorieInfo" class="rounded-full px-2 hover:bg-zinc-700">
					<a :href="info.href" class="whitespace-nowrap">
						{{ info.text }}
					</a>
				</li>
			</ul>
		</div>
	</nav>
	
	<div class="mb-12" /> <!-- spacer -->
	<PageContent>
		<div class="flex items-center gap-2">
			<icon name="mdi:leaf" class="text-green-600 text-2xl"></icon>
			<span>Vegan option available</span>
		</div>
		<Cocktails />
	</PageContent>
</template>

<script>
import Cocktails from '@/components/Cocktails.vue';
import categories from "@/data/cocktails.json"

let info = [];
for (let key in categories) {
	info.push({
		href: `#${categories[key].name}`,
		text: categories[key].name
	});
}

export default {
	components: {
		Cocktails
	},
	data() {
		return {
			categorieInfo: info,
		}
	},
}
</script>+