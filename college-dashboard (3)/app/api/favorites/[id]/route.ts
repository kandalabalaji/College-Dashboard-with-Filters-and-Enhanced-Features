import { NextResponse } from "next/server"
import { favorites } from "@/lib/db"

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const index = favorites.findIndex((f) => f.collegeId === id)
  if (index > -1) {
    favorites.splice(index, 1)
    return NextResponse.json({ success: true })
  }
  return NextResponse.json({ error: "Not found" }, { status: 404 })
}
