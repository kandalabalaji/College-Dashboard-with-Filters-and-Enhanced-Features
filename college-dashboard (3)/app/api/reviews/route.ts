import { NextResponse } from "next/server"
import { reviews } from "@/lib/db"

export async function GET() {
  return NextResponse.json(reviews)
}

export async function POST(request: Request) {
  const body = await request.json()
  const newReview = {
    id: Date.now().toString(),
    collegeName: body.collegeName,
    rating: body.rating,
    comment: body.comment,
    createdAt: new Date().toISOString(),
  }
  reviews.push(newReview)
  return NextResponse.json(newReview, { status: 201 })
}
