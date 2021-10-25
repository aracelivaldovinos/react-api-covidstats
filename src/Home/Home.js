import useFetch from "../useFetch/useFetch";

const Home = () => {
  const {data, error, loading} = useFetch('https://disease.sh/v3/covid-19/states')
  return ( 
    <div className="home-content">
      <h1>Homepage</h1>
      {data && data.map((item)=>(
        <div className="item-info" key={item.id}>
          {item.state}
        </div>
      ))}
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
    </div>
   );
}
 
export default Home;