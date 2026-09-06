# QuickEMS — Employee Management System - By Anil Sawant

A full-stack Employee Management System built with the MERN stack that helps organizations manage employees, attendance, leave applications, and payroll through dedicated Admin and Employee portals.

## ✨ Features

### 🔐 Authentication & Authorization
- JWT-based authentication
- Role-based access control
- Separate Admin and Employee portals
- Protected routes
- Password hashing using bcrypt
- Change password functionality
- Session validation

### 👨‍💼 Admin Portal
- Admin dashboard
- Employee management
- Search and filter employees
- Add employees and create employee accounts
- Department management
- Employee profile management
- Soft-delete employees
- View and manage leave applications
- Approve/reject leave requests
- Generate monthly payslips
- Download payslips
- Admin profile and settings

### 👨‍💻 Employee Portal
- Personalized employee dashboard
- Clock in / Clock out
- Attendance history
- Working-hour tracking
- Late arrival detection
- Leave application
- Leave history and status
- Sick, Casual and Annual leave
- Payslip history
- Payslip downloads
- Profile management
- Password management

## ⏰ Attendance Management

The attendance module allows employees to clock in and clock out while automatically calculating their working hours.

### Attendance Rules

| Working Hours | Day Type |
|---|---|
| 2 hours | Short Day |
| 4 hours | Half Day |
| 6 hours | Three Quarter Day |
| 8 hours | Full Day |

Employees checking in after **9:00 AM** are marked as late.

The system also handles forgotten check-outs through automated background processing.

## 🤖 Inngest Automation

QuickEMS uses **Inngest** for background and scheduled workflows.

### Automatic Check-Out

When an employee checks in, an Inngest workflow is triggered.

- Waits for 9 hours
- Checks whether the employee has checked out
- Sends a checkout reminder if they haven't
- Waits another hour
- If the employee still hasn't checked out, the system automatically records a checkout
- Attendance is then recorded as 4 working hours / Half Day / LATE

### Daily Attendance Reminder

A scheduled Inngest job runs every day at **11:30 AM IST**.

It identifies active employees who:

- Have not marked attendance
- Are not on approved leave

Those employees receive an automated attendance reminder email.

### Pending Leave Reminder

When an employee submits a leave request, an Inngest workflow waits for 24 hours.

If the request is still pending, an automated reminder is sent to the administrator.

## 📧 Email Notifications

Email notifications are implemented using **Nodemailer with Brevo SMTP**.

Automated emails are used for:

- Missing attendance reminders
- Check-out reminders
- Pending leave application reminders

## 📝 Leave Management

Employees can submit leave applications by selecting:

- Sick Leave
- Casual Leave
- Annual Leave

Each request contains:

- Leave type
- Start date
- End date
- Reason
- Application status

Administrators can review applications and either approve or reject them.

### Leave Workflow

Employee submits request
→ Pending
→ Admin reviews
→ Approved / Rejected

If an application remains pending for 24 hours, Inngest automatically reminds the administrator.

## 💰 Payroll & Payslips

Administrators can generate monthly payslips by entering:

- Employee
- Month
- Year
- Basic salary
- Allowances
- Deductions

The system calculates the net salary and generates a downloadable PDF payslip.

Employees can view their payslip history and download their payslips from the Employee Portal.

## 🛡️ Security

- JWT authentication
- Protected API routes
- Role-based authorization
- bcrypt password hashing
- Environment variables for sensitive credentials
- CORS configuration
- Authentication middleware

## 🏗️ Architecture

```text
                         QuickEMS
                            │
              ┌─────────────┴─────────────┐
              │                           │
        Admin Portal               Employee Portal
              │                           │
              └─────────────┬─────────────┘
                            │
                       REST API
                            │
                    Node.js + Express
                            │
             ┌──────────────┼──────────────┐
             │              │              │
          MongoDB          JWT          Inngest
          Atlas            Auth        Automation
                                           │
                                      Nodemailer
                                           │
                                      Brevo SMTP