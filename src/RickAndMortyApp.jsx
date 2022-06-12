import React, { useState } from "react";
import Location from "./components/Location";
import ResidentInfo from "./components/ResidentInfo";
import SearchBar from "./components/SearchBar";
import useData from "./hooks/useData";
import style from "./RickAndMortyApp.module.css";
import logo from "../src/img/logo.svg";
import loading from "./img/Infinity-3.8s-397px.svg";
import imageBg from "./img//Photon-20s-2159px.png";

//Componente raiz en el que se cargan los datos y los demas componentes
const RickAndMortyApp = () => {
  const [locationNumber, setLocationNumber] = useState();
  const [hiddenSearch, setHiddenSearch] = useState(false);

  //llamada del custom hook
  const { data, dataDimension } = useData(locationNumber);

  //renderizado condicional del input search
  const handleSearch = () => {
    setHiddenSearch(!hiddenSearch);
  };

  return (
    <div className={style.contentApp}>
      <div className={style.imageBg}>
        <img src={imageBg} alt="image bg" />
      </div>
      <nav className={style.navBar}>
        <div className={style.logo}>
          <span>
            <img src={logo} alt="logo" />
          </span>
        </div>
        <h1 className={style.title}>RICK AND MORTY APP</h1>
      </nav>
      <main className={style.main}>
        <section
          className={`${style.cardContainer} animate__animated animate__fadeIn animate__delay-1.5s`}
        >
          <a id="title" className={style.upText}></a>
          {dataDimension ? (
            dataDimension?.map((urlResident) => (
              <ResidentInfo key={urlResident} urlResident={urlResident} />
            ))
          ) : (
            <div className={style.loading}>
              <img src={loading} alt="loading" />
            </div>
          )}
          <a className={style.up} href="#title">
            <i className="fa-solid fa-up-long"></i>
          </a>
        </section>
        <aside className={style.aside}>
          <div className={style.search}>
            <button className={style.buttonSearch} onClick={handleSearch}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            {hiddenSearch && (
              <SearchBar setLocationNumber={setLocationNumber} />
            )}
          </div>
          <Location data={data} />
        </aside>
      </main>
    </div>
  );
};

export default RickAndMortyApp;
