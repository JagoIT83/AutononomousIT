export class AuthService {
  constructor() {
    this.tableName = "x_snc_color_contro_user_credentials";
  }

  async login(username, password) {
    try {
      const response = await fetch(`/api/now/table/${this.tableName}?sysparm_query=username=${username}^active=true&sysparm_display_value=all`, {
        headers: {
          "Accept": "application/json",
          "X-UserToken": window.g_ck
        }
      });
      
      if (!response.ok) {
        throw new Error('Authentication failed');
      }
      
      const { result } = await response.json();
      
      if (result.length === 0) {
        throw new Error('User not found');
      }
      
      const user = result[0];
      
      // In a real application, you would hash and compare passwords
      // For simplicity, we're doing plain text comparison
      if (user.password.display_value !== password) {
        throw new Error('Invalid password');
      }
      
      if (user.active.display_value !== 'true') {
        throw new Error('User account is disabled');
      }
      
      return {
        username: user.username.display_value,
        isAdmin: user.is_admin.display_value === 'true',
        sysId: user.sys_id.value
      };
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  }

  async getUserList() {
    try {
      const response = await fetch(`/api/now/table/${this.tableName}?sysparm_display_value=all`, {
        headers: {
          "Accept": "application/json",
          "X-UserToken": window.g_ck
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      
      const { result } = await response.json();
      return result || [];
    } catch (error) {
      console.error('Get users error:', error);
      throw error;
    }
  }

  async createUser(userData) {
    try {
      const response = await fetch(`/api/now/table/${this.tableName}?sysparm_display_value=all`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "X-UserToken": window.g_ck
        },
        body: JSON.stringify(userData)
      });
      
      if (!response.ok) {
        throw new Error('Failed to create user');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Create user error:', error);
      throw error;
    }
  }

  async updateUser(sysId, userData) {
    try {
      const response = await fetch(`/api/now/table/${this.tableName}/${sysId}?sysparm_display_value=all`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "X-UserToken": window.g_ck
        },
        body: JSON.stringify(userData)
      });
      
      if (!response.ok) {
        throw new Error('Failed to update user');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Update user error:', error);
      throw error;
    }
  }

  async deleteUser(sysId) {
    try {
      const response = await fetch(`/api/now/table/${this.tableName}/${sysId}`, {
        method: "DELETE",
        headers: {
          "Accept": "application/json",
          "X-UserToken": window.g_ck
        }
      });
      
      return response.ok;
    } catch (error) {
      console.error('Delete user error:', error);
      throw error;
    }
  }
}