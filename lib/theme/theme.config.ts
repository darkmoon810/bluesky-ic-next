export const themeConfig = {
  colors: {
    primary: "#00359e",
    secondary: "#101828",
    text: "#475467",
    background: "#ffffff",
    backgroundAccent: "#f5f8ff"
  },
  fonts: {
    serif: "DM_Serif_Text,Helvetica",
    sans: "Inter,sans-serif"
  }
} as const

export type ThemeConfig = typeof themeConfig