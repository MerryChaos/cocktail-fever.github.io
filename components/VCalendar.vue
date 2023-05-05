<!-- https://vcalendar.io/ -->
<template>
  <div>
		<client-only>
			<DatePicker
				locale="nl"
				is-dark
				color="green"
				:date="date"
				:disabled-dates="disabledDates"
			/>
		</client-only>
  </div>
</template>

<script>
import { Calendar, DatePicker } from 'v-calendar';

export default {
	name: 'VCalendar',
	components: {
		Calendar,
		DatePicker,
	},
  data() {
    return {
      date: new Date(),
			disabledDates: [
				{
					weekdays: [2, 3, 4, 5, 6]
				},
				{
					start: null,
					end: new Date()
				}
			],
    }
   }
}
</script>