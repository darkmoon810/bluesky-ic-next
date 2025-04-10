"use client"

import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { AboutPanel } from "./components/AboutPanel"
import { HomePanel } from "./components/HomePanel"
import { InsightsPanel } from "./components/InsightsPanel"
import { ThemePanel } from "./components/ThemePanel"
import { ContactPanel } from "./components/ContactPanel"
import { SeminarPanel } from "./components/SeminarPanel"
import { CommonPanel } from "./components/CommonPanel"
import { FinancialPlanningPanel } from "./components/FinancialPlanningPanel"
import { WealthManagementPanel } from "./components/WealthManagementPanel"

interface AdminLayoutProps {
  children: React.ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const auth = sessionStorage.getItem("adminAuth")
    if (!auth && pathname !== "/admin/login") {
      router.push("/admin/login")
    } else {
      setIsAuthenticated(true)
    }
  }, [router, pathname])

  if (pathname === "/admin/login") {
    return children
  }

  if (!isAuthenticated) {
    return null
  }

  const tabStyle = "w-full pl-8 justify-start data-[state=active]:bg-[#00359e] data-[state=active]:text-white transition-colors"

  return (
    <div className="flex h-screen bg-gray-100">
      <Tabs defaultValue="home" orientation="vertical" className="flex w-full">
        <TabsList className="w-64 bg-white shadow-lg flex flex-col h-full justify-start space-y-2 p-4">
          <TabsTrigger value="home" className={tabStyle}>Home</TabsTrigger>
          <TabsTrigger value="about" className={tabStyle}>About</TabsTrigger>
          <TabsTrigger value="financial-planning" className={tabStyle}>Financial Planning</TabsTrigger>
          <TabsTrigger value="wealth-management" className={tabStyle}>Wealth Management</TabsTrigger>
          <TabsTrigger value="contact" className={tabStyle}>Contact Form</TabsTrigger>
          <TabsTrigger value="seminar" className={tabStyle}>Seminar Registration</TabsTrigger>
          <TabsTrigger value="insights" className={tabStyle}>Insights</TabsTrigger>
          <TabsTrigger value="common" className={tabStyle}>Common</TabsTrigger>
          <TabsTrigger value="theme" className={tabStyle}>Theme</TabsTrigger>
        </TabsList>

        <main className="flex-1 p-8 overflow-auto">
          <TabsContent value="home">
            <HomePanel />
          </TabsContent>
          <TabsContent value="about">
            <AboutPanel />
          </TabsContent>
          <TabsContent value="financial-planning">
            <FinancialPlanningPanel />
          </TabsContent>
          <TabsContent value="wealth-management">
            <WealthManagementPanel />
          </TabsContent>
          <TabsContent value="contact">
            <ContactPanel />
          </TabsContent>
          <TabsContent value="seminar">
            <SeminarPanel />
          </TabsContent>
          <TabsContent value="insights">
            <InsightsPanel />
          </TabsContent>
          <TabsContent value="common">
            <CommonPanel />
          </TabsContent>
          <TabsContent value="theme">
            <ThemePanel />
          </TabsContent>
        </main>
      </Tabs>
    </div>
  )
}