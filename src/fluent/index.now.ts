import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'

// Create admin user
export const adminUser = Record({
  $id: Now.ID['admin-user'],
  table: 'x_snc_color_contro_user_credentials',
  data: {
    username: 'admin',
    password: 'admin',
    active: true,
    is_admin: true
  }
})

// Create a test user
export const testUser = Record({
  $id: Now.ID['test-user'],
  table: 'x_snc_color_contro_user_credentials',
  data: {
    username: 'user1',
    password: 'password123',
    active: true,
    is_admin: false
  }
})