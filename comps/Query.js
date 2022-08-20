//import "./styles.css";

import React from "react";
import { useState } from "react";

export default function Query() {
  //

  // var search query
  const [query, setQuery] = useState("");
  const [urlFormated, setUrlFormated] = useState("");

  // TOOGLES for search and posts
  const [searchStatus, setSearchStatus] = useState(false);

  //
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setQuery("");
    setSearchStatus(false);
  };

  // HANDLE SEARCH SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    setUrlFormated(`https://google.com/search?q=${query}`);
    setSearchStatus(!searchStatus);
    console.log(urlFormated);
  };

  //
  //

  return (
    <div className="">
      <h4 className="border-bottom text-info p-2 mb-4 font-weight-bold">
        <span role="img" aria-label="check">
          📃
        </span>{" "}
        Search Queries{" "}
      </h4>
      <div className=" input-group mb-3">
        <div className="input-group-prepend">
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon1"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
        <input
          value={query}
          type="text"
          className="form-control"
          placeholder="Search Query"
          onChange={handleChange}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-info"
            type="button"
            id="button-addon2"
            onClick={handleSubmit}
          >
            Set Search
          </button>
        </div>
      </div>
      <div className="card bg-light mb-4 text-center shadow">
        <div className="card-header">Query 2 Google Search</div>
        <div className="card-body">
          {searchStatus ? (
            <>
              <h5 className="card-title text-info">
                <span role="img" aria-label="check">
                  ✅
                </span>{" "}
                Search :{" "}
                <span className="font-weight-bold text-dark">{query}</span>
              </h5>
              <a
                href={urlFormated}
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none"
              >
                <button type="button" className="btn btn-info btn-lg btn-block">
                  Google {query}
                </button>
              </a>
            </>
          ) : (
            <>
              <h5 className="card-title">Your Search</h5>
              <a
                href={urlFormated}
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none"
              >
                <button
                  type="button"
                  className="btn btn-outline-dark btn-lg btn-block"
                >
                  Go to Search Result
                </button>
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
