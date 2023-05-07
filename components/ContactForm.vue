<template>
	<form
		@submit.prevent="sumbitForm"
		class="w-full rounded bg-zinc-800 py-4 px-1"
	>
		<div class="flex flex-wrap">
			<div class="w-full md:w-1/2 px-3">
				<label class="uppercase" for="email">Email</label>
				<input
					class="block w-full bg-zinc-900 rounded py-3 px-4 leading-tight"
					v-model="formData.email"
					required
					id="email"
					type="email"
					placeholder="Email"
				/>
				<!-- <div :class="v$.email.$error ? 'h-4' : 'h-5'" >
					<span v-for="error in v$.email.$errors" :key="error.$uid" class="text-red-500 text-xs">
						{{ error.$message }}
					</span>
				</div> -->
			</div>
			<div class="w-full md:w-1/2 px-3">
				<label class="uppercase" for="name">Naam</label>
				<input
					class="block w-full bg-zinc-900 rounded py-3 px-4 leading-tight"
					v-model="formData.name"
					required
					id="name"
					type="text"
					placeholder="Naam"
				/>
				<!-- <div :class="v$.name.$error ? 'h-4' : 'h-5'" >
					<span v-for="error in v$.name.$errors" :key="error.$uid" class="text-red-500 text-xs">
						{{ error.$message }}
					</span>
				</div> -->
			</div>
		</div>
		<div class="flex flex-wrap">
			<div class="w-full px-3">
				<label class="uppercase" for="subject">Onderwerp</label>
				<select
					class="block w-full bg-zinc-900 rounded py-3 px-4 leading-tight"
					v-model="formData.subject"
					required
					id="subject"
				>
					<option hidden disabled selected value>
						-- kies een onderwerp --
					</option>
					<option v-for="option in subjectOptions" :value="option">
						{{ option }}
					</option>
				</select>
				<!-- <div :class="v$.subject.$error ? 'h-4' : 'h-5'" >
					<span v-for="error in v$.subject.$errors" :key="error.$uid" class="text-red-500 text-xs">
						{{ error.$message }}
					</span>
				</div> -->
			</div>
		</div>
		<div class="flex flex-wrap">
			<div class="w-full px-3">
				<label class="uppercase" for="message">Bericht</label>
				<textarea
					class="block w-full bg-zinc-900 rounded py-3 px-4 leading-tight"
					v-model="formData.message"
					required
					id="message"
					placeholder="Bericht"
				></textarea>
				<!-- <div :class="v$.message.$error ? 'h-4' : 'h-5'" >
					<span v-for="error in v$.message.$errors" :key="error.$uid" class="text-red-500 text-xs">
						{{ error.$message }}
					</span>
				</div> -->
			</div>
		</div>
		<div class="px-3">
			<button
				type="submit"
				class="inline-flex items-center py-2 px-4 text-center text-white bg-zinc-700 rounded-lg hover:bg-primary"
			>
				Verstuur
			</button>
		</div>
	</form>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { submitContactForm } from "@/api"

export default {
	setup() {
		const v$ = useVuelidate()

		return { v$ };
	},
	data() {
		return {
			formData: {
				email: "",
				name: "",
				subject: "",
				message: "",
			},
			subjectOptions: ["Boeken", "Pakketten", "Workshops", "Allergieën", "Anders"],
		};
	},
	validations() {
		return {
			formData: {
				email: { required, email },
				name: { required },
				subject: { required },
				message: { required },
			}
		}
	},
	methods: {
		async sumbitForm() {
			const result = await this.v$.$validate();
			if (!result) {
				return alert("Niet alle velden zijn correct ingevuld.");
			}

			const success = await submitContactForm(this.formData);
			if (success) {
				return alert("Succes, bericht verstuurd!")
			} else {
				return alert("Bericht kon niet verzonden worden, probeer het later nog een keer.")
			}
		}
	}
};
</script>
