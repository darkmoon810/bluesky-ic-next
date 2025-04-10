export const homeStatics = {
  hero: {
    title: "Your financial future deserves more than a bank",
    description: "We believes that high-net-worth individuals and entrepreneurs deserve a level of service and expertise that goes beyond what traditional banks can offer."
  },
  articles: {
    title: {
      main: "Latest ",
      highlight: "news & articles"
    },
    subtitle: "The latest news and resources from the expert",
    viewAllButton: {
      text: "View all",
      link: "/insights"
    },
    posts: [
      {
        id: 1,
        image: "/image-3-1.png",
        title: "Why a Balanced Portfolio Strategy in the current economic environment is no longer appropriate?",
        content: "In the past a balanced portfolio typically meant to have roughly half of your holdings to be equity (stocks) and the other half to be fixed income (bonds). Some people use a 60/40 weighting, respectively.",
        link: "https://blueskyic.com/why-a-balanced-portfolio-strategy-in-the-current-economic-environment-is-no-longer-appropriate/",
        isExternal: true
      },
      {
        id: 2,
        image: "/image-3-2.png",
        title: "Risk Management in Today's Market",
        content: "Understanding and managing risk is crucial in today's volatile market environment. Learn about our approach to protecting and growing your wealth.",
        link: "/insights/risk-management",
        isExternal: false
      },
      {
        id: 3,
        image: "/image-3-3.png",
        title: "Wealth Preservation Strategies",
        content: "Discover how we help high-net-worth individuals preserve and grow their wealth through sophisticated investment strategies.",
        link: "/insights/wealth-preservation",
        isExternal: false
      }
    ]
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
  }
}

export type HomeStatics = typeof homeStatics