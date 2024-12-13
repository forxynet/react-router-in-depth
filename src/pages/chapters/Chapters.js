import { Link, useLoaderData } from 'react-router-dom'
import { chaptersData } from '../../data/chapters/tr'

export default function Chapters() {
  const chapters = useLoaderData();

  return (
    <div className='careers'>
      {chapters.map(chapter => (
        <Link to={`editions/${chapter.id.toString()}`} key={chapter.id}>
          <p>{chapter.transliteration}</p>
          <p>{chapter.translation}</p>
          <p>{chapter.type}</p>
          <p>{chapter.name}</p>
          <p>{chapter.total_verses}</p>
        </Link>
      ))}
    </div>
  )
}

export const chaptersLoader = async () => {
  return chaptersData;
}