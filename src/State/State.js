import {useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { PieChart } from 'react-minimal-pie-chart';
import useFetch from "../useFetch/useFetch";
import './State.css'


const State = () => {
  const [search, setSearch] = useState('Texas')

  const {data: cases, error, loading} = useFetch(`https://disease.sh/v3/covid-19/states/${search}`)
  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  const infectedCases = cases.cases;
  const recoveredCases = cases.recovered;
  const deathCases = cases.deaths;

  return ( 
    <Container>
      <Row>
        <div className="state">
          <h1>COVID-19</h1>
          {cases && <div><h1>{cases.state}</h1></div>}
          <div className="search-state">
            <input 
              type="text"
              placeholder="Please enter state"
              value = {search}
              onChange = {handleChange}
              required/>
          </div>
          <div className="h-100 p-5 text-white bg-dark rounded-3">
            <Row>
              <Col>
              {cases &&
              <PieChart
                data={[
                  { title: 'One', value: infectedCases, color: '#fcbf49' },
                  { title: 'Two', value: recoveredCases, color: '#7cb518' },
                  { title: 'Three', value: deathCases, color: '#d00000' },
                ]}
              />
              }
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
    </Container>
   );
}
 
export default State;