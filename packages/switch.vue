<template>
  <div class="jt-switch" @click="handleCilck" :class="{ ischecked: value }">
    <input type="checkbox" :name="name" ref="input" class="jt-switch__input" />
    <span class="jt-switch__core" ref="core">
      <span class="jt-switch__button"></span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'jtSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  mounted () {
    this.setColor()
    this.$refs.input.checked = this.value
  },
  methods: {
    async handleCilck () {
      this.$emit('input', !this.value)
      // 等待value发生改变了改变，在setColor
      await this.$nextTick()
      this.setColor()
      this.$refs.input.checked = this.value
    },
    setColor () {
      if (this.activeColor || this.inactiveColor) {
        const color = this.value ? this.activeColor : this.inactiveColor
        console.log(this.value)
        console.log(this.activeColor)
        console.log(color)
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
      }
    }
  }
}
</script>

<style lang="scss">
.jt-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  .jt-switch__input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .jt-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .jt-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background: #fff;
    }
  }
}
.jt-switch.ischecked {
  .jt-switch__core {
    border-color: #409eff;
    background-color: #409eff;
    .jt-switch__button {
      transform: translateX(20px);
    }
  }
}
</style>
