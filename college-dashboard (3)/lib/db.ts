// In-memory database for storing colleges, reviews, and favorites
export interface College {
  id: string
  name: string
  location: string
  course: string
  fee: number
}

export interface Review {
  id: string
  collegeName: string
  rating: number
  comment: string
  createdAt: string
}

export interface Favorite {
  id: string
  collegeId: string
  userId: string
}

// Seed data
export const colleges: College[] = [
  {
    id: "1",
    name: "ABC Engineering College",
    location: "Hyderabad",
    course: "Computer Science",
    fee: 120000,
  },
  {
    id: "2",
    name: "XYZ Institute of Technology",
    location: "Bangalore",
    course: "Electronics",
    fee: 100000,
  },
  {
    id: "3",
    name: "Sunrise Business School",
    location: "Chennai",
    course: "MBA",
    fee: 150000,
  },
  {
    id: "4",
    name: "Greenfield Medical College",
    location: "Hyderabad",
    course: "MBBS",
    fee: 250000,
  },
]

export const reviews: Review[] = []
export const favorites: Favorite[] = []
