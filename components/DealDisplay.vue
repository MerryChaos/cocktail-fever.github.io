<template>
	<div class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
		<Deal v-for="deal in deals" :deal="deal" />
	</div>
</template>

<script>
import deals from '@/data/deals.json'

export default {
	data() {
		return {
			deals: deals
		}
	}
}

</script>