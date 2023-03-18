import React from "react";

import "./Cards.css";

const Cards = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="card-container">
        {data && (
          <div className=" mb-3 mx-2">
            <div className="">
              <img
                src={`${data.img}`}
                className="card-img-top"
                alt={data.img}
                style={{ width: "6.5rem" }}
              />
              <div className="">
                <p className="">
                  <span className="bold">Name:</span>
                  <strong>{data.name}</strong>
                </p>
                <p className="">
                  <span className="bold">Base Experience:</span>
                  <strong>{data.base_experience}</strong>
                </p>
                <p className="">
                  <span className="bold">Abilities: </span>
                  <strong>
                    {data
                      ? data.abilities.map((ability, idx) => (
                          <span key={ability.ability.name}>
                            {idx === 0
                              ? `${ability.ability.name}`
                              : `, ${ability.ability.name}`}
                          </span>
                        ))
                      : "No Data!"}
                  </strong>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cards;
