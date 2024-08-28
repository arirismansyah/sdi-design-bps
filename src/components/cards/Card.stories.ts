import Card from './Card.vue'
export default {
  component: Card
}

export const Default = {
  render: (args: String) => ({
    components: { Card },
    setup() {
      return { args }
    },
    template: '<Card v-bind="args" />'
  }),
  args: {}
}
