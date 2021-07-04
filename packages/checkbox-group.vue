<template>
  <div class="jt-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'jtCheckboxGroup',
  props: {
    value: {
      type: Array
    }
  },
  provide () {
    return {
      CheckboxGroup: this
    }
  }
}
</script>

<style></style>
