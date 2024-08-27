import FooterSdi from './FooterSdi.vue'

export default {
  component: FooterSdi
}

export const Default = {
  render: (args: String) => ({
    components: { FooterSdi },
    setup() {
      return { args }
    },
    template: '<FooterSdi v-bind="args" />'
  }),
  args: {
    copyright: 'Hak Cipta © 2024 Badan Pusat Statistik',
    instansi: 'Badan Pusat Statistik (BPS - Statistics Indonesia)',
    alamat: 'Jl. Dr. Sutomo 6-8 Jakarta 10710 Indonesia',
    telp: 'Telp (62-21) 3841195, 3842508, 3810291',
    fax: 'Faks (62-21) 3857046',
    email: 'Mailbox: bpshq@bps.go.id'
  }
}
