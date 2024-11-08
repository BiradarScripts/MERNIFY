'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Trophy, Star, Zap, BarChart2, Calendar, Book } from 'lucide-react'
import Link from 'next/link'

export function ProgressTrackingComponent() {
  const learningStreak = 7;
  const totalXP = 1250;
  const level = 5;

  const achievements = [
    { name: "Word Wizard", description: "Learn 100 new words", icon: <Book className="w-6 h-6" />, progress: 75 },
    { name: "Conversation Master", description: "Complete 10 speaking exercises", icon: <Zap className="w-6 h-6" />, progress: 40 },
    { name: "Grammar Guru", description: "Ace 5 grammar quizzes", icon: <Trophy className="w-6 h-6" />, progress: 100 },
  ];

  const recentActivities = [
    { name: "Completed Lesson: Greetings", xp: 20, date: "2023-06-15" },
    { name: "Practiced Vocabulary", xp: 15, date: "2023-06-14" },
    { name: "Completed Quiz: Basic Phrases", xp: 30, date: "2023-06-13" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-blue-400 font-pixel p-4">
      <header className="container mx-auto mb-8 text-center">
        <div className="inline-block bg-white pixel-border p-2 mb-4">
          <BarChart2 className="w-12 h-12 text-blue-600 mx-auto" />
        </div>
        <h1 className="text-4xl font-bold pixel-text text-yellow-400 drop-shadow-[2px_2px_0_#000]">
          Your Learning Journey
        </h1>
        <p className="text-xl mt-2 pixel-text">
          Track your progress and unlock achievements!
        </p>
      </header>

      <main className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="pixel-border bg-white">
            <CardHeader>
              <CardTitle className="pixel-text flex items-center gap-2">
                <Calendar className="w-6 h-6 text-green-500" />
                Learning Streak
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold pixel-text text-center">{learningStreak} days</p>
            </CardContent>
          </Card>
          <Card className="pixel-border bg-white">
            <CardHeader>
              <CardTitle className="pixel-text flex items-center gap-2">
                <Zap className="w-6 h-6 text-yellow-500" />
                Total XP
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold pixel-text text-center">{totalXP} XP</p>
            </CardContent>
          </Card>
          <Card className="pixel-border bg-white">
            <CardHeader>
              <CardTitle className="pixel-text flex items-center gap-2">
                <Star className="w-6 h-6 text-purple-500" />
                Current Level
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold pixel-text text-center">{level}</p>
            </CardContent>
          </Card>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 pixel-text">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement) => (
              <Card key={achievement.name} className="pixel-border bg-white">
                <CardHeader>
                  <CardTitle className="pixel-text flex items-center gap-2">
                    {achievement.icon}
                    {achievement.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="pixel-text mb-2">{achievement.description}</p>
                  <Progress value={achievement.progress} className="pixel-border" />
                  <p className="text-right mt-2 pixel-text">{achievement.progress}%</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 pixel-text">Recent Activities</h2>
          <Card className="pixel-border bg-white">
            <CardContent>
              <ul className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <li key={index} className="flex justify-between items-center pixel-text">
                    <span>{activity.name}</span>
                    <span className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-yellow-500" />
                      {activity.xp} XP
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <div className="text-center">
          <Button className="pixel-border bg-green-500 hover:bg-green-600 text-white">
            Continue Learning
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