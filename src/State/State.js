import {useState} from 'react';
import useFetch from "../useFetch/useFetch";

const State = () => {
  const [search, setSearch] = useState('')

  const {data, error, loading} = useFetch(`https://disease.sh/v3/covid-19/states/${search}`)
  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  return ( 
    <div className="state">
      <div className="search-state">
        <input 
          type="text"
          placeholder="Please enter state"
          value = {search}
          onChange = {handleChange}
          required/>
      </div>
      {data &&
       <div>
         <h1>State: {data.state}</h1>
         <p>Cases: {data.cases}</p>
         <p>Recovered: {data.recovered}</p>
         <p>Deaths: {data.deaths}</p>
      </div>}
      {/* {error && <div>{error}</div>} */}
      {loading && <div>Loading...</div>}
    </div>
   );
}
 
export default State;