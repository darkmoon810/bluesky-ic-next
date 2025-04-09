"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ChevronDownIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from './ui/navigation-menu';

// Navigation items configuration
const navItems = [
  { name: "Home", path: "/", hasDropdown: false },
  { name: "About", path: "/about", hasDropdown: false },
  {
    name: "Services",
    id: "services", // Add this identifier
    hasDropdown: true,
    dropdownItems: [
      { name: "Financial Planning", path: "/financial-planning" },
      { name: "Wealth Management", path: "/wealth-management" }
    ]
  },
  { name: "Contact", path: "/contact", hasDropdown: false },
  { name: "Insights", path: "/insight", hasDropdown: false },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <motion.div>
      <div className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
        <header className="relative w-full h-20">
          <div className="flex h-20 items-center justify-center relative bg-transparent">
            <div className="flex items-center justify-between max-w-screen-xl px-4 md:px-8 py-0 relative w-full">
              {/* Logo */}
              <Link href="/" className="relative w-[156.97px] h-10">
                <img
                  className="absolute w-[39px] h-10 top-0 left-0"
                  alt="Frame"
                  src="/frame-1.svg"
                />
                <div className="absolute w-[100px] h-9 top-[3px] left-[49px]">
                  <div className="absolute top-0 left-0 [font-family:'DM_Serif_Text',Helvetica] font-normal text-[#00359e] text-[28px] text-center tracking-[0] leading-7 whitespace-nowrap">
                    BlueSky
                  </div>
                  <div className="absolute top-[25px] left-0 [font-family:'Inter',Helvetica] font-medium text-[#00359e] text-[9px] text-center tracking-[-0.18px] leading-[normal]">
                    Investment Counsel
                  </div>
                </div>
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu className="h-6 w-6 text-[#475467]" />
              </button>

              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <NavigationMenu>
                  <NavigationMenuList className="flex items-center gap-8">
                    {navItems.map((item, index) => (
                      <NavigationMenuItem key={index} className="relative" id={item.name}>
                        {item.hasDropdown ? (
                          <div className={`relative ${item.id === 'services' ? 'group' : ''}`}>
                            <button
                              className={`inline-flex items-center gap-1 px-3 py-2 text-[#475467] hover:text-[#00359e] transition-colors
                                ${location.pathname.includes(item.name.toLowerCase()) ? 'text-[#00359e]' : ''}`}
                            >
                              {item.name}
                              <ChevronDownIcon className={`h-5 w-5 transition-transform ${item.id === 'services' ? 'group-hover:rotate-180' : ''}`} />
                            </button>
                            {/* Show dropdown only for Services menu */}
                            {item.id === 'services' && item.dropdownItems && (
                              <div
                                className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg opacity-0 invisible 
                                  group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50
                                  before:content-[''] before:absolute before:top-[-8px] before:left-0 before:w-full before:h-[8px]"
                              >
                                {item.dropdownItems.map((dropItem, idx) => (
                                  <Link
                                    key={idx}
                                    href={dropItem.path}
                                    className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors first:rounded-t-md last:rounded-b-md
                                      ${location.pathname === dropItem.path ? 'bg-gray-50 text-[#00359e]' : ''}`}
                                  >
                                    {dropItem.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <Link
                            href={item.path || "/"}
                            className={`px-3 py-2 text-[#475467] hover:text-[#00359e] transition-colors ${location.pathname === item.path ? 'text-[#00359e]' : ''}`}
                          >
                            {item.name}
                          </Link>
                        )}
                      </NavigationMenuItem>
                    ))}
                    <NavigationMenuItem>
                      <Button className="bg-[#00359e] text-white rounded-lg hover:bg-[#002a7a] transition-colors" onClick={() => { window.location.href = "https://f-engine.ndexsystems.com/fengine/fullservice/en/blueskyinvestmentlogin.go" }}>
                        Client Login
                      </Button>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-lg z-50">
              <div className="flex flex-col p-4 space-y-2">
                {navItems.map((item, index) => (
                  <div key={index} className="w-full">
                    {item.hasDropdown ? (
                      <div className="space-y-2">
                        <button
                          className="flex items-center justify-between w-full px-3 py-2 text-[#475467] hover:text-[#00359e] transition-colors"
                        >
                          {item.name}
                          <ChevronDownIcon className="h-5 w-5 ml-2" />
                        </button>
                        <div className="pl-4 space-y-2">
                          {item.dropdownItems?.map((dropItem, idx) => (
                            <Link
                              key={idx}
                              href={dropItem.path}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`block px-3 py-2 text-sm text-gray-700 hover:text-[#00359e] transition-colors
                                ${location.pathname === dropItem.path ? 'text-[#00359e]' : ''}`}
                            >
                              {dropItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.path || "/"}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block px-3 py-2 text-[#475467] hover:text-[#00359e] transition-colors
                          ${location.pathname === item.path ? 'text-[#00359e]' : ''}`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <Button className="w-full bg-[#00359e] text-white rounded-lg hover:bg-[#002a7a] transition-colors mt-4">
                  Client Login
                </Button>
              </div>
            </div>
          )}
        </header>
      </div>
    </motion.div>
  )
}
