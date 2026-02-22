import { registerChaiGlobalDataProvider } from "@chaibuilder/next/runtime";

/**
 * Global data provider for the application.
 * This data is availble to all pages as {{global.xxxx}} data binding
 * @returns Global data object
 */
const globalDataProvider = async () => {
  return {
    name: process?.env?.RL_SITE_NAME ?? "ReVoiceChat",
    title: process?.env?.RL_SITE_TITLE ?? "ReVoiceChat",
    description: process?.env?.RL_SITE_TITLE ?? "ReVoiceChat",
    logo: process?.env?.RL_SITE_LOGO ?? "/favicon.ico",
  };
};

registerChaiGlobalDataProvider(globalDataProvider);
