# vue-ctk-time-picker

> A vue component for good input text  (by Chronotruck)

## Install

``` bash
npm install vue-ctk-input-text --save
```
#### In single component
``` js
import CtkInputText from 'vue-ctk-input-text'

var yourComponent = new Vue({
  components: { CtkInputText },
  ...
})
```
``` html
<template>
  ...
  <ctk-input-text
    v-model="value" 
    :label="'placeholder'"
    :hint="'Text'"
    :error-hint="true" />
  ...
</template>  
```

## Props API

| Props      | Type       | Required | Default    | Options        |
|------------|------------|----------|------------|----------------|
| v-model    | String/Int | true     | -          | -              |
| label      | String     | false    | Enter Text | -              |
| type       | String     | no       | text       | text or number |
| hint*       | text       | no       | -          |                |
| error-hint** | Boolean    | no       | false      |                |

*hint : Is a text that replaces the label

**Error-hint : When is `true` --> Input border & label are red 

## Contribution

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```
