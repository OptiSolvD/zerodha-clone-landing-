# 📈 Zerodha Clone - Landing Page

A modern landing page inspired by Zerodha, built using React. This repository contains the public-facing website that introduces the platform and provides navigation to the trading dashboard.

## 🌐 Live Demo

| Deployment | Link |
|---|---|
| **Vercel** | https://zerodha-clone-landing-c3vz.vercel.app/ |
| **AWS EC2 (public DNS, HTTP)** | `http://ec2-13-60-236-98.eu-north-1.compute.amazonaws.com/` |

## ✨ Features

* Modern UI
* Product overview sections
* Pricing and platform information
* Navigation to authentication and dashboard modules
* Clean component-based React architecture
* Automated deployment to AWS EC2 using GitHub Actions

## 🛠️ Tech Stack

* React.js
* JavaScript
* CSS
* AWS EC2
* GitHub Actions (CI/CD)
* Linux

## ☁️ Deployment on AWS EC2

The landing page (along with the backend) is deployed on an **Amazon EC2 instance** and is publicly accessible through the **EC2 public DNS**, which is exposed so the application can be reached externally.

```text
GitHub → GitHub Actions → AWS EC2 → Live Application
```

* Pushing changes to the `main` branch automatically triggers a **GitHub Actions** workflow that deploys the update to the EC2 instance.
* The deployment was tested by making changes to `main` and verifying that they were reflected on the live EC2 deployment.
* The EC2 public DNS is made accessible by configuring the required ports and server/network settings (security group rules) on the instance.
* Only the **landing page and backend** use automated deployment. Because of the memory limits of the free-tier EC2 instance, the dashboard is not part of the automated EC2 workflow.

### 🔓 Why HTTP and not HTTPS?

The EC2 deployment is currently served over **HTTP**, not HTTPS. This is because I **do not currently have a TLS/SSL certificate** configured for the deployment. Because of this, browsers may show a "Not secure" warning for the EC2 URL, and sensitive data such as passwords should not be entered on it.

HTTPS support is a planned improvement: it requires a domain name and a TLS certificate (for example from Let's Encrypt) configured on the server. The Vercel deployment above is served over HTTPS.

## 🔗 Related Repositories

* Dashboard Repository: https://github.com/OptiSolvD/zerodha-clone-dashboard-
* Backend Repository: https://github.com/OptiSolvD/zerodha-clone-backend-

## 🖼️ Screenshots

### Home Page

<img width="1857" height="878" alt="Home Page" src="https://github.com/user-attachments/assets/707f33c8-4685-48b3-ae18-00d45a1c6041" />

### Product Section

<img width="1842" height="890" alt="Product Section" src="https://github.com/user-attachments/assets/5b43d805-5d5a-4517-828f-a80c4dfa5ee7" />

## ⚙️ Installation

```bash
git clone https://github.com/OptiSolvD/zerodha-clone-landing-.git
cd zerodha-clone-landing-
npm install
npm start
```

## 👤 Author

**Raj Kaushik**
