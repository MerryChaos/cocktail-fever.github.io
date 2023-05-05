<template>
	<PageContent>
		<PageTitle
			title="Contact"
			subtitle="Wilt u uw evenement op maat? Neem contact met ons op. Vul het contactformulier hieronder in of stuur een email met uw wensen en dan
				nemen wij zo snel mogelijk contact met u op om samen tot een overeenkomst te komen."
		/>
		<div id="contactform" class="mt-12">
			<h4 class="mb-2">Contactformulier</h4>
			<div class="flex justify-center items-center max-md:flex-col-reverse w-full gap-4">
				<ContactForm class="w-full" />
				<!-- <VCalendar /> -->
			</div>
		</div>
		<div id="FAQ" class="mt-24">
			<h4 class="mb-2">FAQ: Vaak gestelde vragen</h4>
			<FAQ />
		</div>
	</PageContent>
</template>