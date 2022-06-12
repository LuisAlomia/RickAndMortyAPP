import React from "react";
import style from "./Location.module.css";

//En este componente se indican las caracteristicas principales de la dimension
// tambien cuenta un condicional evitando el ? (encadenamientos)
const Location = ({ data }) => {
  return (
    <>
      {!data ? null : data.residents.length > 0 ? (
        <div>
          <div className={style.contentSubtitle}>
            <h2 className={style.subTitle}>{data.name}</h2>
          </div>
          <ul className={style.infoLocation}>
            <li>
              <span>Type location:</span> {data.type}
            </li>
            <li>
              <span>Dimension:</span> {data.dimension}
            </li>
            <li>
              <span>Number of residents:</span> {data.residents.length}
            </li>
          </ul>
        </div>
      ) : (
        <h2
          className={`${style.subTitle} ${style.subTitleNone}`}
        >{`the dimension does not count ${data.name} with inhabitants look for another between 1-126`}</h2>
      )}
    </>
  );
};

export default Location;
