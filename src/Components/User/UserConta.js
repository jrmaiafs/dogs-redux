import React from "react";
import { useSelector } from "react-redux";
import { PHOTOS_GET } from "../../api";
import useFetch from "../../Hooks/useFetch";
import Feed from "../Feed/Feed";
import styles from "./UserConta.module.css";

const UserConta = () => {
  const { data } = useSelector((state) => state.user);
  const { request } = useFetch();
  const [photos, setPhotos] = React.useState({
    acessos: 0,
    curtidas: 0,
    fotos: 0,
  });

  // React.useEffect(() => {
  //   const total = 1;
  //   const page = 1;
  //   const user = data.id;

  //   async function fetchPhotos() {
  //     const { url, options } = PHOTOS_GET({ page, total, user });
  //     const { response, json } = await request(url, options);
  //     if (response.ok && json.length) {
  //       const acessos = json
  //         .map((foto) => Number(foto.accesses))
  //         .reduce((a, b) => a + b);
  //       const curtidas = json
  //         .map((foto) => Number(foto.curtidas))
  //         .reduce((a, b) => a + b);
  //       const fotos = json.length;
  //       setPhotos({ acessos, curtidas, fotos });
  //     }
  //   }
  //   fetchPhotos();
  // }, [request, data]);
  return (
    <div className={styles.main}>
      {/* <div className={styles.dados}>
        <li className={styles.numeros}>
          <b>Nome:</b> <p>{data && data.name}</p>
        </li>
        <li className={styles.numeros}>
          <b>Email:</b> <p>{data && data.email}</p>
        </li>
        <li className={styles.numeros}>
          <b>Fotos:</b> <p>{photos && photos.fotos}</p>
        </li>
        <li className={styles.numeros}>
          <b>Curtidas: </b> <p>{photos && photos.curtidas}</p>
        </li>
        <li className={styles.numeros}>
          <b>Visualizações: </b> <p>{photos && photos.acessos}</p>
        </li>
      </div> */}
      <Feed user={data.id} />
    </div>
  );
};

export default UserConta;
