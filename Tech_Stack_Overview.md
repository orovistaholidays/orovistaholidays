# Orovista Holidays - Technical Infrastructure Overview

This document outlines the core technologies and third-party services utilized in the development and deployment of the **Orovista Holidays** platform. Each service has been carefully selected to ensure high performance, security, and scalability for the application.

---

### 1. Vercel (Hosting & Deployment)
**Purpose:** Cloud Deployment Platform
- **Why we used it:** Vercel is the industry-standard hosting provider for Next.js applications. It provides seamless, automated deployments directly from our codebase. It ensures the website loads blazingly fast worldwide using its global Content Delivery Network (CDN) and offers automatic SSL certificates for security (HTTPS).

### 2. MongoDB Atlas (Database)
**Purpose:** Primary Database Management
- **Why we used it:** MongoDB Atlas is a highly secure, cloud-based NoSQL database. We used it to store all dynamic content for the website, including travel packages, blog posts, gallery items, and admin user credentials. It allows the website to handle large amounts of data efficiently and scales automatically as traffic grows.

### 3. Cloudinary (Media Storage)
**Purpose:** Image and Video Management
- **Why we used it:** High-quality travel images and videos can slow down a website significantly. Cloudinary acts as a dedicated media server that stores, optimizes, and delivers images/videos in the most efficient format based on the user's device. This ensures the website remains visually stunning without compromising on loading speed.

### 4. Brevo (Email Communication)
**Purpose:** SMTP & Email Integration
- **Why we used it:** Brevo (formerly Sendinblue) provides reliable email delivery infrastructure. We integrated its API to handle the "Get Called" contact forms. When a user submits their phone number on the website, Brevo ensures that the notification email is securely and instantly delivered to the admin's inbox without ending up in the spam folder.

### 5. GitHub (Version Control)
**Purpose:** Code Repository & Collaboration
- **Why we used it:** GitHub is used to securely store the source code of the website. It tracks every change made during development, allowing developers to collaborate, manage updates safely, and easily roll back to previous versions if needed. It also connects directly to Vercel for automated deployments whenever new code is pushed.

### 6. Hostinger (Domain Management)
**Purpose:** Domain Registrar & DNS Hosting
- **Why we used it:** Hostinger is used to manage the primary domain name (`orovistaholidays.com`). We utilize Hostinger's DNS management to point the domain to our Vercel servers, ensuring that when users type the website URL, they are correctly and securely routed to the live application.

---

**Summary:**
By combining these modern, cloud-native services, the Orovista Holidays platform benefits from a robust architecture that guarantees 99.9% uptime, enterprise-grade security, and an exceptionally fast user experience.
