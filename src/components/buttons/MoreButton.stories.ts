import MoreButton from './MoreButton.vue'

export default {
  component: MoreButton
}

export const Default = {
  render: (args: String) => ({
    components: { MoreButton },
    setup() {
      return { args }
    },
    template: '<MoreButton v-bind="args" />'
  }),
  args: {}
}
