import { useEffect, useState } from "react";
const useFetch = (URL) => {
  const [datas, setData] = useState([]);

  useEffect(() => {
    //se ejecuta al final de que se carga el componente

    if (URL == null) {
      console.log("no se busco");
    } else {
      fetch(URL)
        .then((res) => res.json())
        .then((respuesta) => setData(respuesta));
    }
  }, [URL]); //recibe las props en el array

    console.log(datas);
  return datas;
};
export default useFetch;
