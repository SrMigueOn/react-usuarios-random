import React, { useState } from 'react';
import axios from 'axios';

const RandomUserCard = () => {
  const [users, setUsers] = useState([]);

  const fetchRandomUser = async () => {
    try {
      const response = await axios.get('https://randomuser.me/api/?gender=female');
      const newUser = response.data.results[0];
      setUsers(prevUsers => [...prevUsers, newUser]);
    } catch (error) {
      console.log(error);
    }
  };

  const clearUserCards = () => {
    setUsers([]);
  };

  return (
    <div className="contenedor-1">
        <h1>REACT USUARIOS RANDOM</h1>
        <div className="contenedor-2">
        <button className='generar-usuario' onClick={fetchRandomUser}>Generar usuario</button>
        <button className='borrar-tarjetas' onClick={clearUserCards}>Borrar todas las cartas</button>
        </div>
    <div className="contenedor-3">
        {users.map((user, index) => (
          <div key={index} className="tarjeta">
            <img src={user.picture.large} alt="User" className='imagen'/>
            <h2>{`${user.name.first} ${user.name.last}`}</h2>
            </div>
        ))}
      </div>
    </div>
  );
};

export default RandomUserCard;