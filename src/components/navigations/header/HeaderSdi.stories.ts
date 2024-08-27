import HeaderSdi from './HeaderSdi.vue'

export default {
  component: HeaderSdi
}

export const Default = {
  render: (args: String) => ({
    components: { HeaderSdi },
    setup() {
      return { args }
    },
    template: '<HeaderSdi v-bind="args" />'
  }),
  args: {}
}
