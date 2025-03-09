# React + Vite Authentication App

A modern, responsive authentication application built with React, Vite, and Firebase. Features include:

- User authentication (Email/Password and Google Sign-in)
- Dark mode UI
- Mobile responsive design
- Protected routes
- Modern UI with Tailwind CSS

## Setup

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)

   - Enable Authentication
   - Add Email/Password and Google sign-in methods

4. Create a `.env` file in the root directory and add your Firebase configuration:

   ```
   VITE_FIREBASE_API_KEY=your-api-key
   VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
   VITE_FIREBASE_PROJECT_ID=your-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
   VITE_FIREBASE_APP_ID=your-app-id
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

## Features

- **Authentication:**

  - Email/Password sign up and login
  - Google sign-in integration
  - Protected routes
  - Persistent authentication state

- **UI/UX:**
  - Dark mode design
  - Mobile responsive layout
  - Loading states
  - Toast notifications
  - Clean and modern interface

## Technologies Used

- React
- Vite
- TypeScript
- Tailwind CSS
- Firebase Authentication
- React Router DOM
- React Hot Toast
- React Icons

## License

MIT
