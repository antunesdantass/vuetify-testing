import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    defaults: {
      VInput: {
        variant: "underlined",
      },
      VTextField: {
        variant: "underlined",
      },
    },
    components,
    directives,
  })

  nuxtApp.vueApp.use(vuetify)
});
