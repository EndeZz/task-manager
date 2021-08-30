import {
  setDataUserAfterReboot,
  openModalWindow,
  toGoWithModalWindow,
} from './library.js'
import switchTabs from './tabs.js'

import '@/fonts/Rubik-Medium.woff'
import '@/fonts/Rubik-Regular.woff'
import '@/scss/fonts.scss'
import '@/scss/nullstyle.scss'
import '@/scss/custom_scrollbar.scss'
import '@/scss/adaptive.scss'
import '@/scss/style.scss'

switchTabs()

setDataUserAfterReboot()

openModalWindow()

toGoWithModalWindow()
