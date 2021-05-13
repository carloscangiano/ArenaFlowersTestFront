import React, { useState } from "react";
import CountriesService from "../services/countriesService";

export default function SearchForm({ countries }) {
  const [text, setText] = useState("");

  const buttonSearch = (event) => {
    event.preventDefault();
    text.length > 0 && callCountriesApi();
  };

  const callCountriesApi = async () => {
    const region = "Europe";

    await CountriesService.getCountriesByName(text, region).then((res) => {
      console.log(`res`, res);
      if (res.status) {
        countries(res.data);
      }
    });
  };

  const handleTextChanged = (textInput) => {
    const value = textInput.target.value;
    setText(value);
  };
  return (
    <>
    <form className="form-inline mb-4 d-block">
      <div className="input-group w-100 position-relative">
        <input
          className="form-control form-control-lg flex-fill border-white"
          placeholder="Enter the country you want to search"
          onChange={handleTextChanged}
        />
        <div className="input-group-append">
          <button
            className={`btn btn-outline-light ${
              text.length === 0 ? "disabled" : ""
            }`}
            onClick={buttonSearch}
          >
            Search
          </button>
        </div>
      </div>
    </form>
    </>
  );
}
