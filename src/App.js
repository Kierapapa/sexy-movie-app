import React from 'react';

const City = ({location}) => {
  return <p>I have lived in {location}</p>
}


const citiesIveLived = [{id:1, name:"Seoul"},{id:2,name:"Tokyo"},{id:3, name:"Vancouver"}];

const App = () => {
  return (
    
    <div><h1>Hello React</h1>
    {citiesIveLived.map(renderCity())}
    </div>
  )
}
export default App;

function renderCity() {
  return city => <City key={city.id} location={city.name} />;
}
