export interface InsightPost {
  id: string
  title: string
  content: string
  image_url: string
  category: string
  is_external: boolean
  link: string
  created_at: string
  updated_at: string
}

export interface Category {
  id: string
  name: string
  slug: string
}

export interface ThemeSettings {
  colors: {
    primary: string
    secondary: string
    text: string
    background: string
    backgroundAccent: string
  }
  fonts: {
    serif: string
    sans: string
  }
  spacing: {
    sectionPadding: string
  }
}