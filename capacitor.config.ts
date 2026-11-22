import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.mycoffee.app', // Keep whatever you entered during npx cap init
  appName: 'My Coffee',
  webDir: 'public', // Uses Next.js's existing public folder so you don't need a static build
  server: {
    url: 'http://192.168.178.27:3000', // <-- Replace with YOUR computer's IP
    cleartext: true // Allows HTTP on Android
  }
};

export default config;
