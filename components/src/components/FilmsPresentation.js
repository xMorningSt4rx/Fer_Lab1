import React from 'react'
export default function FilmssPresentation({films}) {
     console.log(films);
    return (
      <div className="grid-container">
      {films.map((film) => (
        <div className="column grid-item">
          <div className="card">
            <img src={film.img} />
            
            <p className="title">{film.title}</p>
            <p className="year" >Year: {film.year}</p>
            <p className="nation" >Nation: {film.nation}</p>
            <p>
              <button>Detail</button> <button className='button2'>Play</button>
            
            </p>
            
          </div>
        </div>
     ))}</div>   
  )
}
