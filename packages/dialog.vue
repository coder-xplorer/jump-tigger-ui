<template>
  <transition name="fade">
    <div class="jt-dialog__wrapper" v-show="visible" @click.self="handleClose">
      <div class="jt-dialog" :style="{ width, marginTop: top }">
        <div class="jt-dialog__header">
          <slot name="title">
            <span class="jt-dialog__title">{{ title }}</span>
          </slot>
          <button class="jt-dialog__headerbtn" @click="handleClose">
            <i class="iconfont icon-fork"></i>
          </button>
        </div>
        <div class="jt-dialog__body">
          <slot></slot>
        </div>
        <div class="jt-dialog__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'jtDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false,
      require: true
    }
  },
  methods: {
    handleClose () {
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style lang="scss">
.jt-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.5);
  .jt-dialog {
    position: relative;
    width: 30%;
    margin: 15vh auto 50px;
    box-sizing: border-box;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    background: #fff;
    border-radius: 2px;
    &__header {
      padding: 20px 20px 10px;
      .jt-dialog__title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .jt-dialog__headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        border: none;
        outline: none;
        background: transparent;
        padding: 0;
        cursor: pointer;
        font-size: 16px;
        .icon-fork {
          color: #909399;
        }
      }
    }
    &__body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all; /* 允许在单词内换行。 */
    }
    &__footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      .jt-button:first-child {
        margin-right: 20px;
      }
    }
  }
}
.fade-enter-active {
  animation: fade 0.3s;
}
.fade-leave-active {
  animation: fade 0.3s reverse;
}

@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
