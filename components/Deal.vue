<template>
	<a :href="`/deals#${deal.id}`" class="flex flex-col p-8 bg-zinc-800 rounded-lg hover:bg-zinc-700">
		<div class="flex justify-center">
			<span class="text-5xl text-gold-gradient font-fjalla">{{ deal.name }}</span>
		</div>
		<div name="price-and-amount">
			<div class="text-2xl text-center">€ {{ deal.price }}</div>
			<div class="text-3xl text-center">{{ deal.amount }} cocktails</div>
		</div>
	</a>
</template>

<script>
export default {
	props: {
		deal: null
	}
}
</script>