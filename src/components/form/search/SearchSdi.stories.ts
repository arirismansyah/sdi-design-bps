import SearchSdi from './SearchSdi.vue'

export default {
  component: SearchSdi
}

export const Default = {
  render: (args: String) => ({
    components: { SearchSdi },
    setup() {
      return { args }
    },
    template: '<SearchSdi v-bind="args" />'
  }),
  args: {}
}
