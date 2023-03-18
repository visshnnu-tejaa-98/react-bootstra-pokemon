import React, { useEffect, useState } from "react";
import "./LandingPage.css";

const LandingPage = ({ searchTerm, setSearchTerm, handleSubmit }) => {
  return (
    <>
      <div className="">
        <h1 className="mt-4">Pokemon</h1>
        <form className="container form mt-5">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="searchterm"
              placeholder="Search pokemon, Eg: pikachu"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              required
            />
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleSubmit}
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LandingPage;
