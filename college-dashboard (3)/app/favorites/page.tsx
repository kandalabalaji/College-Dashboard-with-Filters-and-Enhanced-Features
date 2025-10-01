"use client"

import { useState, useEffect } from "react"
import type { College } from "@/lib/db"
import { CollegeCard } from "@/components/college-card"
import { Loader2, Heart } from "lucide-react"

export const dynamic = "force-dynamic"

export default function FavoritesPage() {
  const [colleges, setColleges] = useState<College[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchFavorites()
  }, [])

  const fetchFavorites = async () => {
    setLoading(true)
    try {
      // Fetch favorites
      const favoritesResponse = await fetch("/api/favorites")
      const favorites = await favoritesResponse.json()

      // Fetch all colleges
      const collegesResponse = await fetch("/api/colleges")
      const allColleges = await collegesResponse.json()

      // Filter colleges that are in favorites
      const favoriteColleges = allColleges.filter((college: College) =>
        favorites.some((fav: { collegeId: string }) => fav.collegeId === college.id),
      )

      setColleges(favoriteColleges)
    } catch (error) {
      console.error("[v0] Error fetching favorites:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleRemoveFavorite = async (collegeId: string) => {
    await fetch(`/api/favorites/${collegeId}`, { method: "DELETE" })
    setColleges((prev) => prev.filter((college) => college.id !== collegeId))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">My Favorites</h1>
        <p className="text-muted-foreground leading-relaxed">Colleges you've saved for later comparison and review</p>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      ) : colleges.length === 0 ? (
        <div className="text-center py-12 bg-muted/50 rounded-lg">
          <div className="inline-flex items-center justify-center p-4 bg-background rounded-full mb-4">
            <Heart className="h-12 w-12 text-muted-foreground" />
          </div>
          <p className="text-lg text-muted-foreground">No favorites yet</p>
          <p className="text-sm text-muted-foreground mt-2">
            Browse colleges and click the heart icon to add them to your favorites
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {colleges.map((college) => (
            <CollegeCard
              key={college.id}
              college={college}
              isFavorite={true}
              onToggleFavorite={() => handleRemoveFavorite(college.id)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
