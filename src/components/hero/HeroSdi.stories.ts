import HeroSdi from './HeroSdi.vue'

export default {
  component: HeroSdi
}

export const Default = {
  render: (args: String) => ({
    components: { HeroSdi },
    setup() {
      return { args }
    },
    template: '<HeroSdi v-bind="args" />'
  }),
  args: {}
}
