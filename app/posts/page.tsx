import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/navigation"
import AsciiWelcome from "@/components/ascii-welcome"

export default function Posts() {
  const posts = [
    {
      title: "Post",
      image: "",
      slug: "text "
    },
    
  ]

  return (
    <div className="min-h-screen bg-[#1e1e2e] text-[#cdd6f4]">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-20 pb-16">
        <div className="flex flex-col items-center max-w-4xl mx-auto">
     
 
          
          {/* Popular Posts Heading */}
          <h1 className="text-2xl font-bold mt-20 mb-8 text-center">Some of my youtube Posts</h1>
          
          {/* Posts Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4   w-full"> {/* Changed to 4 columns on md and up, reduced gap */}
            {posts.map((post, index) => (
              <Link 
                key={index} 
                href={`/posts/${post.slug}`}
                className="group block text-center"
              >
                <div className="bg-[#313244] rounded-lg overflow-hidden hover:bg-[#45475a] transition-colors border border-[#45475a]">
                  <div className="relative aspect-[3/2] w-full"> {/* Maintained rectangular aspect ratio */}
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <h3 className="text-[#cdd6f4] text-xs font-medium leading-relaxed group-hover:text-[#cba6f7] transition-colors mt-2"> {/* Reduced text size to xs */}
                  {post.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
