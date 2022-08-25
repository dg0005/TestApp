import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import moment from "moment";

const  GridCard =(props)=> {
    const {playerList} = props
    const[query,setQuery] = useState('')


  return (
    <>
            <div className='p-2 m-2'>
                <input 
                    value={query} 
                    placeholder="Search by name..." 
                    type='text'
                    className='search d-flex justify-content-center'
                    onChange={e=>setQuery(e.target.value)}/>
                </div>

           
           

            <Row xs={1} md={6} className="g-4">
                { playerList &&   
                playerList.filter((pl)=>pl.PFName.toLowerCase().includes(query) || pl.TName.toLowerCase().includes(query))
                .sort((a,b) => (a.PFName.toLowerCase() > b.PFName.toLowerCase()) ? 1 : ((b.PFName.toLowerCase() > a.PFName.toLowerCase()) ? -1 : 0))
                .map((ele,key)=>(
                    <Col key={ele.Id}>
                    <Card >
                        {ele.Id && <Card.Img variant="top" src={require(`../assets/images/${ele.Id}.jpg`)} /> }
                        <Card.Body>
                        <Card.Title>{ele.PFName}</Card.Title>
                        <Card.Text>
                            {ele.SkillDesc}
                        </Card.Text>
                        <Card.Text>
                            $ {ele.Value}
                        </Card.Text>
                       
                        <Card.Text>
                            {ele.UpComingMatchesList[0].CCode} vs {ele.UpComingMatchesList[0].VsCCode}
                        </Card.Text>
                        <Card.Text>
                            {/* {ele.UpComingMatchesList[0].MDate} */}
                             {ele.UpComingMatchesList[0].MDate ? moment(ele.UpComingMatchesList[0].MDate).format('DD-MM-YYYY h:mm:ss') : 'Not Available'}
                       </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
    </Row>
    </>
    
  );
}

export default GridCard;