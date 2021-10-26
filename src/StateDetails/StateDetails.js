// import useFetch from "../useFetch/useFetch";

const StateDetails = ({details}) => {
  // const {data:details, loading, error} = useFetch('https://disease.sh/v3/covid-19/nyt/counties/Dallas?lastdays=15')
  // console.log(details)

  return ( 
    <div className="state-details">
      {details && details.map((item)=>(
        <div className="item" key={item.id}>
          <div className="item-date">
          {item.date}
          </div>
          <div className="item-cases">
            {item.cases}
          </div>
          <div className="item-deaths">
            {item.deaths}
          </div>
        </div>
      ))}
    </div>
   );
}
 
export default StateDetails;