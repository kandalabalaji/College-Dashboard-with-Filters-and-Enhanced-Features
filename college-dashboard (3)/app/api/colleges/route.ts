import { NextResponse } from "next/server"
import { colleges } from "@/lib/db"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const location = searchParams.get("location")
  const course = searchParams.get("course")
  const minFee = searchParams.get("minFee")
  const maxFee = searchParams.get("maxFee")
  const search = searchParams.get("search")
  const sort = searchParams.get("sort")

  let filteredColleges = [...colleges]

  // Apply filters
  if (location && location !== "all") {
    filteredColleges = filteredColleges.filter((c) => c.location === location)
  }

  if (course && course !== "all") {
    filteredColleges = filteredColleges.filter((c) => c.course === course)
  }

  if (minFee) {
    filteredColleges = filteredColleges.filter((c) => c.fee >= Number.parseInt(minFee))
  }

  if (maxFee) {
    filteredColleges = filteredColleges.filter((c) => c.fee <= Number.parseInt(maxFee))
  }

  // Apply search
  if (search) {
    filteredColleges = filteredColleges.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()))
  }

  // Apply sorting
  if (sort === "fee-asc") {
    filteredColleges.sort((a, b) => a.fee - b.fee)
  } else if (sort === "fee-desc") {
    filteredColleges.sort((a, b) => b.fee - a.fee)
  }

  return NextResponse.json(filteredColleges)
}
