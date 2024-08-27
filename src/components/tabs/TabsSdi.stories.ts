import TabsSdi from './TabsSdi.vue'

export default {
  component: TabsSdi
}

export const Default = {
  render: (args: String) => ({
    components: { TabsSdi },
    setup() {
      return { args }
    },
    template: '<TabsSdi v-bind="args" />'
  }),
  args: {}
}
