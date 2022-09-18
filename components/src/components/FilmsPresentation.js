import React from 'react'
export default function FilmssPresentation({films}) {
     console.log(films);
    return (
     <div className='container'>
        {films.map((film)=>(
        <div className='column'>
        <div className='card'>
        <img src={film.img}/>
          <h3>{film.name}</h3>
          <p className='title'>{film.title}</p>
          <p><button>Detail</button></p>
        </div>
      </div>
     ))}</div>   
  )
}
