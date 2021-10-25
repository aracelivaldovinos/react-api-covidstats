import { useEffect, useState} from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)

  useEffect(()=>{
    fetch(url)
    .then((response)=>{
      console.log(response)
      if(!response.ok){
        throw Error(response.status)
      }
      return response.json()
      // console.log(response.json())
    })
    .then((data)=>{
      // console.log(data)
      setData(data)
      setLoading(false)
    })
    .catch((error)=>{
      console.log(error.message)
      setError(error.message)
      setLoading(false)
    })
  }, [url])
  return ( 
    {data, error, loading}
   );
}
 
export default useFetch;