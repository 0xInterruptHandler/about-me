"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Github } from "lucide-react"
import Link from "next/link"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1e1e2e]/90 backdrop-blur-md border-b border-[#45475a]">
      <div className="max-w-3xl mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-lg font-bold text-[#cdd6f4]">0xInterruptHandler</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* <Link href="/playground" className="text-[#a6adc8] hover:text-[#cba6f7] transition-colors">Playground</Link> */}
            {/* <Link href="/works" className="text-[#a6adc8] hover:text-[#cba6f7] transition-colors">Works</Link> */}
            <Link href="/posts" className="text-[#a6adc8] hover:text-[#cba6f7] transition-colors">Posts</Link>
            <Link href="/uses" className="text-[#a6adc8] hover:text-[#cba6f7] transition-colors">Uses</Link>
            <Link
              href="https://github.com/0xInterruptHandler"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Button variant="ghost" size="icon" className="text-[#a6adc8] hover:text-[#cba6f7] hover:bg-[#313244]">
                <Github className="h-4 w-4" />
              </Button>
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-5">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#a6adc8] hover:text-[#cba6f7] hover:bg-[#313244]"
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu con animación */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-200 ease-out ${
            isMenuOpen
              ? "max-h-40 opacity-100 scale-100"
              : "max-h-0 opacity-0 scale-95"
          } origin-top`}
        >
          <div className="py-4 border-t border-[#45475a]">
            <div className="flex flex-col space-y-4 px-4">
              {/* <Link
                href="/works"
                className="text-[#a6adc8] hover:text-[#cba6f7] transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Works
              </Link> */}
              <Link
                href="/posts"
                className="text-[#a6adc8] hover:text-[#cba6f7] transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Posts
              </Link>
              <Link
                href="/uses"
                className="text-[#a6adc8] hover:text-[#cba6f7] transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Uses
              </Link>
              {/* <Link
                href="/playground"
                className="text-[#a6adc8] hover:text-[#cba6f7] transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Playground
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
