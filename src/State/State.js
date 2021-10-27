import {useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { PieChart } from 'react-minimal-pie-chart';
import StateDetails from '../StateDetails/StateDetails';
import Cases from '../Cases/Cases';
import useFetch from "../useFetch/useFetch";
import USMap from '../USMap/USMap';
import Vaccine from '../Vaccine/Vaccine';
import './State.css'



const State = () => {
  const [searchState, setSearchState] = useState('Texas');
  const [searchCounty, setSearchCounty] = useState('Dallas');
  const {data: cases, error, loading} = useFetch(`https://disease.sh/v3/covid-19/states/${searchState}`);
  const {data:details} = useFetch(`https://disease.sh/v3/covid-19/nyt/counties/${searchCounty}?lastdays=5`);
  const {data:vaccine} = useFetch(`https://disease.sh/v3/covid-19/vaccine/coverage/states/${searchState}?lastdays=5&fullData=true`)

  
  const handleStateChange = (e) => {
    setSearchState(e.target.value)
  }

  const handleCountyChange = (e) => {
    setSearchCounty(e.target.value)
  }

  // const infectedCases = cases.cases;
  // const recoveredCases = cases.recovered;
  // const deathCases = cases.deaths;
  

  return ( 
    <Container>
      <div className="state p-4">
      <Row>
        <h1 className="pt-5">COVID-19</h1>
        <Col>
          <div className="h-100 p-2 text-white bg-dark rounded-3 center" id="state-row">
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
                <Cases cases={cases}/>
              </Col>
            </Row>
          </div>
        </Col>
        <Col>
          <div className="h-100 p-3 text-white rounded-3 center" id="map-row">
            <USMap />
          </div>
        </Col>
      </Row>
      <Row className="search-form">
          <Col>
            <label><h5><strong>County:</strong></h5></label>
            <input 
              type="text"
              placeholder="State"
              className= "form-control"
              value = {searchCounty} 
              onChange = {handleCountyChange}
              required/>
          </Col>
          <Col>
            <label><h5><strong>State:</strong></h5></label>
            <input 
              type="text"
              placeholder="County"
              className="form-control"
              value = {searchState}
              onChange = {handleStateChange}
              required/>
          </Col>
        </Row> 
      </div>
      
      <Row>
        <Col>
        <h4 className="cases-header">Covid19-Cases Stats</h4>
        {details && <StateDetails details= {details.filter((item) =>item.state === searchState)}/> }
        </Col>
        <Col>
          <h4 className="vaccine-header">Vaccine Stats</h4>
          {vaccine && <Vaccine vaccine= {vaccine}/>}
        </Col>
      </Row>
    </Container>
   );
}
 
export default State;