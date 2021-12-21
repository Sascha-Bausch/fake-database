<template>
    <div v-if="event">
        <h1>{{ event.title }}</h1>
        <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
        <p>{{ event.description }}</p>
    </div>
</template>

<script>
import EventService from '@/services/EventService.js'
export default {
    props: ['id'],                                      // props: ['id] -> wird eingesetzt in .getEvent(this.id)
    data() {
        return {
            event: null
        }
    },
    created() {
        EventService.getEvent(this.id)                    // fetch event (by id) and set local data (in Zeile 15) - API Call
            .then(response => {
                this.event = response.data
            })
            .catch(error => {
                console.log(error)
            })
    }
}
</script>
