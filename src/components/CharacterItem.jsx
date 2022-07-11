import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const CharacterItem = ({resident}) => {
const [character,setCharacter]=useState({})
const [status,setStatus]=useState(character.status)



useEffect(()=>{
    axios.get(resident)
    .then(res => {setCharacter(res.data)
                  setStatus(res.data.status)})
},[])
console.log(character)
console.log(status)

const buttonStatus = () =>{
    if(status == "Alive"){
        return(
            <div className='containerStatus'>
                <div className='alive'>
                </div>
                <small className='status'>Alive</small>
            </div>
        )
    }else if (status == "Dead"){
        return(
            <div className='containerStatus'>
                <div className='dead'>
                </div>
                <small className='status'>Dead</small>
        </div>
        )
    }else{
        return(
            <div className='containerStatus'>
                <div className='unknown'>
                </div>
                <small className='status'>Unknown</small>
        </div>
        )
    }
}

    return (
        <div className='characterInfo'>
            <div className='image'>
                <img src={character.image} alt="" />
            </div>
            <div className='info'>
                

                <li>{character.name}</li>
                {buttonStatus()}
               
                <p><b>Species:  </b> {character.species} </p>
                
                <p><b>Origin:  </b> {character.origin?.name}</p>
                
                <p><b>Episodes where he appears:  </b> {(character.episode)?.length} </p>
                
            </div>


        </div>
    );
};

export default CharacterItem;