import './Cases.css';

const Cases = ({cases}) => {
  return (
    <div className="cases-content"> 
      {cases &&
        <div>
          <div className="cases">
            <h2>{cases.cases}</h2>
            <p>Infected Cases</p>
          </div>
          <div className="recovered">
            <h2>{cases.recovered}</h2>
            <p>Recovered Cases</p>
          </div>
          <div className="deaths">
            <h2>{cases.deaths}</h2>
            <p>Death Cases</p>
          </div>
        </div>
      }
    </div>
   );
}
 
export default Cases;