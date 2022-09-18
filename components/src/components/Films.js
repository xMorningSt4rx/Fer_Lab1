import React from 'react'


export default function Films() {
  return (
    <div className="grid-container">
      {Films.map((film) => (
        <div className="column grid-item">
          <div className="card">
            <img src={film.img} />
            <h3>{film.name}</h3>
            <p className="title">{film.title}</p>
            <p>
              <button>Detail</button>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
