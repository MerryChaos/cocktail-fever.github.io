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
					en oud. Hier proberen wij scherpe prijzen voor aan te bieden zodat
					ieder kan genieten van een kwalitatief goede, maar ook scherp
					geprijsde cocktails. Dit doen wij door verschillende pakketten aan te
					bieden, met verschillende prijsmarges.
				</p>
			</div>
		</div>
		<div class="col-span-8 md:col-span-5 h-64 md:h-[30rem] overflow-hidden">
			<img
				src="@/assets/frontpage welcome picture.jpg"
				class="h-full w-full object-cover"
				alt="Welcome"
			/>
		</div>
	</div>
	<PageContent class="flex flex-col">
		<DealDisplay />
		<!-- <Carousel class="mt-24"></Carousel> -->
		<div id="contactform" class="mt-24">
			<p class="text-lg mb-2">
				Wilt u uw evenement op maat? Neem contact met ons op. Vul het contactformulier hieronder in of stuur een email met uw wensen en dan
				nemen wij zo snel mogelijk contact met u op om samen tot een overeenkomst te komen.
			</p>
			<div
				class="flex justify-center items-center max-md:flex-col-reverse w-full gap-4"
			>
				<ContactForm class="w-full" />
				<!-- <VCalendar /> -->
			</div>
			<Carousel class="mt-24"></Carousel>
		</div>
	</PageContent>
</template>
