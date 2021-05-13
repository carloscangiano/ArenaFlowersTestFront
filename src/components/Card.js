import React from 'react';

export default function Card({country}) {
  return (
<>
<div className="card mb-3 border-info" >
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src={country.img} alt="..." width="180" height="150"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{country.countryName}</h5>
        <p className="card-text">{country.capitalCity}</p>
      </div>
    </div>
  </div>
</div>
</>
  )
}
