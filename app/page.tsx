import TourCard from './components/TourCard'
import { ApiTourResponse, Tour } from '../common/types'

async function getTours() {
  const URL = `${process.env.BASE_URI}/${process.env.V1_URL}/tours` || ''
  console.log('URL -->', URL)
  const res = await fetch(URL)
  const apiRes = await res.json()
  return apiRes.data
}

export default async function Home() {
  const tours = await getTours()
  return (
    <div className="bg-slate-600 flex flex-wrap justify-around py-4">
      {tours?.map((tour: Tour) => {
        return (
          <div className="flex">
            <TourCard tour={tour} />
          </div>
        )
      })}
    </div>
  )
}
