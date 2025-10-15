import '@servicenow/sdk/global'
import { UiPage } from '@servicenow/sdk/core'
import page from '../../client/index.html'

export const login_page = UiPage({
  $id: Now.ID['login-page'],
  endpoint: 'x_snc_color_contro_login.do',
  html: page,
  direct: true
})