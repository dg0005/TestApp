import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import GridCard from './components/grid';

function App() {
  
  const[pList,setpList]=useState()

  useEffect(()=>{
    callAPI()
  },[])

  const callAPI =()=>{
    fetch('https://api.npoint.io/20c1afef1661881ddc9c').then((response) => response.json())
    .then((data) => {
        JSON.stringify(data)
        // settList(data.teamsList)
        setpList(data.playerList)
    });

  }

  return (
    <div className='m-3'>
    <Card className='App'>
      <Card.Header className='App'>LIST OF PLAYERS</Card.Header>
    </Card>

    {pList && <GridCard playerList={pList}/>}

    </div>
  );
}

export default App;
