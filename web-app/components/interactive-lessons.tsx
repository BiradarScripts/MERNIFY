'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Mic, Headphones, BookOpen, Pencil, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

export function InteractiveLessonsComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-blue-400 font-pixel p-4">
      <header className="container mx-auto mb-8">
        <h1 className="text-4xl font-bold text-center pixel-text text-yellow-400 drop-shadow-[2px_2px_0_#000]">
          Interactive Lessons
        </h1>
        <p className="text-center text-xl mt-2 pixel-text">
          Level up your language skills with fun, engaging lessons!
        </p>
      </header>

      <main className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <LessonCard
            icon={<Mic className="w-12 h-12 text-red-500" />}
            title="Speaking Practice"
            description="Improve your pronunciation and fluency with interactive speaking exercises."
            progress={75}
          />
          <LessonCard
            icon={<Headphones className="w-12 h-12 text-blue-500" />}
            title="Listening Comprehension"
            description="Sharpen your ears with diverse audio clips and challenging questions."
            progress={60}
          />
          <LessonCard
            icon={<BookOpen className="w-12 h-12 text-green-500" />}
            title="Reading Adventures"
            description="Explore exciting stories and articles to boost your reading skills."
            progress={90}
          />
          <LessonCard
            icon={<Pencil className="w-12 h-12 text-purple-500" />}
            title="Writing Challenges"
            description="Express yourself clearly with guided writing exercises and prompts."
            progress={45}
          />
        </div>

        <section className="bg-white pixel-border p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 pixel-text">Current Lesson: Greetings in Spanish</h2>
          <div className="space-y-4">
            <p className="pixel-text">Match the greeting to its English translation:</p>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="pixel-border">Hola</Button>
              <Button variant="outline" className="pixel-border">Good morning</Button>
              <Button variant="outline" className="pixel-border">Buenos días</Button>
              <Button variant="outline" className="pixel-border">Hello</Button>
              <Button variant="outline" className="pixel-border">Buenas noches</Button>
              <Button variant="outline" className="pixel-border">Good night</Button>
            </div>
          </div>
        </section>

        <div className="flex justify-between items-center">
          <Button variant="outline" className="pixel-border">
            <ChevronLeft className="mr-2 h-4 w-4" /> Previous Lesson
          </Button>
          <Button className="pixel-border bg-green-500 hover:bg-green-600 text-white">
            Next Lesson <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </main>

      <footer className="mt-12 text-center">
        <Link href="/" className="text-blue-800 hover:text-blue-600 pixel-text">
          Back to Home
        </Link>
      </footer>

      <style jsx global>{`
        @font-face {
          font-family: 'PixelFont';
          src: url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        }

        .font-pixel {
          font-family: 'PixelFont', monospace;
        }

        .pixel-text {
          image-rendering: pixelated;
          -webkit-font-smoothing: none;
        }

        .pixel-border {
          box-shadow: 
            0 4px 0 0 #000,
            0 -4px 0 0 #000,
            4px 0 0 0 #000,
            -4px 0 0 0 #000,
            4px 4px 0 0 #000,
            4px -4px 0 0 #000,
            -4px 4px 0 0 #000,
            -4px -4px 0 0 #000;
        }
      `}</style>
    </div>
  )
}

function LessonCard({ icon, title, description, progress }) {
  return (
    <Card className="pixel-border bg-white">
      <CardHeader className="flex flex-row items-center space-x-4 pb-2">
        {icon}
        <CardTitle className="pixel-text">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="pixel-text mb-4">{description}</p>
        <div className="space-y-2">
          <div className="flex justify-between pixel-text">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className="pixel-border" />
        </div>
      </CardContent>
    </Card>
  )
}