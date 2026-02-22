// app/manifest.ts
export default function manifest() {
    return {
      name: process?.env?.RL_SITE_TITLE ?? 'ReVoiceChat',
      short_name: process?.env?.RL_SITE_NAME ?? 'ReVoiceChat',
      description: process?.env?.RL_SITE_DESCRIPTION ?? 'ReVoiceChat',
      start_url: '/',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#000000',
      icons: [
        {
          src: '/icon.png', // Référence le fichier app/icon.png
          sizes: '92x92',
          type: 'image/png',
        },
        {
          src: '/favicon.ico', // Référence le fichier app/favicon.ico
          sizes: 'any',
          type: 'image/x-icon',
        },
      ],
    }
  }