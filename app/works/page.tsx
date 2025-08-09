import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from 'lucide-react'
import Image from "next/image"
import Navigation from "@/components/navigation"

export default function Works() {
  const projects = [
    {
      title: "Placeholder Project",
      description: "A full-stack e-commerce solution built with Next.js, Stripe, and PostgreSQL",
      image: "https://i.pinimg.com/736x/d3/fc/09/d3fc090af3524fe57eebdf463f272b1e.jpg",
      tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Placeholder Project",
      description: "A collaborative task management application with real-time updates",
      image: "https://i.pinimg.com/736x/a4/67/e7/a467e73b5b2db094ce21263e24f80892.jpg",
      tags: ["React", "Node.js", "Socket.io", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#"
    } 
  ]

  return (
    <div className="min-h-screen bg-[#1e1e2e] text-[#cdd6f4]">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Works</h1>
          <p className="text-[#a6adc8] mb-12 text-lg">
            Here are some of my recent projects and works.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="bg-[#313244] border-[#45475a] hover:bg-[#45475a] transition-colors">
                <CardHeader className="p-0">
                  <div className="relative h-48 w-full">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-[#cdd6f4] mb-2">{project.title}</CardTitle>
                  <CardDescription className="text-[#a6adc8] mb-4">
                    {project.description}
                  </CardDescription>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="bg-[#1e1e2e] text-[#89b4fa] border border-[#45475a]">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                              <Button size="sm" className="bg-[#cba6f7] hover:bg-[#b4befe] text-[#1e1e2e]">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-[#a6adc8] text-[#cdd6f4] hover:bg-[#313244] hover:border-[#cba6f7] bg-transparent"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
