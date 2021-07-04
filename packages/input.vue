<template>
  <div class="jt-input" :class="{ 'jt-input--suffix': showSuffix }">
    <input
      class="jt-input__inner"
      :class="{ 'is-disabled': disabled }"
      :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
      :placeholder="placeholder"
      :name="name"
      :disabled="disabled"
      :value="value"
      @input="handleInput"
      @focus="handleFocus"
    />
    <span class="jt-input__suffix" v-if="showSuffix">
      <i
        class="jt-input__icon iconfont icon-qingkong"
        v-if="clearable && value"
        @click="clear"
      ></i>
      <i
        class="jt-input__icon iconfont icon-xianshimima"
        :class="{ 'jt-icon-active': passwordVisible }"
        v-if="showPassword"
        @click.stop="handlePassword"
      ></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'jtInput',
  data () {
    return {
      passwordVisible: false // 控制密码的显示与隐藏
    }
  },
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    showSuffix () {
      return this.clearable || this.showPassword
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    },
    clear (e) {
      this.$emit('input', '')
      this.$emit('clear', e)
    },
    handlePassword () {
      this.passwordVisible = !this.passwordVisible
    },
    handleFocus (e) {
      this.$emit('focus', e)
    }
  }
}
</script>

<style lang="scss">
.jt-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  input {
    cursor: pointer;
  }
  .jt-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    font-size: inherit;
    box-sizing: border-box;
    outline: none;
    height: 40px;
    line-height: 40px;
    border: 1px solid #dcdfe6;
    padding: 0 15px;
    border-radius: 4px;
    color: #606266;
    display: inline-block;
    width: 100%;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    &:focus {
      outline: none;
      border-color: #409eff;
    }
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
.jt-input--suffix {
  .jt-input__inner {
    padding-right: 30px;
  }
  .jt-input__suffix {
    position: absolute;
    height: 100%;
    line-height: 40px;
    top: 0;
    right: 15px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(cubic-bezier(0.645, 0.045, 0.355, 1));
    }
    .jt-icon-active {
      color: blue;
    }
  }
}
</style>
