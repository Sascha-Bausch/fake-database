// Weil wir hier mehrere Komponenten haben die Axios API Calls verwenden (EventList.vue, EventDispaly.vue), haben wir API Code überall in der App verteilt.
// Daher verwenden wir hier EventService.js, um API Calls (behaviour) 'zentral zu verwalten':

import axios from 'axios'

const apiClient = axios.create({                                                        // single axios instance for entire app
    baseURL: 'https://my-json-server.typicode.com/Sascha-Bausch/fake-database',         // base url for all calls to use
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'                                              // for authentification and configuration
    }
})

export default {
    getEvents() {
        return apiClient.get('/events')                                                 // extension of base url
    },
    getEvent(id) {
        return apiClient.get('/events/' + id)
    }
}
