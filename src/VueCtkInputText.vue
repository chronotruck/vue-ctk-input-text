<template>
  <div id="VueCtkInputText">
    <div ref="parent" class="field" :class="{'is-focused': isFocus, 'has-value': value, 'has-error': errorHint}">
      <label for="ctk-input-text" class="field-label" :class="hint ? (errorHint ? 'text-danger' : 'text-primary') : ''">{{hint || label}}</label>
      <input :type="type" ref="CtkTimePicker" id="ctk-input-text" class="field-input" :placeholder="label" @focus="onFocus" @blur="onBlur" :value="value" @input="updateValue">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'VueCtkInputText',
    props: {
      label: {
        type: String,
        default: 'Enter text'
      },
      value: {
        required: false
      },
      hint: {
        type: String
      },
      errorHint: {
        type: Boolean
      },
      type: {
        type: String,
        default: 'text'
      }
    },
    data () {
      return {
        isFocus: false,
        inputValue: null
      }
    },
    methods: {
      onFocus () {
        this.isFocus = true
      },
      onBlur () {
        this.isFocus = false
      },
      updateValue () {
        this.$emit('input', this.$refs.CtkTimePicker.value)
      }
    }
  }
</script>

<style lang="scss" scoped>
  #VueCtkInputText {
    .field{
      position: relative;
      .field-label{
        position: absolute;
        top: 3px;
        left: 13px;
        -webkit-transform: translateY(25%);
        transform: translateY(25%);
        opacity: 0;
        -webkit-transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        font-size: 11px;
        color: rgba(0, 0, 0, 0.54);
      }
      .field-input{
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        position: relative;
        width: 100%;
        height: 42px;
        min-height: 42px;
        padding: 0 12px;
        font-weight: 300;
        -webkit-appearance: none;
        outline: none;
        background-color: transparent;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 4px;
      }
      &.has-error {
        .field-input {
          border-color: orangered !important;
        }
        .field-label{
          opacity: 1;
          -webkit-transform: translateY(0);
          transform: translateY(0);
          font-size: 11px;
        }
        .field-input {
          padding-top: 14px;
        }
      }
      &.has-value {
        .field-label{
          opacity: 1;
          -webkit-transform: translateY(0);
          transform: translateY(0);
          font-size: 11px;
        }
        .field-input {
          padding-top: 14px;
        }
      }
      &.is-focused {
        .field-input {
          border-color: dodgerblue;
        }
        .field-label {
          color: dodgerblue;
        }
      }
    }
    .text-danger {
      color: orangered !important;
    }
  }
</style>
