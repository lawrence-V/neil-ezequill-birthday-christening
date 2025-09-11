"use client";

import React, { useState, useEffect } from "react";
import {
  Calendar,
  MapPin,
  Clock,
  Gift,
  Users,
  Star,
  Heart,
  Baby,
  Play,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function BabyBossCelebration() {
  const [floatingElements, setFloatingElements] = useState<
    {
      id: number;
      emoji: string;
      left: number;
      animationDelay: number;
      duration: number;
    }[]
  >([]);
  const [sparkles, setSparkles] = useState<
    {
      id: number;
      left: number;
      top: number;
      delay: number;
      duration: number;
    }[]
  >([]);

  // Ninong names state
  const [ninongNames, setNinongNames] = useState([
    "Kristoferson Oamil",
    "Alfredo Macaganda",
    "Nick Humphrey Trinidad",
    "Mardie Parel",
    "Tristan Aguedan",
    "Mark Christopher Alabon",
    "Charles Denver Sernande",
    "John Milen Fabi",
    "Aidan Calvan",
    "Jayron Abunaga",
    "Rj Visitacion",
    "Arjay Bernabe",
    "Noel Valdez",
    "Ruel Ryan Agustin",
    "Karl Angelo Nuqui",
    "Kenjie Cascayan",
    "Ariel Taggaoa",
    "Dhastine Guittap",
    "Gabriel Bañaga",
    "Lawrence Valdez",
    "Jigs Vince Parinas",
    "Joerey Domingo",
    "Nico Agullana",
    "Royce Acob",
    "JohnRey Medina",
    "John Roel Ramos",
    "Kevin Garvida",
    "John Neil Mabini",
    "Jerwin Florez",
  ]);

  // Ninang names state
  const [ninangNames, setNinangNames] = useState([
    "Nizzeth Rioga",
    "Aylah Nicolei Alaba",
    "Michelle Villanueva",
    "Lliyah Tricia Llapitan",
    "Kimberly Simon",
    "Rose Jay Mabini",
    "Arian Joy Ramirez",
    "Navin Santiago",
    "Laurie Ann Larada",
    "Sednie Kaye Tauyan",
    "Crislen Estuesta",
    "Lowella Ranada",
    "Marilyn Binggayen",
    "Maureen Stephanie Pancho",
    "Daisy Lacar",
    "Maricel Santos",
    "Thea Iquin",
    "Keith Benedicto",
    "Josie Aquino",
    "Angel Sumalin",
    "Pamela Acob",
    "Trishia Salazar",
    "Jovelyn Asuncion",
    "Marinelle Mabini",
    "Ciara Jamuyot",
    "Diane Agustin",
    "Mary Feith Agullana",
    "Erickson Sampayan",
    "Maryhean Gunsi Domingo",
    "Marigold Quatchon",
    "Mildred Jimenez",
    "Jay ann Cristobal",
    "Maryanne Agullana",
    "Grace Viuda",
  ]);

  useEffect(() => {
    // Create floating elements
    const elements = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      emoji: ["🎈", "🎂", "👶", "🎉", "⭐"][Math.floor(Math.random() * 5)],
      left: Math.random() * 100,
      animationDelay: Math.random() * 5,
      duration: 3 + Math.random() * 2,
    }));
    setFloatingElements(elements);

    // Create sparkle effect
    const sparkleElements = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 1 + Math.random() * 2,
    }));
    setSparkles(sparkleElements);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-slate-50 overflow-x-hidden relative">
      {/* Floating Elements */}
      {floatingElements.map((element) => (
        <div
          key={element.id}
          className="fixed text-2xl opacity-20 pointer-events-none z-0 animate-bounce"
          style={{
            left: `${element.left}%`,
            animationDelay: `${element.animationDelay}s`,
            animationDuration: `${element.duration}s`,
          }}
        >
          {element.emoji}
        </div>
      ))}

      {/* Sparkles */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="fixed w-2 h-2 bg-gradient-to-r from-yellow-300 to-blue-300 rounded-full opacity-30 pointer-events-none z-0"
          style={{
            left: `${sparkle.left}%`,
            top: `${sparkle.top}%`,
            animation: `pulse ${sparkle.duration}s ease-in-out infinite`,
            animationDelay: `${sparkle.delay}s`,
          }}
        />
      ))}

      {/* Header Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-blue-100 via-sky-200 to-purple-100 py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSI0Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20 animate-pulse"></div>

        {/* Animated party elements */}
        <div className="absolute top-10 left-10 text-4xl animate-bounce">
          🎈
        </div>
        <div className="absolute top-20 right-20 text-3xl animate-pulse">
          🎉
        </div>
        <div className="absolute bottom-10 left-1/4 text-2xl animate-spin">
          ⭐
        </div>
        <div
          className="absolute bottom-20 right-1/3 text-3xl animate-bounce"
          style={{ animationDelay: "0.5s" }}
        >
          🎂
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-blue-200 to-sky-300 rounded-full mb-6 shadow-2xl animate-pulse border-4 border-white">
            <Baby className="w-16 h-16 text-blue-600 animate-bounce" />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-800 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-4 tracking-tight animate-pulse">
            Little Boss
          </h1>
          <div className="text-3xl md:text-4xl bg-gradient-to-r from-blue-700 to-purple-600 bg-clip-text text-transparent mb-6 font-semibold animate-bounce">
            Birthday & Christening Celebration
          </div>
          <div className="bg-gradient-to-r from-white/90 to-blue-50/90 backdrop-blur-sm rounded-full px-8 py-4 inline-block shadow-xl border border-white/50 transform hover:scale-105 transition-all duration-300">
            <p className="text-blue-800 text-xl font-medium animate-pulse">
              Join us as our little CEO turns one! 🎂✨
            </p>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Event Details Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Birthday Party Card */}
          <Card className="bg-gradient-to-br from-blue-50 to-sky-100 border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1 transform-gpu group overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <CardHeader className="text-center pb-4 relative">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-200 to-sky-300 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:animate-spin">
                <Gift className="w-10 h-10 text-blue-600" />
              </div>
              <CardTitle className="text-2xl text-blue-800 group-hover:text-purple-600 transition-colors">
                Birthday Party 🎉
              </CardTitle>
              <CardDescription className="text-blue-600">
                Our little boss turns 1!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 relative">
              <div className="flex items-center space-x-3 text-blue-700 hover:text-purple-600 transition-colors">
                <Calendar className="w-5 h-5 animate-pulse" />
                <span className="font-medium">
                  Saturday, December 15th, 2024
                </span>
              </div>
              <div className="flex items-center space-x-3 text-blue-700 hover:text-purple-600 transition-colors">
                <Clock
                  className="w-5 h-5 animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                />
                <span className="font-medium">2:00 PM - 6:00 PM</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-700 hover:text-purple-600 transition-colors">
                <MapPin
                  className="w-5 h-5 animate-pulse"
                  style={{ animationDelay: "1s" }}
                />
                <span className="font-medium">Family Garden Venue</span>
              </div>
            </CardContent>
          </Card>

          {/* Christening Card */}
          <Card className="bg-gradient-to-br from-sky-50 to-purple-100 border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:-rotate-1 transform-gpu group overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <CardHeader className="text-center pb-4 relative">
              <div className="w-20 h-20 bg-gradient-to-br from-sky-200 to-purple-300 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:animate-bounce">
                <Heart className="w-10 h-10 text-sky-600" />
              </div>
              <CardTitle className="text-2xl text-blue-800 group-hover:text-purple-600 transition-colors">
                Christening 🙏
              </CardTitle>
              <CardDescription className="text-blue-600">
                A blessing for our little one
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 relative">
              <div className="flex items-center space-x-3 text-blue-700 hover:text-purple-600 transition-colors">
                <Calendar className="w-5 h-5 animate-pulse" />
                <span className="font-medium">Sunday, December 16th, 2024</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-700 hover:text-purple-600 transition-colors">
                <Clock
                  className="w-5 h-5 animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                />
                <span className="font-medium">10:00 AM - 12:00 PM</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-700 hover:text-purple-600 transition-colors">
                <MapPin
                  className="w-5 h-5 animate-pulse"
                  style={{ animationDelay: "1s" }}
                />
                <span className="font-medium">St. Mary's Church</span>
              </div>
            </CardContent>
          </Card>

          {/* Guest Info Card */}
          <Card className="bg-gradient-to-br from-slate-50 to-purple-50 border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 transform-gpu group md:col-span-2 lg:col-span-1 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <CardHeader className="text-center pb-4 relative">
              <div className="w-20 h-20 bg-gradient-to-br from-slate-200 to-purple-300 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:animate-pulse">
                <Users className="w-10 h-10 text-slate-600" />
              </div>
              <CardTitle className="text-2xl text-blue-800 group-hover:text-purple-600 transition-colors">
                Join the Celebration 🎊
              </CardTitle>
              <CardDescription className="text-blue-600">
                You're invited to both events!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-center relative">
              <p className="text-blue-700 font-medium animate-bounce">
                RSVP by December 10th, 2024
              </p>
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-4 hover:from-purple-100 hover:to-blue-100 transition-all duration-300">
                <p className="text-blue-800 font-semibold">
                  Contact Information
                </p>
                <p className="text-blue-700 text-sm mt-2">
                  Phone: (555) 123-4567
                  <br />
                  Email: celebration@babyboss.com
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Special Message Section */}
        <div className="bg-gradient-to-r from-blue-100 via-sky-100 to-purple-100 rounded-3xl p-12 mb-16 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] relative overflow-hidden">
          <div className="absolute top-4 right-4 text-3xl animate-spin">⭐</div>
          <div className="absolute bottom-4 left-4 text-2xl animate-bounce">
            🎈
          </div>
          <div className="absolute top-1/2 left-4 text-2xl animate-pulse">
            ✨
          </div>
          <div
            className="absolute top-1/4 right-8 text-2xl animate-bounce"
            style={{ animationDelay: "1s" }}
          >
            🎉
          </div>

          <div className="text-center max-w-4xl mx-auto relative z-10">
            <div className="flex justify-center mb-6">
              <Star
                className="w-16 h-16 text-yellow-500 mx-2 animate-spin"
                style={{ animationDuration: "3s" }}
              />
              <Baby className="w-20 h-20 text-blue-800 animate-bounce" />
              <Star
                className="w-16 h-16 text-yellow-500 mx-2 animate-spin"
                style={{ animationDuration: "3s", animationDelay: "1s" }}
              />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-800 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6 animate-pulse">
              Our Little CEO is Growing Up! 🚀
            </h2>
            <p className="text-xl text-blue-700 leading-relaxed mb-8 hover:text-purple-600 transition-colors">
              Join us as we celebrate our little boss reaching his first
              milestone and receiving God's blessing. It's going to be a weekend
              filled with love, laughter, and precious memories that we'll
              treasure forever! ✨💙
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/70 rounded-xl p-6 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 transform hover:scale-110 hover:rotate-2">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-800 to-purple-600 bg-clip-text text-transparent animate-pulse">
                  1
                </div>
                <div className="text-blue-600 font-medium">Year of Joy 🎂</div>
              </div>
              <div className="bg-white/70 rounded-xl p-6 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 transform hover:scale-110">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-800 bg-clip-text text-transparent animate-pulse">
                  ∞
                </div>
                <div className="text-blue-600 font-medium">
                  Love & Blessings 💕
                </div>
              </div>
              <div className="bg-white/70 rounded-xl p-6 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 transform hover:scale-110 hover:-rotate-2">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-800 to-purple-600 bg-clip-text text-transparent animate-pulse">
                  2
                </div>
                <div className="text-blue-600 font-medium">Special Days 🌟</div>
              </div>
            </div>
          </div>
        </div>

        {/* Media Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-800 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-4 animate-pulse">
              Memories & Moments ✨
            </h2>
            <p className="text-xl text-blue-700 hover:text-purple-600 transition-colors">
              Watch our little boss in action and see adorable moments! 📸🎬
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Video Section */}
            <Card className="bg-gradient-to-br from-blue-50 to-sky-100 border-blue-200 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1 transform-gpu group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <CardHeader className="text-center pb-4 relative">
                <CardTitle className="text-2xl text-blue-800 flex items-center justify-center group-hover:text-purple-600 transition-colors">
                  <span className="mr-3 text-3xl animate-bounce">🎬</span>
                  Our Little Boss in Action
                </CardTitle>
                <CardDescription className="text-blue-600">
                  Special moments captured on video
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 relative">
                <div className="relative aspect-video overflow-hidden rounded-b-lg">
                  <iframe
                    src="https://www.youtube.com/embed/YU6sRWdzEMc?si=0&rel=0&modestbranding=1&showinfo=0"
                    title="Little Boss Celebration Video"
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>

                  {/* Optional: Overlay with play button that disappears when video loads */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-200/20 to-sky-300/20 flex items-center justify-center pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Boss Baby Character Section */}
            <Card className="bg-gradient-to-br from-sky-50 to-purple-100 border-blue-200 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:-rotate-1 transform-gpu group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <CardHeader className="text-center pb-4 relative">
                <CardTitle className="text-2xl text-blue-800 flex items-center justify-center group-hover:text-purple-600 transition-colors">
                  <span className="mr-3 text-3xl animate-bounce">👔</span>
                  Meet Our Little CEO
                </CardTitle>
                <CardDescription className="text-blue-600">
                  Inspired by the Boss Baby himself!
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 relative">
                <div className="relative bg-gradient-to-br from-orange-100 via-yellow-50 to-blue-100 aspect-square flex items-center justify-center group-hover:from-purple-100 group-hover:via-pink-50 group-hover:to-blue-100 transition-all duration-500">
                  <div className="text-center text-blue-800">
                    <div className="w-40 h-40 bg-gradient-to-br from-blue-200 to-sky-300 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl border-4 border-white group-hover:animate-bounce transform hover:scale-110 transition-all duration-300">
                      <span className="text-5xl animate-pulse">👶</span>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 mx-4 shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105">
                      <p className="text-sm font-medium mb-2 animate-pulse">
                        🍼 CEO in Training
                      </p>
                      <p className="text-xs opacity-75">
                        Replace with Boss Baby character image
                      </p>
                      <p className="text-xs opacity-75">
                        or your little one's photo!
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Photo Gallery Preview */}
          <Card className="bg-white/70 backdrop-blur-sm border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-blue-800 flex items-center justify-center hover:text-purple-600 transition-colors">
                <span className="mr-3 text-4xl animate-bounce">📸</span>
                Photo Gallery
              </CardTitle>
              <CardDescription className="text-blue-600">
                Precious moments from our little boss's journey
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((index) => (
                  <div
                    key={index}
                    className="relative aspect-square bg-gradient-to-br from-blue-100 to-sky-200 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 cursor-pointer overflow-hidden transform hover:rotate-3 group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-blue-700">
                        <div className="w-16 h-16 bg-blue-300 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:animate-spin">
                          <span className="text-2xl">
                            {index === 1 && "👶"}
                            {index === 2 && "🎂"}
                            {index === 3 && "👔"}
                            {index === 4 && "🎈"}
                          </span>
                        </div>
                        <p className="text-xs font-medium animate-pulse">
                          Photo {index}
                        </p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-purple-600/0 to-blue-600/0 hover:from-blue-600/10 hover:via-purple-600/10 hover:to-blue-600/10 transition-all duration-300 rounded-xl"></div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-6">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 hover:from-purple-100 hover:to-blue-100 transition-all duration-300 rounded-full px-8 py-4 cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1">
                  <span className="text-blue-800 font-medium">
                    View All Photos
                  </span>
                  <span className="text-blue-600 animate-bounce">→</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Godparents Section */}
        <div className="mb-16">
          <Card className="bg-gradient-to-br from-blue-50 via-sky-50 to-purple-50 border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.01]">
            <CardHeader className="text-center pb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-200 to-purple-300 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-pulse">
                <span className="text-4xl animate-bounce">🤝</span>
              </div>
              <CardTitle className="text-4xl md:text-5xl bg-gradient-to-r from-blue-800 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-4 animate-pulse">
                Our Little Boss's Special Team ✨
              </CardTitle>
              <CardDescription className="text-lg text-blue-600 hover:text-purple-600 transition-colors">
                The amazing godparents who will guide our little CEO through
                life 🌟
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Ninong Section */}
                <div className="text-center">
                  <div className="bg-gradient-to-br from-blue-100 to-sky-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:rotate-1">
                    <div className="w-20 h-20 bg-blue-300 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                      <span className="text-3xl">👨‍💼</span>
                    </div>
                    <h3 className="text-3xl font-bold text-blue-800 mb-6 hover:text-purple-600 transition-colors">
                      Ninong 💼
                    </h3>
                    <div className="space-y-4">
                      {ninongNames.map((name, index) => (
                        <div
                          key={index}
                          className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group"
                        >
                          <p
                            className="text-blue-700 font-semibold text-lg group-hover:text-purple-600 transition-colors animate-pulse"
                            style={{ animationDelay: `${index * 0.2}s` }}
                          >
                            {name}
                          </p>
                          <p className="text-blue-600 text-sm">
                            {
                              [
                                "Senior Business Advisor",
                                "Executive Mentor",
                                "Life Coach & Guide",
                                "Spiritual Advisor",
                              ][index]
                            }
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Ninang Section */}
                <div className="text-center">
                  <div className="bg-gradient-to-br from-sky-100 to-purple-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1">
                    <div
                      className="w-20 h-20 bg-purple-300 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce"
                      style={{ animationDelay: "0.5s" }}
                    >
                      <span className="text-3xl">👩‍💼</span>
                    </div>
                    <h3 className="text-3xl font-bold text-blue-800 mb-6 hover:text-purple-600 transition-colors">
                      Ninang 💎
                    </h3>
                    <div className="space-y-4">
                      {ninangNames.map((name, index) => (
                        <div
                          key={index}
                          className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group"
                        >
                          <p
                            className="text-blue-700 font-semibold text-lg group-hover:text-purple-600 transition-colors animate-pulse"
                            style={{ animationDelay: `${index * 0.3}s` }}
                          >
                            {name}
                          </p>
                          <p className="text-blue-600 text-sm">
                            {
                              [
                                "CEO & Life Mentor",
                                "Executive Director",
                                "Strategic Advisor",
                                "Spiritual Guide",
                              ][index]
                            }
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Special Message for Godparents */}
              <div className="mt-12 text-center">
                <div className="bg-gradient-to-r from-blue-100 via-sky-100 to-purple-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
                  <div className="flex justify-center items-center mb-4">
                    <Heart className="w-8 h-8 text-blue-600 mx-2 animate-bounce" />
                    <span className="text-2xl">🙏</span>
                    <Heart className="w-8 h-8 text-blue-600 mx-2 animate-bounce" />
                  </div>
                  <h4 className="text-xl font-bold text-blue-800 mb-4">
                    Thank You to Our Special Team
                  </h4>
                  <p className="text-blue-700 max-w-3xl mx-auto leading-relaxed">
                    We are incredibly blessed to have such wonderful people who
                    have agreed to be part of our little boss's spiritual
                    journey. Your love, guidance, and support will help shape
                    him into the amazing person we know he'll become. Thank you
                    for being his special advisors for life! 💙
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Information */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white/70 backdrop-blur-sm border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-800 flex items-center hover:text-purple-600 transition-colors">
                <Gift className="w-6 h-6 mr-3 animate-bounce" />
                Gift Information
              </CardTitle>
            </CardHeader>
            <CardContent className="text-blue-700">
              <p className="mb-4">
                Your presence is the greatest gift, but if you'd like to bring
                something special:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse"></span>
                  <span>Baby books for our little reader 📚</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse"></span>
                  <span>Educational toys for development 🧸</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse"></span>
                  <span>Keepsake items for memories 💝</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse"></span>
                  <span>Or simply your love and best wishes! 💕</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/70 backdrop-blur-sm border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-800 flex items-center hover:text-purple-600 transition-colors">
                <Users className="w-6 h-6 mr-3 animate-bounce" />
                Special Notes
              </CardTitle>
            </CardHeader>
            <CardContent className="text-blue-700">
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse"></span>
                  <span>
                    Family-friendly celebration with activities for all ages 👨‍👩‍👧‍👦
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse"></span>
                  <span>
                    Professional photographer will capture precious moments 📷
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse"></span>
                  <span>Refreshments and cake will be provided 🍰</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse"></span>
                  <span>Parking available at both venues 🚗</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-800 to-purple-700 text-white py-12 mt-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mb-6">
            <Baby className="w-12 h-12 mx-auto mb-4 opacity-80 animate-bounce" />
            <h3 className="text-2xl font-semibold mb-2 animate-pulse">
              Thank You ✨
            </h3>
            <p className="text-blue-100 max-w-2xl mx-auto hover:text-white transition-colors">
              We can't wait to celebrate these special milestones with all our
              loved ones. Your presence will make these moments even more
              precious. 🎉💙
            </p>
          </div>
          <div className="border-t border-blue-600 pt-6 text-blue-200 text-sm">
            <p className="animate-pulse">
              With love and excitement, The Family 💙✨
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
