import Vue from 'vue'
import VueCtkInputText from './VueCtkInputText.vue'

if (document.querySelector('#vueCtkInputTextContainerDiv')) {
  Vue.component('ctk-input-text', VueCtkInputText)
  new Vue({
    el: '#vueCtkInputTextContainerDiv',
    data () {
      return {
        value: "Hello world",
        value2: null
      }
    }
  })
}

export default VueCtkInputText
