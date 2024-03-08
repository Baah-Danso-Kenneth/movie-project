import { getDiscoverMovies } from '@/lib/getMovies'
import React from 'react'
import CarouselBanner from './CarouselBanner'

async function CarouselBannerWrapper({id,keyword}:{id?:string, keyword?:string}) {
    const movies = await getDiscoverMovies(id,keyword)
    
  return <CarouselBanner movies={movies}/>
}

export default CarouselBannerWrapper