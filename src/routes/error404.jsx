
// Error404.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <div className='error404'>
      <div>
        <h1>Upps parece que lo que estás buscando no existe.</h1></div>
       

              <Link id="volvereror" to='/'> Volver
       
      </Link>
    </div>
  );
};

export default Error404;
