<template>
  <div
    id="vueCtkDateTimePicker"
    class="ctk-date-time-picker">
    <img
      src="./assets/logo.png"
      alt="Ctk logo">
    <div id="vueCtkInputTextContainerDiv">
      <h1>VueCtkInputText</h1>
      <h3>A VueJs component : Beautiful Input</h3>
      <ctk-input-text
        v-model="value2"
        label="Initial input" />
      <br>
      <ctk-input-text
        v-model="value"
        label="Input with value"/>
      <br>
      <ctk-input-text
        v-model="value2"
        :error-hint="true"
        label="Input with error-hint: true + text hint"
        hint="Error text"/>
    </div>
  </div>
</template>

<script>
  import CtkInputText from './vue-ctk-input-text/vue-ctk-input-text'

  export default {
    name: 'App',
    components: {
      CtkInputText
    },
    data () {
      return {
        value: 'Hello world!',
        value2: null
      }
    }
  }
</script>

<style lang="scss">
  @import "/assets/main.css";
</style>
