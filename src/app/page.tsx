import CarouselBannerWrapper from '@/components/CarouselBannerWrapper';
import MovieCarousel from '@/components/MovieCarousel'
import {  getPopularMovies, getTopRatedMovies, getUpcomingMovies } from '@/lib/getMovies';


 async function Home() {
  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies()
  const popularMovies = await getPopularMovies();

  return (
    <main>
      <CarouselBannerWrapper/>
       <div className="flex flex-col space-y-2 xl:mt-48">
         <MovieCarousel movies={upcomingMovies} title='upcoming'/>
         <MovieCarousel movies={topRatedMovies} title='top rated'/>
         <MovieCarousel movies={popularMovies} title='Popular'/>
       </div>
    </main>
  )
}


export default Home