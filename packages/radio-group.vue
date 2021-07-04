<template>
  <div class="jt-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'jtRadioGroup',
  props: {
    value: null
  },
  provide () {
    return {
      RadioGroup: this
    }
  }
}
</script>

<style></style>
