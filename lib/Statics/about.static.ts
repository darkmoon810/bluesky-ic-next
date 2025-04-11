export const aboutStatics = {
  hero: {
    title: "BlueSky Investment Counsel is a private wealth management company",
    description: "We believe that high-net-worth individuals and entrepreneurs deserve a level of service and expertise that goes beyond what traditional banks can offer."
  },
  profile: {
    name: "Jean-Pierre Berger, CIM",
    title: {
      main: "President",
      secondary: " & Portfolio Manager"
    },
    bio: [
      "Jean-Pierre (JP) is a Portfolio Manager and the founder of BlueSky Investment Counsel. His experience encompasses managing investment portfolios for high net worth clients including senior executives at large corporations, business owners and not-for-profit organizations.",
      "He holds a bachelor of Finance at Bishop's University in Quebec. Jean-Pierre has extensive knowledge in financial management. He has worked in various companies across diverse sectors in France and Canada. He is also a Chartered Investment Manager (CIM) with the Canadian Securities Institute.",
      "Jean-Pierre also worked as Investment Advisor and Portfolio Manager at a large bank-owned wealth management firm before founding BlueSky Investment Counsel. Above anything else, Jean-Pierre likes to get to know every client and work with them closely to meet their portfolio objectives."
    ],
    image: {
      src: "/founder.png",
      alt: "Jean-Pierre Berger"
    }
  },
  contact: {
    items: [
      {
        icon: "/building-05.svg",
        title: "Our Office",
        titleHighlight: "Office",
        content: "161 Bay St Toronto, Ontario, M5J 2S1 Canada"
      },
      {
        icon: "/phone.svg",
        title: "Call Us",
        titleHighlight: "Call",
        content: "416-930-5550"
      },
      {
        icon: "/mail-01.svg",
        title: "Email Us",
        titleHighlight: "Email",
        content: "contact@blueskyic.com"
      }
    ]
  },
  theme: {
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
    },
    spacing: {
      sectionPadding: "py-20"
    }
  }
}

export type AboutStatics = typeof aboutStatics