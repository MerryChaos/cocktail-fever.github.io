<!-- https://flowbite.com/docs/components/footer/#social-media-icons -->
<template>
	<footer class="sticky top-[100%]">
		<div class="md:flex md:justify-between p-4 sm:p-6 bg-zinc-800">
			<div class="mb-6 md:mb-0">
				<a href="/" class="flex items-center">
					<img src="@/assets/icons/cf_logo_color_no_bg.svg" class="h-8 mr-3" alt="Cocktail Fever Logo" />
					<span class="self-center text-2xl whitespace-nowrap font-fjalla text-gold-gradient">Cocktail Fever</span>
				</a>
			</div>
			<div class="grid grid-cols-1 gap-8 sm:gap-8 sm:grid-cols-2">
				<div>
					<h6>Handige links</h6>
					<span class="item">
						<a href="/deals" class="hover:underline">Pakketten</a>
					</span>
					<span class="item">
						<a href="/cocktails" class="hover:underline">Cocktails</a>
					</span>
					<span class="item">
						<a href="/workshops" class="hover:underline">Workshops</a>
					</span>
					<span class="item">
						<a href="/about" class="hover:underline">Over Ons</a>
					</span>
					<span class="item">
						<a href="/contact" class="hover:underline">Contact</a>
					</span>
					<span class="item">
						<a href="/contact#FAQ" class="hover:underline">FAQ</a>
					</span>
				</div>
				<div>
					<h6>Contact</h6>
					<a href="mailto:cocktailfever.est.2023@gmail.com" class="item hover:underline">
						<Icon name="mdi:email" size="24px" />
						cocktailfever.est.2023@gmail.com
					</a>
					<a href="tel:+31623383724" class="item hover:underline">
						<Icon name="mdi:phone" size="24px" />
						+31 6 23383724
					</a>
					<a href="https://www.instagram.com/cocktailfever.est.23/" class="item hover:underline">
						<Icon name="mdi:instagram" size="24px" />
						@cocktailfever
					</a>
					<span class="item">
						KVK nummer: 90063376
					</span>
					<span class="item">
						BTW-id: NL865199231B01
					</span>
				</div>
			</div>
		</div>
	</footer>
</template>

<style>
h6 {
	color: #999;
	font-size: large;
	font-weight: bold;
	text-transform: uppercase;
}

.item {
	display: flex;
	align-items: center;
	gap: 0.25rem/* 4px */;
}
</style>