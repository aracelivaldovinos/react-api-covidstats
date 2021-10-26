
import './StateDetails.css'
import {Row, Col} from 'react-bootstrap';
// import {GraphUpArrow, GraphDownArrow} from 'react-bootstrap-icons'

const StateDetails = ({details}) => {


  return ( 
    <div className="state-details">
      {details && details.map((item)=>(
        <div className="item" key={item.id}>
          <Row>
          <div className="item-date">
          <h5>{item.date}</h5>
          </div>
          <Col>
          <div className="item-cases">
          {/* <GraphUpArrow/> */}
          <h5>Confirmed: {item.cases}</h5>
          </div>
          </Col>
          <Col>
          <div className="item-deaths">
            {/* <GraphDownArrow/> */}
            <h5>Deaths: {item.deaths}</h5>
          </div>
          </Col>
          </Row>
        </div>
      ))}
    </div>
   );
}
 
export default StateDetails;