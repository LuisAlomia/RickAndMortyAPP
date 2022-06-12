import useDataRisident from "../hooks/useDataRisident";
import style from "./ResidentInfo..module.css";

const ResidentInfo = ({ urlResident }) => {
  //Hook para llamar la data recibe como parametro el endpoint
  const { resident } = useDataRisident(urlResident);

  //renderizado condicional para el color de la card
  const bgAlive = resident?.status === "Alive" && style.bgAlive;
  const bgDead = resident?.status === "Dead" && style.bgDead;
  const bgUnknown = resident?.status === "unknown" && style.bgUnknown;

  return (
    <>
      {resident && (
        <div
          className={`${style.card} ${bgAlive} ${bgDead} ${bgUnknown} animate__animated animate__fadeIn animate__delay-1.5s`}
        >
          <div className={style.image}>
            <img src={resident.image} alt={resident.name} />
          </div>
          <ul className={style.info}>
            <li
              className={`${style.statusCharacter} ${bgAlive} ${bgDead} ${bgUnknown}`}
            ></li>
            <li>
              <span>Name:</span> {resident.name}
            </li>
            <li>
              <span>Status:</span> {resident.status}
            </li>
            <li>
              <span>Origin:</span> {resident.origin.name}
            </li>
            <li>
              <span>Episodes where appear:</span> {resident.episode.length}
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default ResidentInfo;
