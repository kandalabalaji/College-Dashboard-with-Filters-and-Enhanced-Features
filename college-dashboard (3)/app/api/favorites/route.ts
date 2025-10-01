import { NextResponse } from "next/server"
import { favorites } from "@/lib/db"

export async function GET() {
  return NextResponse.json(favorites)
}

export async function POST(request: Request) {
  const body = await request.json()
  const newFavorite = {
    id: Date.now().toString(),
    collegeId: body.collegeId,
    userId: "user-1", // Simplified user ID
  }
  favorites.push(newFavorite)
  return NextResponse.json(newFavorite, { status: 201 })
}
