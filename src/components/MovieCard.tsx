import Image from 'next/image'
import { Movie } from '../../typing'
import getImagePath from '@/lib/getImagePath'

function MovieCard({movie}:{movie:Movie}) {
  return (
    <div className='relative flex-shrink-0 cursor-ponter transform hover:scale-105 transition duration-200 ease-out hover:drop-shadow-lg'>
        < div className="absolute inset-0 bg-gradient-to-t from-gray-200/0 via-gray-900/10 to-gray-300 dark:to-[#1A1c29]/80 z-10"/>
      <p className='absolute z-20 bottom-5 left-5 text-white'>{movie.title}</p>
      <Image
        className='w-fit lg:min-w-[400px] h-56 object-contain rounded-sm shadow-md shadow-gray-900 drop-shadow-xl '
        src={getImagePath(movie.backdrop_path!)}
        alt={movie.title}
        width={1920}
        height={1080}
        key={movie.id}
      />
    </div>
  )
}

export default MovieCard