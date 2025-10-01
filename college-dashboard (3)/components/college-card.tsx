"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, MapPin, BookOpen, IndianRupee } from "lucide-react"
import type { College } from "@/lib/db"
import { cn } from "@/lib/utils"

interface CollegeCardProps {
  college: College
  isFavorite: boolean
  onToggleFavorite: () => void
}

export function CollegeCard({ college, isFavorite, onToggleFavorite }: CollegeCardProps) {
  return (
    <Card className="flex flex-col h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-xl text-balance leading-tight">{college.name}</CardTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleFavorite}
            className={cn("shrink-0", isFavorite && "text-red-500")}
          >
            <Heart className={cn("h-5 w-5", isFavorite && "fill-current")} />
            <span className="sr-only">{isFavorite ? "Remove from favorites" : "Add to favorites"}</span>
          </Button>
        </div>
      </CardHeader>

      <CardContent className="flex-1 space-y-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 shrink-0" />
          <span>{college.location}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <BookOpen className="h-4 w-4 shrink-0" />
          <span>{college.course}</span>
        </div>

        <div className="flex items-center gap-2">
          <IndianRupee className="h-4 w-4 shrink-0" />
          <Badge variant="secondary" className="font-semibold">
            ₹{college.fee.toLocaleString()} / year
          </Badge>
        </div>
      </CardContent>

      <CardFooter>
        <Button variant="outline" className="w-full bg-transparent">
          View Details
        </Button>
      </CardFooter>
    </Card>
  )
}
