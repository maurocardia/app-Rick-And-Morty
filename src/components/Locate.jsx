import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CharacterItem from './CharacterItem';
import imge2 from "../images/image2.svg" 



const Locate = () => {
    const [locations,setLocations]=useState({})
    const randomNumber = Math.floor(Math.random()* 126)+1
    const [searchLocation, setSearchLocation] = useState("")
 

    useEffect(()=>{
        axios.get(`https://rickandmortyapi.com/api/location/${randomNumber}`)
        .then(res => setLocations(res.data))
    },[])
    console.log(locations)
    console.log(searchLocation)

    const searchLocationButton = () =>{
        axios.get(`https://rickandmortyapi.com/api/location/${searchLocation}`)
        .then(res => setLocations(res.data))
    }

  

    return (
        <div>
            <div className="containerHead">
                <img src={imge2} alt="" />
                <div>
                    <input type="text" placeholder='Type a location ID' value={searchLocation} onChange={e =>setSearchLocation(e.target.value) }/>
                    <button onClick={searchLocationButton}>Search</button>

                </div>
            </div>
            <body>
                <div className='location'>

                    <div className="containerLocation">
                        <h3>{locations.name}</h3>
                        <div className='containerLocationInfo'>
                            <p>Type: {locations.type}</p>
                            <p>Dimension: {locations.dimension}</p>
                            <p>Population: {(locations.residents)?.length}</p>

                        </div>
                    </div>    
                </div>

              

                <br />
                <div className='containerCharacter'>
                    {locations.residents?.map((resident=>(
                        <CharacterItem key={resident} resident={resident}/>
                    )))}

                </div>
                    
            </body>
        </div>
    );
};

export default Locate;