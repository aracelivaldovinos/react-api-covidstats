import useFetch from "../useFetch/useFetch";
import './Vaccine.css'
import {Row, Col} from "react-bootstrap";

const Vaccine = ({vaccine}) => {
  // console.log(vaccine)

  return ( 
    <div className="vaccine-coverage">
      {vaccine && vaccine.timeline.map((item) =>(
         <div className="item" key={item.id}>
           <Row>
          <div className="vaccine-date">
            <h5>{item.date}</h5>
          </div>
          <Col>
          <div className="vaccine-daily">
            <h5>Daily: {item.daily}</h5>
          </div>
          </Col>
          <Col>
          <div className="vaccine-total">
            <h5>Total: {item.total}</h5>
          </div>
          </Col>
          </Row>
         </div>))}
    </div>
   );
}
 
export default Vaccine;