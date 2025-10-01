import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import type { Review } from "@/lib/db"

interface ReviewCardProps {
  review: Review
}

export function ReviewCard({ review }: ReviewCardProps) {
  const date = new Date(review.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-semibold text-lg text-balance leading-tight">{review.collegeName}</h3>
            <p className="text-sm text-muted-foreground mt-1">{date}</p>
          </div>
          <Badge variant="secondary" className="shrink-0">
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 fill-current" />
              <span>{review.rating}</span>
            </div>
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground leading-relaxed">{review.comment}</p>
      </CardContent>
    </Card>
  )
}
