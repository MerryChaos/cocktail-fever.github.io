<template>
	<div class="relative">
		<!-- Carousel Items -->
		<div class="overflow-hidden">
			<div
				class="flex transition-transform duration-500 ease-in-out"
				:style="{
					transform: `translateX(-${(currentIndex * 100) / itemsPerPage}%)`,
				}"
			>
				<div
					v-for="(item, index) in items"
					:key="index"
					class="lg:w-1/3 sm:w-1/2 w-full flex-none flex justify-center items-center"
				>
					<Deal :deal="item" class="w-full mx-2" />
				</div>
			</div>
		</div>

		<!-- Navigation Buttons -->
		<div class="absolute top-1/2 left-0 transform -translate-y-1/2">
			<button
				class="p-2 bg-zinc-700 text-white rounded focus:outline-none"
				@click="prev"
			>
				<Icon name="mdi:arrow-left" size="24px" />
			</button>
		</div>
		<div class="absolute top-1/2 right-0 transform -translate-y-1/2">
			<button
				class="p-2 bg-zinc-700 text-white rounded focus:outline-none"
				@click="next"
			>
				<Icon name="mdi:arrow-right" size="24px" />
			</button>
		</div>
	</div>
</template>

<script>
import deals from "@/data/deals.json";

export default {
	data() {
		return {
			currentIndex: 0,
			items: deals,
			windowWidth: process.client ? window.innerWidth : 0,
		};
	},
	computed: {
		itemsPerPage() {
			const breakpoints = {
				sm: 640,
				lg: 1024,
			};

			if (this.windowWidth >= breakpoints.lg) {
				return 3;
			} else if (this.windowWidth >= breakpoints.sm) {
				return 2;
			} else {
				return 1;
			}
		},
	},
	methods: {
		next() {
			if (this.currentIndex < this.items.length - this.itemsPerPage) {
				this.currentIndex++;
			} else {
				this.currentIndex = 0;
			}
		},
		prev() {
			if (this.currentIndex > 0) {
				this.currentIndex--;
			} else {
				this.currentIndex = this.items.length - this.itemsPerPage;
			}
		},
	},
	mounted() {
		// Add an event listener to update the window width when the window is resized
		if (process.client) {
			window.addEventListener("resize", () => {
				this.windowWidth = window.innerWidth;
			});
		}
	},
	beforeUnmount() {
		// Remove the event listener when the component is unmounted
		if (process.client) {
			window.removeEventListener("resize", () => {
				this.windowWidth = window.innerWidth;
			});
		}
	},
};
</script>
