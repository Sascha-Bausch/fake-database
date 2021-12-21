<template>
  <div class="events">
    <h1>Upcoming Events in 2022</h1>
    <EventCard v-for="event in events" :key="event-id" :event="event"/>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue';     /* EventCard aus components importieren */
import EventService from '@/services/EventService.js'
/* import axios from 'axios' */

export default {
  name: 'EventList',
  components: {
    EventCard     /* EventCard als Child-Komponente von Home.vue registrieren */
  },
  data() {
    return {
      events: null
    }
  },
  /* created() {                                          // Lifecycle Hook
    axios.get('https://my-json-server.typicode.com/Sascha-Bausch/fake-database/events') */
    created() {
      EventService.getEvents()
        .then(response => {                               // Callback-Funktion, die ausgeführt wird, wenn die Promise erfüllt wurde
          this.events = response.data
        })
        .catch(error => {                                 // Callback, wenn die Promise abgelehnt wurde
          console.log(error)
        })
    }

      // die hartkodierten Events sind jetzt in der fake-database auf dem my-json-server
      /* events: [
        {
          id: 960815-1,
          category: 'animal welfare',
          title: 'Cat Adoption Day',
          description: 'Find your new feline friend at this event.',
          location: 'Meow Valley',
          date: 'January 6, 2022',
          time: '12:00',
          petsAllowed: true,
          organizer: 'Kit 10'
        },
        {
          id: 780815-2,
          category: 'drinking',
          title: 'Oblivion Day',
          description: 'Join us as we get shitfaced drunk.',
          location: 'Comatorium',
          date: 'March 03, 2022',
          time: '09:30',
          antiAlcoholicBeveragesAllowed: false,
          organizer: 'Charles Bukowski'
        },
        {
          id: 820815-3,
          category: 'animal welfare 2.0',
          title: 'All You Can Eat - Rugged Outdoors Edition',
          description: 'Join us as we are thinning out the numbers of various endangered and delicious species and BBQ them afterwards',
          location: 'Red Wood Forest',
          date: 'May 01, 2022',
          time: '06:00',
          vegetariensAllowed: false,
          organizer: 'Carl Worscht',
        },
        ]    */
    
    
};
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>