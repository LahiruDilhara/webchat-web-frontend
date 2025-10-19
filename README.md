# WebChat Frontend

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-14.0-blue)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3-blue)](https://reactjs.org/)
[![Docker](https://img.shields.io/badge/Docker-Available-blue)](https://hub.docker.com/)

**WebChat Frontend** is a modern, responsive web interface for the **WebChat backend**, built with **Next.js**. It provides a secure, real-time messaging experience that leverages the custom WebSocket library from the backend to **reduce network bandwidth** and ensure **instant communication**.

**Demo:** [https://webchat.demo.lahirudilhara.me/](https://webchat.demo.lahirudilhara.me/)

---

## Features

- **Real-time Messaging**  
  WebSocket-based messaging with a custom, efficient protocol that reduces bandwidth usage.

- **Unread Message Indicators**  
  Keep track of unread messages for each room.

- **Room Notifications**  
  Notifies users when someone leaves or joins a room.

- **Device Connection Alerts**  
  Alerts users when a new device logs in to their account.

- **Built-in Validation**  
  All user actions are validated before sending requests to the backend for **zero-trust security** compliance.

- **Mobile Responsive**  
  Optimized for both desktop and mobile browsers.

- **Docker Support**  
  Can be run in a container for easy deployment.

---

## Architecture Overview

1. **Next.js Frontend**  
   - React-based SPA for dynamic real-time updates.  
   - Supports server-side rendering for faster initial load and SEO.  

2. **WebSocket Integration**  
   - Utilizes the backend's custom WebSocket library.  
   - Ensures low-latency, high-efficiency messaging with minimal bandwidth.  

3. **Zero-Trust Compliance**  
   - Validates every user action before sending requests.  
   - Works seamlessly with backend JWT authentication.  

4. **State Management**  
   - Uses Redux for global state management and reduce the network bandwidth.
   - Handles room state, unread messages, and notifications efficiently.  
   - Tracks active sessions for multiple devices.

---

## Installation & Setup

### Prerequisites

- Node.js >= 20
- Yarn or npm
- Docker (optional)
- WebChat backend running and accessible

### Steps

1. Clone the repository:

```bash
git clone https://github.com/yourusername/webchat-frontend.git
cd webchat-frontend
```