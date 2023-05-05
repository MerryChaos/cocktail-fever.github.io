import VCalendar from 'v-calendar';
import '@/assets/css/v-calendar.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VCalendar, {
    locales: {
      'nl': {
        firstDayOfWeek: 2,
      }
    }
  });
});
  