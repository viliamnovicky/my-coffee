import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.mycoffee.app',
  appName: 'My Coffee',
  webDir: 'public',
  server: {
    url: 'https://my-coffee-nine.vercel.app',
  },
  android: {
    // Prevents Google OAuth from blocking the WebView
    overrideUserAgent:
      'Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36',
  },
};

export default config;