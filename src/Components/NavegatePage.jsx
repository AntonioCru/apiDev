import React, { useState } from "react";
import styles from "./StylesNavegate.module.css";
const NavegatePage = ({ sendNewPage }) => {
  const [page, setPage] = useState(2);

  const aumentar = () => {
    setPage(page + 1);
    console.log(page);
    sendNewPage(page);
  };
  const disminuir = () => {
    setPage(page - 1);
    console.log(page);
    sendNewPage(page);
      
  };

  return (
    <div className={styles.buttonNavegate} id="buttonNavegateId">
      <button className={styles.Abutton} onClick={disminuir}>
        Anterior
      </button>
      <button className={styles.Abutton} onClick={aumentar}>
        Siguiente
      </button>
    </div>
  );
};

export default NavegatePage;
