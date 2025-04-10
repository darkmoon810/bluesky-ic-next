export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          name: string
          title: string
          bio: string[]
          image_url: string
        }
        Insert: {
          id?: string
          name: string
          title: string
          bio: string[]
          image_url: string
        }
      }
      contact_info: {
        Row: {
          id: string
          title: string
          content: string
          icon: string
        }
        Insert: {
          id?: string
          title: string
          content: string
          icon: string
        }
      }
      insights: {
        Row: {
          id: string
          title: string
          content: string
          category: string
          date: string
        }
        Insert: {
          id?: string
          title: string
          content: string
          category: string
          date?: string
        }
      }
    }
  }
}