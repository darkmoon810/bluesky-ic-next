"use client"

import { useRouter } from "next/navigation"

const dashboards = [
  { title: "Insights", description: "Manage blog posts and articles", link: "/admin/insights" },
  { title: "About", description: "Manage about page content", link: "/admin/about" },
  { title: "Financial Planning", description: "Manage financial planning content", link: "/admin/financial-planning" },
  { title: "Wealth Management", description: "Manage wealth management content", link: "/admin/wealth-management" },
  { title: "Contact Form", description: "Manage contact form submissions", link: "/admin/contact" },
  { title: "Seminar Registration", description: "Manage seminar registrations", link: "/admin/seminar" },
  { title: "Common", description: "Manage common settings", link: "/admin/common" },
  { title: "Theme", description: "Manage theme settings", link: "/admin/theme" },
]

export default function AdminPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <p className="text-gray-600">Welcome to BlueSky Investment Counsel admin panel</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* <DashboardCard 
          title="Insights" 
          description="Manage blog posts and articles"
          link="/admin/insights"
        />
        <DashboardCard 
          title="About" 
          description="Manage about page content"
          link="/admin/about"
        /> */}
        {dashboards.map((dashboard, index) => (
          <DashboardCard 
            key={index}
            title={dashboard.title} 
            description={dashboard.description} 
            link={dashboard.link} 
          />
        ))}
      </div>
    </div>
  )
}

function DashboardCard({ title, description, link }: { 
  title: string
  description: string
  link: string 
}) {
  const router = useRouter()

  return (
    <div 
      className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
      onClick={() => router.push(link)}
    >
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}