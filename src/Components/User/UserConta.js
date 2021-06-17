import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../../store/userData";
import Feed from "../Feed/Feed";
import styles from "./UserConta.module.css";

const UserConta = () => {
  const { data } = useSelector((state) => state.user);
  const { data: dataUser } = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  const [photos, setPhotos] = React.useState({
    acessos: 0,
    curtidas: 0,
    fotos: 0,
  });

  React.useEffect(() => {
    const total = -1;
    const page = 1;
    const user = data.id;
    dispatch(userData({ total, user, page }));
  }, [dispatch, data.id]);

  React.useEffect(() => {
    if (dataUser) {
      const acessos = dataUser
        .map((foto) => Number(foto.accesses))
        .reduce((a, b) => a + b);
      const curtidas = dataUser
        .map((foto) => Number(foto.curtidas))
        .reduce((a, b) => a + b);
      const fotos = dataUser.length;
      setPhotos({ acessos, curtidas, fotos });
    }
  }, [dataUser]);

  return (
    <div className={styles.main}>
      <div className={styles.dados}>
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
      </div>
      <Feed user={data.id} />
    </div>
  );
};

export default UserConta;
