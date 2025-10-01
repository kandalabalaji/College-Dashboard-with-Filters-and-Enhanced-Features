"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Search } from "lucide-react"

interface CollegeFiltersProps {
  location: string
  setLocation: (value: string) => void
  course: string
  setCourse: (value: string) => void
  minFee: number
  setMinFee: (value: number) => void
  maxFee: number
  setMaxFee: (value: number) => void
  search: string
  setSearch: (value: string) => void
  sort: string
  setSort: (value: string) => void
}

export function CollegeFilters({
  location,
  setLocation,
  course,
  setCourse,
  minFee,
  setMinFee,
  maxFee,
  setMaxFee,
  search,
  setSearch,
  sort,
  setSort,
}: CollegeFiltersProps) {
  return (
    <div className="bg-card border rounded-lg p-6 mb-8 space-y-6">
      {/* Search */}
      <div className="space-y-2">
        <Label htmlFor="search">Search by College Name</Label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            id="search"
            placeholder="Search colleges..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      {/* Filters Grid */}
      <div className="grid md:grid-cols-3 gap-4">
        {/* Location Filter */}
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Select value={location} onValueChange={setLocation}>
            <SelectTrigger id="location">
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="Hyderabad">Hyderabad</SelectItem>
              <SelectItem value="Bangalore">Bangalore</SelectItem>
              <SelectItem value="Chennai">Chennai</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Course Filter */}
        <div className="space-y-2">
          <Label htmlFor="course">Course</Label>
          <Select value={course} onValueChange={setCourse}>
            <SelectTrigger id="course">
              <SelectValue placeholder="Select course" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Courses</SelectItem>
              <SelectItem value="Computer Science">Computer Science</SelectItem>
              <SelectItem value="Electronics">Electronics</SelectItem>
              <SelectItem value="MBA">MBA</SelectItem>
              <SelectItem value="MBBS">MBBS</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Sort */}
        <div className="space-y-2">
          <Label htmlFor="sort">Sort By</Label>
          <Select value={sort} onValueChange={setSort}>
            <SelectTrigger id="sort">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Default</SelectItem>
              <SelectItem value="fee-asc">Fee: Low to High</SelectItem>
              <SelectItem value="fee-desc">Fee: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Fee Range Slider */}
      <div className="space-y-4">
        <Label>
          Fee Range: ₹{minFee.toLocaleString()} - ₹{maxFee.toLocaleString()}
        </Label>
        <Slider
          min={0}
          max={300000}
          step={10000}
          value={[minFee, maxFee]}
          onValueChange={([min, max]) => {
            setMinFee(min)
            setMaxFee(max)
          }}
          className="w-full"
        />
      </div>
    </div>
  )
}
