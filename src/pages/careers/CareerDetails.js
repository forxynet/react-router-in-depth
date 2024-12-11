import { useLoaderData } from 'react-router-dom'
import { careersData } from '../../data/data';

export default function CareerDetails() {
 // const { id } = useParams()
  const career = useLoaderData()

  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sed sunt ipsam quam assumenda quasi ipsa facilis laborum rerum voluptatem!</p>
      </div>
    </div>
  )
}

// data loader
export const careerDetailsLoader = async ({ params }) => {
  const { id } = params

  // const res = await fetch('http://localhost:4000/careers/' + id)

  // if (!res.ok) {
  //   throw Error('Could not find that career');
  // }
  // return res.json()
  // data.filter(item => item.name.includes(search));
  const detailData = careersData.find(data => data.id === parseInt(id))

  return detailData;
}