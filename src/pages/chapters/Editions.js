import { useLoaderData } from 'react-router-dom'
import { editionsData } from '../../data/editions/en'

export default function Editions() {
  const edition = useLoaderData()

  //console.log(...edition);

  return (
    <div className='career-details'>
      {edition.map(data => (      
        <>
          <p>{`[${data.verse}] ${data.text}.`}</p>
        </>
      ))
      }
    </div>
  )
}


export const editionsDetailsLoader = async ({ params }) => {
  const { id } = params

  let detailData = null;

  editionsData.find((value) => {
    detailData = value[id];
    //console.log(detailData);    
  });

  //data = editionsData.find(value => value[id]);

  return detailData;
}
