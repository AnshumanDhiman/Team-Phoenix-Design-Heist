import './Cards.css'
import data from '../data'
import value from '../../assets/images/img1.png';
import { Row, Col, Card } from 'antd';



function Cards(props){
  
    return (
      <>
       <Row className='row-edit'>
      {data.map((val) => {
        return (
          <Col span={6} className='col-edit'> 
          <Card
    hoverable
    style={{ width: 250 }}
    className='card-edit'
    cover={<img src={value} alt="example" />}
  >
  <p className='rating-edit'> {val.rating}</p>
  </Card>
  <br/>
  <h2>{val.name}</h2>
   <p>{val.description}</p>
  <p>{val.price}</p>
  </Col>
      );
      })}
      </Row>
      </>
    )
} 

export default Cards;