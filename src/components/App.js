// create your App component here

import React, {useState, useEffect} from "react";

function App() {
const [isLoading, setIsLoading] = useState(false)
const [dogPic, setDogPic] = useState()

useEffect(()=> {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((r) => r.json())
    .then(dog => setDogPic(dog));
    setIsLoading(true)
}, [])
if (!isLoading) return <p>Loading . . .</p>;
return (
<>
    <img 
    src={setDogPic(dogPic)}
    alt="A Random Dog"/>
</>
)    
}




export default App