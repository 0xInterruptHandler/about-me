"use client"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Github, Twitter, Linkedin, Mail, ChevronRight, Youtube, Discord} from 'lucide-react'
import Image from "next/image"
import Navigation from "@/components/navigation"
import AsciiWelcome from "@/components/ascii-welcome" // Import the new component
import Link from "next/link"
import { FaDiscord } from 'react-icons/fa';
import { useState } from "react"
export default function Portfolio() {

    const [lang, setLang] = useState<"es" | "en">("es")

  const content = {
    es: (
      <>
        <p>
          I post videos on my YouTube channel called{" "}
          <span className="text-[#d35c53]">"0xInterruptHandler"</span>.
        </p>

        <p>
          Soy 0xInterruptHandler, estudiante de Ingeniería de Sistemas y
          desarrollador web junior con sólidos fundamentos teóricos en
          informática y programación. Me apasiona crear soluciones seguras,
          eficientes y usables, explorando cómo funcionan las tecnologías a un
          nivel profundo.
        </p>

        <p>
          Aunque no me considero aún un backend developer pleno, tengo
          experiencia práctica desarrollando APIs y microservicios con Node.js,
          Express y Spring Boot, así como optimizando bases de datos SQL y
          diseñando arquitecturas escalables.
        </p>

        <p>
          Mi interés por la ciberseguridad ofensiva me ha llevado a aprender
          continuamente sobre vulnerabilidades, buenas prácticas y estrategias
          de defensa, aplicando este conocimiento al desarrollo seguro de
          software.
        </p>

        <p>
          Más allá de la programación, disfruto leer, investigar y comprender a
          fondo cómo funcionan los sistemas. Creo firmemente en el aprendizaje
          constante y en la importancia de compartir conocimiento con la
          comunidad técnica.
        </p>

        <p className="font-semibold mt-4">
          Stack y herramientas con las que trabajo habitualmente:
        </p>
        <ul className="list-disc list-inside">
          <li>Sistemas y entornos: Arch Linux, Debian</li>
          <li>Editores y flujos: Emacs, Neovim</li>
          <li>Frontend: React, Next.js</li>
          <li>Backend: Java, Node.js</li>
          <li>
            Otros: herramientas CLI, automatización, optimización de entornos
            de desarrollo
          </li>
        </ul>

        <p className="mt-4">
          <strong>Idiomas:</strong> Español (nativo), Inglés (avanzado)
        </p>

        <p>
          La razón principal por la que creo este blog es para{" "}
          <strong>conectar con personas con intereses similares</strong>,
          intercambiar ideas y crecer en conjunto como profesionales y
          entusiastas de la tecnología.
        </p>

        <p>
          Además del blog, mantengo contacto por Discord. Si te interesa, puedes
          seguir mi cuenta ejecutando:
        </p>

        <pre className="bg-[#1e1e2e] text-sm p-3 rounded-md overflow-x-auto">
          echo
          '6148523063484d364c79396b61584e6a62334a6b595842774c6d4e766253393163325679637938784d6a63784d6a51314f5463324d446b304e6a51794d6a513343673d3d'
          | xxd -r -p | base64 -d
        </pre>

        <p>
          Por supuesto, si lo deseas, puedes conocerme más a fondo y trabajar
          conmigo en proyectos que aporten valor real.
        </p>
      </>
    ),
    en: (
      <>
        <p>
          I post videos on my YouTube channel called{" "}
          <span className="text-[#d35c53]">"0xInterruptHandler"</span>.
        </p>

        <p>
          I’m 0xInterruptHandler, a Systems Engineering student and junior web
          developer with strong theoretical foundations in computer science and
          programming. I’m passionate about creating secure, efficient, and
          usable solutions, exploring how technologies work at a deep level.
        </p>

        <p>
          While I don’t yet consider myself a full-fledged backend developer, I
          have hands-on experience developing APIs and microservices with
          Node.js, Express, and Spring Boot, as well as optimizing SQL databases
          and designing scalable architectures.
        </p>

        <p>
          My interest in offensive cybersecurity has led me to continuously
          learn about vulnerabilities, best practices, and defense strategies,
          applying this knowledge to secure software development.
        </p>

        <p>
          Beyond programming, I enjoy reading, researching, and understanding
          how systems work in depth. I firmly believe in lifelong learning and
          the importance of sharing knowledge with the tech community.
        </p>

        <p className="font-semibold mt-4">
          Stack and tools I regularly work with:
        </p>
        <ul className="list-disc list-inside">
          <li>Systems and environments: Arch Linux, Debian</li>
          <li>Editors and workflows: Emacs, Neovim</li>
          <li>Frontend: React, Next.js</li>
          <li>Backend: Java, Node.js</li>
          <li>
            Others: CLI tools, automation, development environment optimization
          </li>
        </ul>

        <p className="mt-4">
          <strong>Languages:</strong> Spanish (native), English (advanced)
        </p>

        <p>
          The main reason I created this blog is to{" "}
          <strong>connect with people with similar interests</strong>, exchange
          ideas, and grow together as professionals and tech enthusiasts.
        </p>

        <p>
          In addition to the blog, I keep in touch via Discord. If you’re
          interested, you can follow my account by running:
        </p>

        <pre className="bg-[#1e1e2e] text-sm p-3 rounded-md overflow-x-auto">
          echo
          '6148523063484d364c79396b61584e6a62334a6b595842774c6d4e766253393163325679637938784d6a63784d6a51314f5463324d446b304e6a51794d6a513343673d3d'
          | xxd -r -p | base64 -d
        </pre>

        <p>
          Of course, if you wish, you can get to know me better and work with me
          on projects that provide real value.
        </p>
      </>
    ),
  }
  return (
    <div className="min-h-screen bg-[#1e1e2e] text-[#cdd6f4]">
      <Navigation />
      
      {/* Hero Section */}
      <main className="container mx-auto px-4 pt-20 pb-16">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* ASCII Welcome Art */}
          <div className="mb-8">
            <AsciiWelcome />
            {/* <GruvboxCube/> */}
          </div>
          
          {/* Greeting */}
          <div className="bg-[#313244] rounded-lg px-10 py-3 mb-8 border border-[#45475a]">
            <p className="text-[#a6adc8]/80">Cybersecurity enthusiast | CTF Player | Web developer</p>
          </div>
          
          {/* Name and Title */}

          <div className="flex flex-col md:flex-col items-left gap-2 mb-12">
                    <h1 className="text-left text-4xl md:text-5xl font-bold mb-0">0xInterruptHandler</h1>

            <div className="text-center md:text-left">
              <p className="text-[#63b4da] text-lg">Security Minded (Cybersecurity Enthusiast / Web Developer)</p>
            </div>
              <Avatar className=" w-24 h-24 border-2 border-[#a6adc8]">
              <AvatarImage src="/about-me/pfpmain.jpg" alt="0xInterruptHandler" />
              <AvatarFallback>AR</AvatarFallback>
              </Avatar>
 
            <div className="relative">
      <div className="flex items-center justify-center relative ">
        <h2 className="text-2xl font-bold mb-2 text-center w-full">Work</h2>
        <Button
          variant="outline"
          size="sm"
          className="absolute right-0 top-0 bg-[#1e1e2e] hover:bg-[#b4befe] text-[#b4befe] " 
          onClick={() => setLang(lang === "es" ? "en" : "es")}
        >
          {lang === "es" ? "EN" : "ES"}
        </Button>
      </div>

      <div className="text-[#cdd6f4]/90 leading-relaxed break-words whitespace-pre-line max-w-prose mx-auto text-left px-4">
        {content[lang]}
      </div>
    </div>
            <div className="mt-8">
              <Link
              href="https://github.com/0xInterruptHandler"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Button className="bg-[#cba6f7] hover:bg-[#b4befe] text-[#1e1e2e] font-medium">

                My Github Profile <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              </Link>
 
              
            </div>
 
            

          </div>

 
     
          {/* Social Links */}
          <div className="flex gap-4 mt-12">
                          <Link
              href="https://github.com/0xInterruptHandler"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            > 
            <Button variant="ghost" size="icon" className="text-[#a6adc8] hover:text-[#cba6f7] hover:bg-[#3c3836]">
              <Github className="h-5 w-5" />
            </Button></Link>
                                      <Link
              href="https://github.com/0xInterruptHandler"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Youtube"
            > 
            <Button variant="ghost" size="icon" className="text-[#a6adc8] hover:text-[#cba6f7] hover:bg-[#3c3836]">
              <Youtube className="h-5 w-5" />
            </Button></Link>

                <Link
      href="https://discordapp.com/users/1271245976094642247"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Discord"
    >
            <Button variant="ghost" size="icon" className="text-[#a6adc8] hover:text-[#cba6f7] hover:bg-[#3c3836]">
      <FaDiscord  />

        </Button>
    </Link>
            {/* <Button variant="ghost" size="icon" className="text-[#45475a] hover:text-[#cba6f7] hover:bg-[#3c3836]">
              <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-[#45475a] hover:text-[#cba6f7] hover:bg-[#3c3836]">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-[#45475a] hover:text-[#cba6f7] hover:bg-[#3c3836]">
              <Mail className="h-5 w-5" />
            </Button> */}
          </div>
        </div>
      </main>
    </div>
  )
}
