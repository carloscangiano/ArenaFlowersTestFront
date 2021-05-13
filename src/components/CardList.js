import React, { useState, useEffect } from "react";
import Card from "./Card";


export default function CardList({ listCountries = [] }) {
  const [cards, setcards] = useState(listCountries);

  useEffect(() => {
    listCountries.length > 0 && setcards(listCountries);
  }, [listCountries])

  return (
    <>
      <div className="row row-cols-1 row-cols-md-2"> 
      {cards &&
        cards.map(item => {
          return (
              <div
                className="col mb-5 align-items-stretch"
              >
                <Card
                  country={item}
                />
              </div>
          );
        })}
      </div>
    </>
  );
}
