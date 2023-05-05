<template>
	<div class="bg-zinc-800 p-4 w-full rounded">
		<div class="flex flex-col gap-2">
			<HeadlessDisclosure v-slot="{ open }" v-for="item in faq">
				<HeadlessDisclosureButton
					class="flex justify-start items-center w-full bg-zinc-700 rounded-lg py-2 px-4"
				>
					<span>{{ item.question }}</span>
					<Icon
						:name="open ? 'mdi:chevron-up' : 'mdi:chevron-down'"
						class="ml-auto"
						size="24px"
					/>
				</HeadlessDisclosureButton>
				<HeadlessDisclosurePanel>
					<p class="p-2">
						{{ item.anwser }}
					</p>
				</HeadlessDisclosurePanel>
			</HeadlessDisclosure>
		</div>
	</div>
</template>

<script>
import faq from "@/data/faq.json";

export default {
	data() {
		return {
			faq: faq,
		}
	}
}
</script>