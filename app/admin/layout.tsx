"use client"

import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { HomePanel } from "./components/HomePanel"
import { AboutPanel } from "./components/AboutPanel"
import InsightsManagement from "@/app/admin/insights/page"
import { ContactPanel } from "./components/ContactPanel"
import { ThemePanel } from "./components/ThemePanel"
import { FinancialPlanningPanel } from "./components/FinancialPlanningPanel"
import { WealthManagementPanel } from "./components/WealthManagementPanel"
import { SeminarPanel } from "./components/SeminarPanel"
import { CommonPanel } from "./components/CommonPanel"

interface AdminLayoutProps {
  children: React.ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  // Get the current tab from pathname or default to 'home'
  const currentTab = pathname.split('/admin/')[1] || 'home'

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

  const tabTriggerStyles = "w-full px-4 py-2 text-left justify-start data-[state=active]:bg-primary data-[state=active]:text-white transition-all hover:bg-gray-100 data-[state=active]:hover:bg-primary/90"

  return (
    <div className="flex h-screen bg-gray-100">
      <Tabs 
        defaultValue={currentTab} 
        orientation="vertical" 
        className="flex w-full"
      >
        <TabsList className="w-64 bg-white shadow-lg flex flex-col justify-start h-full space-y-2 p-4">
          <TabsTrigger value="home" className={tabTriggerStyles}>Home</TabsTrigger>
          <TabsTrigger value="about" className={tabTriggerStyles}>About</TabsTrigger>
          <TabsTrigger value="financial-planning" className={tabTriggerStyles}>Financial Planning</TabsTrigger>
          <TabsTrigger value="wealth-management" className={tabTriggerStyles}>Wealth Management</TabsTrigger>
          <TabsTrigger value="contact" className={tabTriggerStyles}>Contact Form</TabsTrigger>
          <TabsTrigger value="seminar" className={tabTriggerStyles}>Seminar Registration</TabsTrigger>
          <TabsTrigger value="insights" className={tabTriggerStyles}>Insights</TabsTrigger>
          <TabsTrigger value="common" className={tabTriggerStyles}>Common</TabsTrigger>
          <TabsTrigger value="theme" className={tabTriggerStyles}>Theme</TabsTrigger>
        </TabsList>

        <div className="flex-1 p-8 overflow-auto">
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
            <InsightsManagement />
          </TabsContent>
          <TabsContent value="common">
            <CommonPanel />
          </TabsContent>
          <TabsContent value="theme">
            <ThemePanel />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}