import { useEffect, useState } from 'react';

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(()=>{
    fetch('https://disease.sh/v3/covid-19/states')
    .then((response)=>{
      return response.json()
      // console.log(response.json())
    })
    .then((data)=>{
      console.log(data)
      setData(data)
    })
  }, [])

  return ( 
    <div className="home-content">
      <h1>Homepage</h1>
    </div>
   );
}
 
export default Home;