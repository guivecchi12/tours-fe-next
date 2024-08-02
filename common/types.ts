type TourLocation = {
  type: 'Point'
  coordinates: number[]
  address: string
  description: string
}

export interface Tour {
  _id: string
  name: string
  slug?: string
  duration: number
  maxGroupSize: number
  difficulty: string
  ratingsAverage?: number
  ratingQuantity?: number
  price: number
  priceDiscount?: number
  summary?: string
  description: string
  imageCover: string
  images?: string[]
  createdAt?: number
  startDates?: string[]
  secretTour?: Boolean
  startLocation: TourLocation
  locations?: TourLocation
  guides?: string[]
  startTime?: number
}

export interface ApiTourResponse {
  status: 'success' | 'fail'
  results?: number
  data: Tour[]
}
