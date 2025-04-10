"use client"

import { useRouter } from "next/navigation"

export default function AdminPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <p className="text-gray-600">Welcome to BlueSky Investment Counsel admin panel</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <DashboardCard 
          title="Insights" 
          description="Manage blog posts and articles"
          link="/admin/insights"
        />
        <DashboardCard 
          title="About" 
          description="Manage about page content"
          link="/admin/about"
        />
        {/* Add more cards for other sections */}
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