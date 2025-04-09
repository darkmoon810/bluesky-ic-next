"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import HomeAdmin from "./sections/home-admin"
import AboutAdmin from "./sections/about-admin"
import InsightsAdmin from "./sections/insights-admin"
import SeminarAdmin from "./sections/seminar-admin"
import WealthManagementAdmin from "./sections/wealth-management-admin"
import FinancialPlanningAdmin from "./sections/financial-planning-admin"

const tabs = [
  { id: "home", label: "Home", icon: "🏠" },
  { id: "about", label: "About", icon: "ℹ️" },
  { id: "wealth", label: "Wealth Management", icon: "📈" },
  { id: "financial", label: "Financial Planning", icon: "💵" },
  { id: "insight", label: "Insight", icon: "📊" },
  { id: "seminar", label: "Seminar", icon: "📅" },
] as const

export default function AdminDashboard() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<string>("home")

  useEffect(() => {
    // Check authentication on component mount
    const isAuthenticated = localStorage.getItem("isAuthenticated")
    if (!isAuthenticated) {
      router.push("/admin/signin")
    }
  }, [router])

  const handleSignOut = () => {
    localStorage.removeItem("isAuthenticated")
    router.push("/admin/signin")
  }

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <HomeAdmin />
      case "about":
        return <AboutAdmin />
      case "wealth":
        return <WealthManagementAdmin />
      case "financial":
        return <FinancialPlanningAdmin />
      case "insight":
        return <InsightsAdmin />
      case "seminar":
        return <SeminarAdmin />
      default:
        return null
    }
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm">
        <div className="p-6">
          <h1 className="text-2xl font-serif text-gray-900">Admin Panel</h1>
        </div>
        <nav className="space-y-1">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "default" : "ghost"}
              className={`w-full justify-start px-6 py-3 ${
                activeTab === tab.id
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="mr-3">{tab.icon}</span>
              {tab.label}
            </Button>
          ))}
          <Button
            variant="ghost"
            className="w-full justify-start px-6 py-3 text-red-600 hover:bg-red-50 hover:text-red-700"
            onClick={handleSignOut}
          >
            <span className="mr-3">🚪</span>
            Sign Out
          </Button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {renderContent()}
      </div>
    </div>
  )
}