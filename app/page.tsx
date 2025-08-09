import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Github, Twitter, Linkedin, Mail, ChevronRight } from 'lucide-react'
import Image from "next/image"
import Navigation from "@/components/navigation"
import AsciiWelcome from "@/components/ascii-welcome" // Import the new component

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#1e1e2e] text-[#cdd6f4]">
      <Navigation />
      
      {/* Hero Section */}
      <main className="container mx-auto px-4 pt-20 pb-16">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* ASCII Welcome Art */}
          <div className="mb-8">
            <AsciiWelcome />
          </div>
          
          {/* Greeting */}
          <div className="bg-[#313244] rounded-lg px-6 py-3 mb-8 border border-[#45475a]">
            <p className="text-[#a6adc8]/80">Cybersecurity enthusiast | CTF Player | Web developer</p>
          </div>
          
          {/* Name and Title */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">0xInterruptHandler</h1>
              <p className="text-[#a89984] text-lg">Security Minded (Cybersecurity Enthusiast / Web Developer)</p>
            </div>
            <Avatar className="w-24 h-24 border-2 border-[#a6adc8]">
              <AvatarImage src="/pfpmain.jpg" alt="0xInterruptHandler" />
              <AvatarFallback>AR</AvatarFallback>
            </Avatar>
          </div>
          
          {/* Work Section */}
          <section className="mb-12 max-w-2xl">
            <h2 className="text-2xl font-bold mb-6 text-left w-full">Work</h2>
                <p className="text-[#cdd6f4]/90 leading-relaxed text-left">
              I post videos on my  YouTube channel called{' '}
              <span className="text-[#a6e3a1]">"0xInterruptHandler"</span>.
            </p>
            
            <div className="mt-8">
              <Button className="bg-[#cba6f7] hover:bg-[#b4befe] text-[#1e1e2e] font-medium">

                My portfolio <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </section>
          
          {/* Bio Section */}
          <section className="max-w-2xl w-full">
            <h2 className="text-2xl font-bold mb-6 text-left">Bio</h2>
            <div className="space-y-4 text-left">
              <div className="flex gap-4">
                <span className="font-bold text-[#f9e2af] min-w-[60px]">year</span>
                <span className="text-[#cdd6f4]/90">text.</span>
              </div>
          
            </div>
          </section>
          
          {/* Social Links */}
          <div className="flex gap-4 mt-12">
            <Button variant="ghost" size="icon" className="text-[#a89984] hover:text-[#b8bb26] hover:bg-[#3c3836]">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-[#a89984] hover:text-[#b8bb26] hover:bg-[#3c3836]">
              <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-[#a89984] hover:text-[#b8bb26] hover:bg-[#3c3836]">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-[#a89984] hover:text-[#b8bb26] hover:bg-[#3c3836]">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
