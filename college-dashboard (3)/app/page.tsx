import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GraduationCap, Search, Star, Heart } from "lucide-react"

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-4">
          <GraduationCap className="h-16 w-16 text-primary" />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight">Find Your Perfect College</h1>

        <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
          Discover and compare colleges across India. Filter by location, course, and fees. Read reviews from students
          and save your favorites to make the best decision for your future.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button asChild size="lg" className="text-base">
            <Link href="/colleges">Get Started</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-base bg-transparent">
            <Link href="/reviews">Read Reviews</Link>
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-24">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center p-3 bg-accent rounded-lg mb-2">
            <Search className="h-8 w-8 text-accent-foreground" />
          </div>
          <h3 className="text-xl font-semibold">Smart Filters</h3>
          <p className="text-muted-foreground leading-relaxed">
            Filter colleges by location, course, and fee range to find exactly what you need
          </p>
        </div>

        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center p-3 bg-accent rounded-lg mb-2">
            <Star className="h-8 w-8 text-accent-foreground" />
          </div>
          <h3 className="text-xl font-semibold">Student Reviews</h3>
          <p className="text-muted-foreground leading-relaxed">
            Read authentic reviews and ratings from current students and alumni
          </p>
        </div>

        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center p-3 bg-accent rounded-lg mb-2">
            <Heart className="h-8 w-8 text-accent-foreground" />
          </div>
          <h3 className="text-xl font-semibold">Save Favorites</h3>
          <p className="text-muted-foreground leading-relaxed">
            Bookmark colleges you like and compare them side by side
          </p>
        </div>
      </div>
    </div>
  )
}
