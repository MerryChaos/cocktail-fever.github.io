<template>
	<div class="text-center m-12 max-md:mx-2">
		<h1 class="font-fjalla">{{ title }}</h1>
		<p class="mt-2">{{ subtitle }}</p>
		<slot></slot>
	</div>
</template>

<script>
export default {
	props: {
		title: String,
		subtitle: String
	}
}
</script>