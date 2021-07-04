<template>
  <button
    @click="handleClick"
    :disabled="disabled"
    class="jt-button"
    :class="[
      `jt-button--${type}`,
      {
        'is-plan': plan,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled
      },
      `jt-button--${size}`
    ]"
  >
    <i v-if="icon" :class="['iconfont', icon]"></i>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'jtButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plan: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'default'
    },
    icon: {
      type: String,
      default: ''
    },
    circle: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss">
/* 默认样式 */
.jt-button {
  display: inline-block;
  box-sizing: border-box;
  line-height: 1;
  cursor: pointer;
  padding: 12px 20px;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  border-radius: 4px;
  font-weight: 500;
  font-size: 14px;
  white-space: nowrap;
  transition: 0.1s;
  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
  &.is-plan:hover,
  &.is-plan:focus {
    background: #fff;
    border-color: #409eff;
    color: #409eff;
  }
  &.is-circle {
    border-radius: 50%;
    padding: 12px;
  }
  &.is-disabled,
  &.is-disabled:focus,
  &.is-disabled:hover,
  &.is-disabled:active {
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
  }
}

/* primary样式 */
.jt-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  &:focus,
  &:hover {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
  }
  &.is-plan {
    color: #409eff;
    background: #ecf5ff;
    border-color: #b3d8ff;
    &:focus,
    &:hover {
      background: #409eff;
      border-color: #409eff;
      color: #fff;
    }
    &.is-disabled,
    &.is-disabled:focus,
    &.is-disabled:hover,
    &.is-disabled:active {
      color: #8cc5ff;
      background-color: #ecf5ff;
      border-color: #d9ecff;
    }
  }
  &.is-round {
    border-radius: 20px;
    padding: 12px 23px;
  }
  &.is-circle {
    border-radius: 50%;
    padding: 12px;
  }
  &.is-disabled,
  &.is-disabled:focus,
  &.is-disabled:hover,
  &.is-disabled:active {
    color: #fff;
    background-color: #a0cfff;
    border-color: #a0cfff;
  }
}

/* success样式 */
.jt-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:focus,
  &:hover {
    background: #85ce61;
    border-color: #85ce61;
    color: #fff;
  }
  &.is-plan {
    color: #67c23a;
    background: #f0f9eb;
    border-color: #c2e7b0;
    &:focus,
    &:hover {
      background: #67c23a;
      border-color: #67c23a;
      color: #fff;
    }
    &.is-disabled,
    &.is-disabled:focus,
    &.is-disabled:hover,
    &.is-disabled:active {
      color: #a4da89;
      background-color: #f0f9eb;
      border-color: #e1f3d8;
    }
  }
  &.is-round {
    border-radius: 20px;
  }
  &.is-circle {
    border-radius: 50%;
    padding: 12px;
  }
  &.is-disabled,
  &.is-disabled:focus,
  &.is-disabled:hover,
  &.is-disabled:active {
    color: #fff;
    background-color: #b3e19d;
    border-color: #b3e19d;
  }
}

/* info样式 */
.jt-button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  &:focus,
  &:hover {
    background: #a6a9ad;
    border-color: #a6a9ad;
    color: #fff;
  }
  &.is-plan {
    color: #909399;
    background: #f4f4f5;
    border-color: #d3d4d6;
    &:focus,
    &:hover {
      background: #909399;
      border-color: #909399;
      color: #fff;
    }
    &.is-disabled,
    &.is-disabled:focus,
    &.is-disabled:hover,
    &.is-disabled:active {
      color: #bcbec2;
      background-color: #f4f4f5;
      border-color: #e9e9eb;
    }
  }
  &.is-round {
    border-radius: 20px;
  }
  &.is-circle {
    border-radius: 50%;
    padding: 12px;
  }
  &.is-disabled,
  &.is-disabled:focus,
  &.is-disabled:hover,
  &.is-disabled:active {
    color: #fff;
    background-color: #c8c9cc;
    border-color: #c8c9cc;
  }
}

/* warning样式 */
.jt-button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:focus,
  &:hover {
    background: #ebb563;
    border-color: #ebb563;
    color: #fff;
  }
  &.is-plan {
    color: #e6a23c;
    background: #fdf6ec;
    border-color: #f5dab1;
    &:focus,
    &:hover {
      background: #e6a23c;
      border-color: #e6a23c;
      color: #fff;
    }
    &.is-disabled,
    &.is-disabled:focus,
    &.is-disabled:hover,
    &.is-disabled:active {
      color: #f0c78a;
      background-color: #fdf6ec;
      border-color: #faecd8;
    }
  }
  &.is-round {
    border-radius: 20px;
  }
  &.is-circle {
    border-radius: 50%;
    padding: 12px;
  }
  &.is-disabled,
  &.is-disabled:focus,
  &.is-disabled:hover,
  &.is-disabled:active {
    color: #fff;
    background-color: #f3d19e;
    border-color: #f3d19e;
  }
}

/* danger样式 */
.jt-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:focus,
  &:hover {
    background: #f78989;
    border-color: #f78989;
    color: #fff;
  }
  &.is-plan {
    color: #f56c6c;
    background: #fef0f0;
    border-color: #fbc4c4;
    &:focus,
    &:hover {
      background: #f56c6c;
      border-color: #f56c6c;
      color: #fff;
    }
    &.is-disabled,
    &.is-disabled:focus,
    &.is-disabled:hover,
    &.is-disabled:active {
      color: #f9a7a7;
      background-color: #fef0f0;
      border-color: #fde2e2;
    }
  }
  &.is-round {
    border-radius: 20px;
  }
  &.is-circle {
    border-radius: 50%;
    padding: 12px;
  }
  &.is-disabled,
  &.is-disabled:focus,
  &.is-disabled:hover,
  &.is-disabled:active {
    color: #fff;
    background-color: #fab6b6;
    border-color: #fab6b6;
  }
}
/* 中等按钮 */
.jt-button--medium {
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 4px;
  &.is-round {
    padding: 10px 20px;
  }
}
/* 小型按钮 */
.jt-button--small {
  padding: 9px 15px;
  font-size: 12px;
  border-radius: 3px;
  &.is-round {
    padding: 9px 15px;
  }
}
/*超小按钮*/
.jt-button--mini {
  padding: 7px 15px;
  font-size: 12px;
  border-radius: 3px;
  &.is-round {
    padding: 7px 15px;
  }
}
</style>
