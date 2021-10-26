import {useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { PieChart } from 'react-minimal-pie-chart';
import StateDetails from '../StateDetails/StateDetails';
import useFetch from "../useFetch/useFetch";
import './State.css'


const State = () => {
  const [search, setSearch] = useState('Texas')

  const {data: cases, error, loading} = useFetch(`https://disease.sh/v3/covid-19/states/${search}`)
  console.log(cases)

  const {data:details} = useFetch('https://disease.sh/v3/covid-19/nyt/counties/Dallas?lastdays=15')
  console.log(details)

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  // const infectedCases = cases.cases;
  // const recoveredCases = cases.recovered;
  // const deathCases = cases.deaths;
  

  return ( 
    <Container>
      <Row>
        <div className="state">
          <h1>COVID-19</h1>
          <div className="search-state">
            <input 
              type="text"
              placeholder="Please enter state"
              value = {search}
              onChange = {handleChange}
              required/>
          </div>
          <div className="h-75 p-3 text-white bg-dark rounded-3 center" id="state-row">
            <Row>
              {cases && <div className="state-name"><h1>{cases.state}</h1></div>}
              <Col>
              <PieChart
                data={[
                  { title: 'One', value: 4210472, color: '#fcbf49' },
                  { title: 'Two', value: 4016740, color: '#7cb518' },
                  { title: 'Three', value: 70720, color: '#d00000' },
                ]}
                style={{ height: '75%' }}/>
              </Col>
              <Col>
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
              </Col>
            </Row>
          </div>
          
          
          {/* {error && <div>{error}</div>} */}
          {loading && <div>Loading...</div>}
        </div>
      </Row>
      {details && <StateDetails details= {details.filter((item) =>item.state === search)}/> }
    </Container>
   );
}
 
export default State;