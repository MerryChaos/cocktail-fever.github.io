<template>
	<div class="flex flex-col gap-8">
		<div v-for="deal in deals" :id="deal.id" class="flex flex-col">
			<h2 class="w-fit text-gold-gradient font-fjalla">
				{{ deal.name }}
			</h2>
			<p>{{ deal.amount }} cocktails voor €{{ deal.price }}</p>
			<p class="max-w-3xl">{{ deal.description }}</p>
			<p v-if="deal.id != 'mix'">Bij dit pakket kunt u kiezen uit de volgende cocktails:</p>
			<ul>
				<li v-for="content in deal.content">
					- {{ content }}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import deals from "@/data/deals.json";

export default {
	data() {
		return {
			deals: deals,
		};
	},
};
</script>
