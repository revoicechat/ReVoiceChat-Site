import type { Metadata } from "next";
import "./public.css";

export const metadata: Metadata = {
  title: process?.env?.RL_SITE_TITLE ?? "ReVoiceChat",
  description: process?.env?.RLL_SITE_DESCRIPTION ?? "ReVoiceChat",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
