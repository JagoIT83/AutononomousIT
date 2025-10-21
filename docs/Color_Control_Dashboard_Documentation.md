# Color Control Dashboard - Application Documentation

## Table of Contents
1. [Application Overview](#application-overview)
2. [Technical Architecture](#technical-architecture)
3. [User Guide](#user-guide)
4. [Administrator Guide](#administrator-guide)
5. [Troubleshooting Guide](#troubleshooting-guide)
6. [Development & Maintenance](#development--maintenance)
7. [Security Considerations](#security-considerations)
8. [FAQ](#faq)

---

## Application Overview

### Description
The **Color Control Dashboard** is a ServiceNow application that provides secure user authentication and an interactive color-changing interface. The application features role-based access control, user management capabilities, and a dynamic dashboard with visual feedback.

### Key Features
- 🔐 **Secure Authentication System** - Custom user credential management
- 🎨 **Interactive Color Dashboard** - Four-button color control interface
- 👥 **User Management** - Admin panel for user administration
- 🚨 **Error Handling** - Comprehensive error messages and validation
- 📱 **Responsive Design** - Works on desktop and mobile devices
- 🔄 **Real-time Updates** - Live API integration with ServiceNow backend

### Application Details
- **Scope:** x_snc_color_contro
- **Version:** 1.0.0
- **Main URL:** https://[instance].service-now.com/x_snc_color_contro_login.do
- **GitHub Repository:** Synced for source code review and version control

---

## Technical Architecture

### Frontend Stack
- **Framework:** React 18.2.0
- **Build Tool:** ServiceNow SDK 4.0.2
- **Styling:** Custom CSS with animations and gradients
- **State Management:** React Hooks (useState, useEffect)
- **Routing:** Hash-based SPA routing

### Backend Components
- **Table:** `x_snc_color_contro_user_credentials` - User authentication data
- **UI Page:** `x_snc_color_contro_login` - Main application interface
- **API Integration:** ServiceNow Table API for CRUD operations

### Database Schema

#### User Credentials Table (`x_snc_color_contro_user_credentials`)
| Field | Type | Description | Required |
|-------|------|-------------|----------|
| username | String(50) | Unique username for authentication | Yes |
| password | String(100) | User password (stored in plain text) | Yes |
| active | Boolean | Account activation status | Yes |
| is_admin | Boolean | Administrative privileges flag | Yes |
| full_name | String(100) | User's display name | No |

### File Structure
```
src/
├── client/
│   ├── app.css                    # Application styling
│   ├── app.jsx                    # Main React component
│   ├── index.html                 # HTML entry point
│   ├── main.jsx                   # React bootstrap
│   ├── components/
│   │   ├── AdminPanel.jsx         # User management interface
│   │   ├── Dashboard.jsx          # Color control dashboard
│   │   └── LoginForm.jsx          # Authentication form
│   ├── services/
│   │   └── AuthService.js         # Authentication API calls
│   └── utils/
│       └── fields.js              # Field mapping utilities
├── fluent/
│   ├── index.now.ts               # Application index
│   ├── tables/
│   │   └── user-credentials.now.ts # User table definition
│   └── ui-pages/
│       └── login.now.ts           # UI Page definition
docs/
└── Color_Control_Dashboard_Documentation.md
```

---

## User Guide

### Getting Started

#### Initial Login
1. Navigate to the application URL: `https://[instance].service-now.com/x_snc_color_contro_login.do`
2. Enter your username and password
3. Click "Login" to access the dashboard

#### Default Credentials
- **Administrator:** Username: `admin`, Password: `admin`
- **Test User:** Username: `user1`, Password: `password123`

### Using the Color Dashboard

#### Color Control Functions
The dashboard features a central circle that changes colors based on button clicks:

1. **Function 1 (Red)** - Changes circle to red color
2. **Function 2 (Green)** - Changes circle to green color
3. **Function 3 (Blue)** - Changes circle to blue color
4. **Function 4 (Yellow)** - Changes circle to yellow color

#### Dashboard Features
- **Current Color Display** - Shows the active color in the center circle
- **Last Function Indicator** - Displays which function was last activated
- **Smooth Animations** - Visual transitions between color changes
- **Responsive Design** - Adapts to different screen sizes

### Navigation
- **Dashboard Tab** - Access the color control interface
- **Admin Panel Tab** - Available only for administrators
- **Logout Button** - Ends the session and returns to login screen

---

## Administrator Guide

### Accessing Admin Panel
1. Log in with administrative credentials
2. Click the "Admin Panel" tab in the navigation
3. The admin panel displays all user management options

### User Management Functions

#### Creating New Users
1. In the Admin Panel, locate the "Create New User" section
2. Fill in the required fields:
   - **Username** - Must be unique
   - **Password** - User's login password
   - **Full Name** - Display name (optional)
   - **Active** - Check to enable the account
   - **Admin** - Check to grant administrative privileges
3. Click "Create User"
4. Confirmation message will appear upon success

#### Editing Existing Users
1. Locate the user in the users table
2. Click "Edit" next to the user's record
3. Modify the desired fields:
   - Update password
   - Change full name
   - Toggle active status
   - Modify admin privileges
4. Click "Update User"
5. Changes take effect immediately

#### Deleting Users
1. Find the user in the users table
2. Click "Delete" next to the user's record
3. Confirm deletion in the popup dialog
4. User record is permanently removed

### User Table Management
Access the backend user table directly:
- URL: `https://[instance].service-now.com/x_snc_color_contro_user_credentials_list.do`
- Standard ServiceNow list view with full CRUD capabilities
- Bulk operations available through list controls

---

## Troubleshooting Guide

### Authentication Issues

#### Failed Login - "User not found"
**Symptoms:** Error message appears when entering credentials
**Causes:**
- Username doesn't exist in the system
- Typo in username entry
- User record was deleted

**Resolution Steps:**
1. Verify username spelling and case sensitivity
2. Check if user exists in admin panel or user table
3. If user doesn't exist, create new user account via admin panel
4. Contact administrator if unable to access admin functions

#### Failed Login - "Invalid password"
**Symptoms:** Username is recognized but password is rejected
**Causes:**
- Incorrect password entry
- Password was changed by administrator
- Caps Lock or special characters issue

**Resolution Steps:**
1. Verify password spelling and case sensitivity
2. Check Caps Lock status
3. Request password reset from administrator
4. Try alternative known passwords

#### Failed Login - "User account is disabled"
**Symptoms:** Valid credentials but login is blocked
**Causes:**
- User account was deactivated by administrator
- Account was temporarily disabled for security

**Resolution Steps:**
1. Contact administrator to reactivate account
2. Administrator should check user's active status in admin panel
3. Administrator can reactivate via Admin Panel → Edit User → Check "Active"

#### Access Denied - Admin Panel
**Symptoms:** "Access denied. Admin privileges required" message
**Causes:**
- User account lacks administrative privileges
- Role assignment issue

**Resolution Steps:**
1. Verify user has admin privileges
2. Contact existing administrator to grant admin access
3. Administrator can update via Admin Panel → Edit User → Check "Admin"

### Application Issues

#### Page Not Loading
**Symptoms:** Blank screen or loading indefinitely
**Causes:**
- Network connectivity issues
- ServiceNow instance problems
- Browser compatibility

**Resolution Steps:**
1. Check network connection
2. Try refreshing the page (Ctrl+F5)
3. Clear browser cache and cookies
4. Try different browser or incognito mode
5. Check ServiceNow instance status
6. Contact ServiceNow administrator

#### Color Functions Not Working
**Symptoms:** Buttons don't change circle color
**Causes:**
- JavaScript errors
- Browser compatibility
- Network API issues

**Resolution Steps:**
1. Open browser developer tools (F12)
2. Check console for JavaScript errors
3. Refresh the page
4. Try different browser
5. Check network connectivity
6. Report to technical support with console errors

#### User Management Functions Failing
**Symptoms:** Create/Edit/Delete operations fail
**Causes:**
- Insufficient permissions
- API connectivity issues
- Data validation errors

**Resolution Steps:**
1. Verify admin privileges
2. Check browser console for errors
3. Validate input data format
4. Try refreshing the page
5. Check ServiceNow instance performance
6. Contact technical support with error details

### Password Reset Procedures

#### Admin-Initiated Password Reset
1. Admin logs into admin panel
2. Locates user record in users table
3. Clicks "Edit" next to the user
4. Updates password field with new value
5. Clicks "Update User"
6. Informs user of new password via secure channel

#### Self-Service Password Reset (Future Enhancement)
*Note: Currently not implemented - requires administrator assistance*

### Data Recovery

#### Lost Admin Access
**Emergency Procedure:**
1. Access ServiceNow instance as system administrator
2. Navigate to User Credentials table directly
3. URL: `https://[instance].service-now.com/x_snc_color_contro_user_credentials_list.do`
4. Edit admin user record to reset password
5. Ensure `is_admin` field is set to `true`

#### User Data Corruption
1. Check user record in backend table
2. Verify data integrity in all fields
3. Restore from backup if available
4. Recreate user account if necessary

---

## Development & Maintenance

### GitHub Integration
The application source code is synchronized with GitHub for version control and code review:

- **Repository Structure:** Standard ServiceNow SDK project layout
- **Branching Strategy:** Main branch for production, feature branches for development
- **Code Review Process:** All changes require pull request review
- **Deployment:** Changes pushed to ServiceNow instance after GitHub approval

### Build and Deployment Process
```bash
# Build application
npm run build

# Deploy to instance
npm run deploy

# Install dependencies (after package.json changes)
npm install
```

### Monitoring and Maintenance

#### Regular Maintenance Tasks
- **Weekly:** Review user access logs
- **Monthly:** Clean up inactive user accounts
- **Quarterly:** Security audit and password policy review

#### Performance Monitoring
- Monitor application load times
- Check API response times
- Review error logs in ServiceNow

#### Security Maintenance
- Regular password policy enforcement
- Admin account audit
- Access control review

### Application Updates
1. **Development:** Make changes in GitHub repository
2. **Testing:** Deploy to development instance
3. **Review:** Code review process via GitHub pull requests
4. **Deployment:** Merge to main branch and deploy to production
5. **Documentation:** Update knowledge base articles

---

## Security Considerations

### Current Security Measures
- Username/password authentication
- Role-based access control (admin vs. regular users)
- Input validation on user management functions
- Session management via ServiceNow platform

### Security Limitations
⚠️ **Important:** Passwords are currently stored in plain text
⚠️ **Recommendation:** Implement password hashing in future versions

### Recommended Security Enhancements
1. **Password Hashing:** Implement bcrypt or similar hashing algorithm
2. **Password Complexity:** Enforce strong password requirements
3. **Account Lockout:** Implement failed login attempt limits
4. **Audit Logging:** Add comprehensive audit trail
5. **Two-Factor Authentication:** Consider MFA implementation
6. **Session Timeout:** Implement automatic logout

### Access Control Best Practices
- Regularly review admin user list
- Remove inactive user accounts promptly
- Use principle of least privilege
- Monitor access patterns for anomalies

---

## FAQ

### General Questions

**Q: Can I change my own password?**
A: Currently, password changes must be performed by an administrator through the admin panel.

**Q: How many users can the system support?**
A: The system can support hundreds of users, limited primarily by ServiceNow instance capacity.

**Q: Is the application mobile-friendly?**
A: Yes, the application is fully responsive and works on mobile devices.

### Technical Questions

**Q: Can I integrate this with LDAP/Active Directory?**
A: The current version uses custom authentication. LDAP integration would require development work.

**Q: How do I backup user data?**
A: User data is stored in ServiceNow tables and included in standard ServiceNow backups.

**Q: Can I customize the colors in the dashboard?**
A: Yes, colors can be modified in the source code (app.css and Dashboard.jsx files).

**Q: How do I add more function buttons?**
A: Additional buttons require code changes in the Dashboard.jsx component and corresponding CSS updates.

### Administrative Questions

**Q: How do I bulk import users?**
A: Use ServiceNow's standard import functionality on the User Credentials table.

**Q: Can I export user lists?**
A: Yes, use the standard ServiceNow export functionality from the User Credentials table list view.

**Q: How do I monitor user activity?**
A: Currently, activity monitoring would require custom development or ServiceNow platform audit logs.

---

## Support Information

### Getting Help
- **Level 1:** Check this documentation and FAQ
- **Level 2:** Contact ServiceNow administrator
- **Level 3:** Review source code in GitHub repository
- **Level 4:** Contact application development team

### Reporting Issues
When reporting issues, please include:
1. **Browser information** (type and version)
2. **Error messages** (exact text or screenshots)
3. **Steps to reproduce** the issue
4. **Console errors** (from browser developer tools)
5. **User account details** (username, role)

### Version Information
- **Current Version:** 1.0.0
- **ServiceNow Compatibility:** Latest versions
- **Browser Support:** Modern browsers (Chrome, Firefox, Safari, Edge)
- **Last Updated:** [Current Date]

---

*This documentation is maintained in the GitHub repository and synchronized with the ServiceNow Knowledge Base. For the most current version, refer to the GitHub repository.*