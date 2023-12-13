import '@point-hub/papp/style.css'
import { PluginInputMask, PluginTooltip, PluginIcon } from '@point-hub/papp'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PluginInputMask)
  nuxtApp.vueApp.use(PluginTooltip)
  nuxtApp.vueApp.use(PluginIcon)
})
