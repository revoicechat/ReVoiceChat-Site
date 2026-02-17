"use client";

const defaultTheme = {
  fontFamily: {
    heading: "Roboto",
    body: "Roboto",
  },
  borderRadius: "6px",
  colors: {
    background: ["#FFFFFF", "#09090B"],
    foreground: ["#09090B", "#FFFFFF"],
    primary: ["#2563EB", "#3B82F6"],
    "primary-foreground": ["#FFFFFF", "#FFFFFF"],
    secondary: ["#F4F4F5", "#27272A"],
    "secondary-foreground": ["#09090B", "#FFFFFF"],
    muted: ["#F4F4F5", "#27272A"],
    "muted-foreground": ["#71717A", "#A1A1AA"],
    accent: ["#F4F4F5", "#27272A"],
    "accent-foreground": ["#09090B", "#FFFFFF"],
    destructive: ["#EF4444", "#7F1D1D"],
    "destructive-foreground": ["#FFFFFF", "#FFFFFF"],
    border: ["#E4E4E7", "#27272A"],
    input: ["#E4E4E7", "#27272A"],
    ring: ["#2563EB", "#3B82F6"],
    card: ["#FFFFFF", "#09090B"],
    "card-foreground": ["#09090B", "#FFFFFF"],
    popover: ["#FFFFFF", "#09090B"],
    "popover-foreground": ["#09090B", "#FFFFFF"],
  },
};
const rvcBaseTheme = {
  fontFamily: {
    heading: "Roboto",
    body: "Roboto",
  },
  borderRadius: "6px",
  colors: {}
};
const rvcHexas:any = {
  white: "#FFFFFF",
  black: "#09090B",

  rvc_pink: "#EB6AFF",
  rvc_blue: "#03F1FF",
};
rvcHexas.light = {
    primary: rvcHexas.rvc_pink,
    secondary: "#F4F4F5",
};
rvcHexas.dark = {
  primary: rvcHexas.rvc_blue,
  secondary: "#27272A",
};
const rvcColors = {
  light: {
    background: rvcHexas.white,
    foreground: rvcHexas.black,
    primary: rvcHexas.light.primary,
    "primary-foreground": rvcHexas.black,
    secondary: rvcHexas.light.secondary,
    "secondary-foreground": rvcHexas.white,
    muted: rvcHexas.light.secondary,
    "muted-foreground": "#71717A",
    accent: rvcHexas.light.secondary,
    "accent-foreground": rvcHexas.black,
    destructive: "#EF4444",
    "destructive-foreground": rvcHexas.white,
    border: "#E4E4E7",
    input: "#E4E4E7",
    ring: rvcHexas.light.primary,
    card: rvcHexas.white,
    "card-foreground": rvcHexas.black,
    popover: rvcHexas.white,
    "popover-foreground": rvcHexas.black,
  },
  dark: {
    background: rvcHexas.black,
    foreground: rvcHexas.white,
    primary: rvcHexas.dark.primary,
    "primary-foreground": rvcHexas.black,
    secondary: rvcHexas.dark.secondary,
    "secondary-foreground": rvcHexas.white,
    muted: rvcHexas.dark.secondary,
    "muted-foreground": "#A1A1AA",
    accent: rvcHexas.dark.secondary,
    "accent-foreground": rvcHexas.white,
    destructive: "#7F1D1D",
    "destructive-foreground": rvcHexas.white,
    border: rvcHexas.dark.secondary,
    input: rvcHexas.dark.secondary,
    ring: rvcHexas.dark.primary,
    card: rvcHexas.black,
    "card-foreground": rvcHexas.white,
    popover: rvcHexas.black,
    "popover-foreground": rvcHexas.white,
  }
};
export const builderThemePresets:any = [];
if((typeof defaultTheme)!=='undefined') builderThemePresets.push({default:defaultTheme});
/* ---- Themes ---- */
  const rvcLightThemeColors:any = {},
    rvcDarkThemeColors:any = {},
    rvcAutoThemeColors:any = {};

  // Light theme
  Object.entries(rvcColors.light).forEach(([key,value])=>{
    if(rvcAutoThemeColors.hasOwnProperty(key)) rvcAutoThemeColors[key][0] = value;
    else rvcAutoThemeColors[key] = [value,value];
    rvcLightThemeColors[key] = [value,value];
  });
  const rvcLightTheme:any = {
    ...rvcBaseTheme,
    colors: rvcLightThemeColors//Object.fromEntries(Object.entries(rvcColors.light).map(([key,value])=>[key,[value,value]])),
  };
  builderThemePresets.push({revoicechat_light:rvcLightTheme});

  // Dark theme
  Object.entries(rvcColors.dark).forEach(([key,value])=>{
    if(rvcAutoThemeColors.hasOwnProperty(key)) rvcAutoThemeColors[key][1] = value;
    else rvcAutoThemeColors[key] = [value,value];
    rvcDarkThemeColors[key] = [value,value];
  });
  const rvcDarkTheme:any = {
    ...rvcBaseTheme,
    colors: rvcDarkThemeColors//Object.fromEntries(Object.entries(rvcColors.dark).map(([key,value])=>[key,[value,value]])),
  };
  builderThemePresets.push({revoicechat_dark:rvcDarkTheme});

  // Auto theme
  const rvcAutoTheme = {
    ...rvcBaseTheme,
    colors: rvcAutoThemeColors,
  };
  builderThemePresets.push({revoicechat:rvcAutoTheme});
/* ------ RL ------ */