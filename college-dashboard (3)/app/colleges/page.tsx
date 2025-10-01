"use client"

import { useState, useEffect } from "react"
import type { College } from "@/lib/db"
import { CollegeCard } from "@/components/college-card"
import { CollegeFilters } from "@/components/college-filters"
import { Loader2 } from "lucide-react"

export const dynamic = "force-dynamic"

export default function CollegesPage() {
  const [colleges, setColleges] = useState<College[]>([])
  const [loading, setLoading] = useState(true)
  const [favorites, setFavorites] = useState<Set<string>>(new Set())

  // Filter states
  const [location, setLocation] = useState("all")
  const [course, setCourse] = useState("all")
  const [minFee, setMinFee] = useState(0)
  const [maxFee, setMaxFee] = useState(300000)
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState("")

  useEffect(() => {
    fetchColleges()
    fetchFavorites()
  }, [location, course, minFee, maxFee, search, sort])

  const fetchColleges = async () => {
    setLoading(true)
    const params = new URLSearchParams()
    if (location !== "all") params.append("location", location)
    if (course !== "all") params.append("course", course)
    if (minFee > 0) params.append("minFee", minFee.toString())
    if (maxFee < 300000) params.append("maxFee", maxFee.toString())
    if (search) params.append("search", search)
    if (sort) params.append("sort", sort)

    const response = await fetch(`/api/colleges?${params.toString()}`)
    const data = await response.json()
    setColleges(data)
    setLoading(false)
  }

  const fetchFavorites = async () => {
    const response = await fetch("/api/favorites")
    const data = await response.json()
    setFavorites(new Set(data.map((f: { collegeId: string }) => f.collegeId)))
  }

  const toggleFavorite = async (collegeId: string) => {
    if (favorites.has(collegeId)) {
      await fetch(`/api/favorites/${collegeId}`, { method: "DELETE" })
      setFavorites((prev) => {
        const next = new Set(prev)
        next.delete(collegeId)
        return next
      })
    } else {
      await fetch("/api/favorites", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ collegeId }),
      })
      setFavorites((prev) => new Set(prev).add(collegeId))
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Browse Colleges</h1>
        <p className="text-muted-foreground leading-relaxed">
          Filter and search through our collection of colleges to find your perfect match
        </p>
      </div>

      <CollegeFilters
        location={location}
        setLocation={setLocation}
        course={course}
        setCourse={setCourse}
        minFee={minFee}
        setMinFee={setMinFee}
        maxFee={maxFee}
        setMaxFee={setMaxFee}
        search={search}
        setSearch={setSearch}
        sort={sort}
        setSort={setSort}
      />

      {loading ? (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      ) : colleges.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">No colleges found matching your criteria</p>
          <p className="text-sm text-muted-foreground mt-2">Try adjusting your filters</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {colleges.map((college) => (
            <CollegeCard
              key={college.id}
              college={college}
              isFavorite={favorites.has(college.id)}
              onToggleFavorite={() => toggleFavorite(college.id)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
