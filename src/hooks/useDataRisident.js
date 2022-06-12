import { useEffect, useState } from "react";

const useDataRisident = (urlResident) => {
  const [resident, setResident] = useState();

  useEffect(() => {
    fetch(urlResident)
      .then((resp) => resp.json())
      .then((resp) => setResident(resp))
      .catch((err) => console.log(err));
  }, []);

  return { resident };
};

export default useDataRisident;
