import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Navigation from "@/components/navigation"

export default function Uses() {
  const categories = [
    {
      title: "Development",
      items: [
        { name: "Visual Studio Code", description: "My primary code editor with various extensions" },
        { name: "Nvim", description: "My secondary code editor" },
        { name: "Kitty", description: "My CLI" },
        { name: "Git", description: "Version control system" } 
      ]
    } 
  ]

  return (
    <div className="min-h-screen bg-[#1e1e2e] text-[#cdd6f4]">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Uses</h1>
          <p className="text-[#a6adc8] mb-12 text-lg">
            Here's a list of tools, software, and hardware I use for development and design.
          </p>
          
          <div className="space-y-8">
            {categories.map((category, index) => (
              <div key={index}>
                <h2 className="text-2xl font-bold mb-4">{category.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.items.map((item, itemIndex) => (
                    <Card key={itemIndex} className="bg-[#313244] border-[#45475a]">
                      <CardHeader>
                        <CardTitle className="text-[#cdd6f4] text-lg">{item.name}</CardTitle>
                        <CardDescription className="text-[#a6adc8]">
                          {item.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}