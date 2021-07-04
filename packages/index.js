// 整个包的入口
import Button from './button'
import Checkbox from './checkbox'
import CheckboxGroup from './checkbox-group'
import Dialog from './dialog'
import Input from './input'
import Form from './form'
import FormItem from './form-item'
import Switch from './switch'
import Radio from './radio'
import RadioGroup from './radio-group'

const components = [
  Button,
  Checkbox,
  CheckboxGroup,
  Dialog,
  Input,
  Form,
  FormItem,
  Switch,
  Radio,
  RadioGroup
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}
// 判断是否是直接引入文件，如果是，就不用调用 Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
