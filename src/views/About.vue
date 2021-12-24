<template>
  <div class="about">
    <h1>A site 4 kick-ass events!!!</h1>
    <h2>Another Thing:</h2>
  </div>
  <div id="app">
    <h2>{{ date }}</h2>
    <p>You clicked the button {{ numberOfClicks }} times</p>
    <button @click="clickButton">Click me!</button>
    <p v-if='numberOfClicks > 0'>The button was last clicked at {{ lastClick }}</p>
    </div>
</template>

<script>
import {ref, onMounted, watch} from 'vue'
export default {
  setup(){
    const numberOfClicks = ref(0)
    function clickButton() {
      numberOfClicks.value++
    }
  
    const lastClick = ref('')
    watch(numberOfClicks, () => {
      lastClick.value = new Date().toTimeString()
    })

    let date = ref('')
    onMounted(() => {
      date.value = new Date().toDateString()
    })

    return {
      date,
      numberOfClicks,
      clickButton,
      lastClick
    }
  }
};
</script>