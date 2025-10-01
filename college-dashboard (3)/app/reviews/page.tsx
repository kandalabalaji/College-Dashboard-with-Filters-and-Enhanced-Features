"use client"

import { useState, useEffect } from "react"
import type { Review } from "@/lib/db"
import { ReviewForm } from "@/components/review-form"
import { ReviewCard } from "@/components/review-card"
import { Loader2 } from "lucide-react"

export const dynamic = "force-dynamic"

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchReviews()
  }, [])

  const fetchReviews = async () => {
    setLoading(true)
    const response = await fetch("/api/reviews")
    const data = await response.json()
    setReviews(data)
    setLoading(false)
  }

  const handleReviewAdded = () => {
    fetchReviews()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">College Reviews</h1>
        <p className="text-muted-foreground leading-relaxed">
          Share your experience and read what others have to say about different colleges
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Review Form */}
        <div className="lg:col-span-1">
          <div className="sticky top-4">
            <ReviewForm onReviewAdded={handleReviewAdded} />
          </div>
        </div>

        {/* Reviews List */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-6">Recent Reviews</h2>

          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
          ) : reviews.length === 0 ? (
            <div className="text-center py-12 bg-muted/50 rounded-lg">
              <p className="text-lg text-muted-foreground">No reviews yet</p>
              <p className="text-sm text-muted-foreground mt-2">Be the first to share your experience</p>
            </div>
          ) : (
            <div className="space-y-4">
              {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
