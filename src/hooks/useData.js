import { useEffect, useState } from "react";

//genera un numero aleatorio para la localizacion la primera vez que carga la pagina
const randomLocation = Math.ceil(Math.random() * 125);

//Hook personalizado que se encarga de hacer el llamado a la API
const useData = (locationNumber = randomLocation) => {
  const [data, setData] = useState();
  const [dataDimension, setDataDimension] = useState();

  const URL = `https://rickandmortyapi.com/api/location/${locationNumber}`;

  //se realiza la llamada a la API
  useEffect(() => {
    fetch(URL)
      .then((resp) => resp.json())
      .then((resp) => setData(resp))
      .catch((err) => console.log(err));
  }, [locationNumber]);

  //Verifica si existe la Data para llamar el Array de URL de lo habitantes
  useEffect(() => {
    if (data !== undefined) {
      setDataDimension(data.residents);
    }
  }, [data]);

  //Retorna la Data y el Array de habitantes por cada dimension
  return { data, dataDimension };
};

export default useData;
