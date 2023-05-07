<template>
	<div
		class="grid grid-cols-8 gap-4 md:flex-row max-w-screen-2xl mx-auto px-4 my-12 items-center"
	>
		<div class="col-span-8 md:col-span-3">
			<h1 class="text-8xl font-fjalla text-gold-gradient">Cocktail Fever</h1>
			<h2 class="pb-4 text-3xl">FOR YOUR EVENTS</h2>
			<div class="text-lg">
				<p>
					Als bedrijf willen wij graag cocktails toegankelijker maken voor jong
					en oud. Wij willen deze voordelig aanbieden zodat ieder kan genieten
					van een kwalitatief goede, maar ook scherp geprijsde cocktails. Dit
					doen wij door verschillende pakketten aan te bieden, met verschillende
					prijsmarges.
				</p>
			</div>
		</div>
		<div class="col-span-8 md:col-span-5 h-64 md:h-[30rem] overflow-hidden">
			<img
				src="/images/frontpage-welcome-picture.jpg"
				class="h-full w-full object-cover"
				alt="Welcome"
			/>
		</div>
	</div>
	<PageContent class="flex flex-col">
		<DealHorizontalScroll class="mt-12" />
		<div class="mt-12">
			<p class="text-lg mb-4">
				Wilt u uw evenement op maat? Neem contact met ons op. Stuur ons een
				email met uw wensen en dan nemen wij zo snel mogelijk contact met u op
				om samen tot een overeenkomst te komen.
			</p>
			<div class="flex justify-center items-center">
				<a
					href="/contact"
					class="text-xl bg-zinc-800 hover:bg-zinc-700 p-4 rounded"
					>Naar contact pagina</a
				>
			</div>
		</div>
		<Carousel class="mt-12" />
	</PageContent>
</template>
