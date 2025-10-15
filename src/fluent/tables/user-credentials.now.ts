import '@servicenow/sdk/global'
import { Table, StringColumn, BooleanColumn } from '@servicenow/sdk/core'

export const x_snc_color_contro_user_credentials = Table({
  name: 'x_snc_color_contro_user_credentials',
  label: 'User Credentials',
  schema: {
    username: StringColumn({ 
      label: 'Username', 
      maxLength: 50,
      mandatory: true 
    }),
    password: StringColumn({ 
      label: 'Password', 
      maxLength: 100,
      mandatory: true 
    }),
    active: BooleanColumn({ 
      label: 'Active', 
      default: true 
    }),
    is_admin: BooleanColumn({ 
      label: 'Is Admin', 
      default: false 
    }),
  },
  actions: ['create', 'read', 'update', 'delete'],
  allow_web_service_access: true,
  accessible_from: 'public'
})