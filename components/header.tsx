"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 py-4 md:flex md:items-center md:justify-between">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-gray-800">
            Financial Services
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } mt-4 flex-col space-y-2 md:mt-0 md:flex md:flex-row md:items-center md:space-x-6 md:space-y-0`}
        >
          <Link href="/" className="text-gray-600 transition-colors hover:text-gray-900">
            Home
          </Link>
          <Link href="/about" className="text-gray-600 transition-colors hover:text-gray-900">
            About
          </Link>
          <Link href="/services" className="text-gray-600 transition-colors hover:text-gray-900">
            Services
          </Link>
          <Link href="/insights" className="text-gray-600 transition-colors hover:text-gray-900">
            Insights
          </Link>
          <Link href="/contact" className="text-gray-600 transition-colors hover:text-gray-900">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
