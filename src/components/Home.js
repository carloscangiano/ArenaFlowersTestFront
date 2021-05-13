import React, { useState } from "react";
import Header from './Header';
import SearchForm from './SearchForm';
import CardList from './CardList';

export default function Home() {
  const [countries, setCountries] = useState("")
  return (
    <>
      <div className="bg-info p-2 p-md-5 h-540 d-flex align-items-center mb-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8 offset-md-2">
                <Header />
                <SearchForm countries={value => setCountries(value)}/>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-5">
        <CardList listCountries={countries}/>
      </div>
    </>
  );
}
