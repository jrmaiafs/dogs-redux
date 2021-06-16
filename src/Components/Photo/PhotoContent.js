import React from "react";
import { Link } from "react-router-dom";
import styles from "./PhotoContent.module.css";
import PhotoComments from "./PhotoComments";
import PhotoDelete from "./PhotoDelete";
import Image from "../Helper/Image";
import { useSelector } from "react-redux";

const PhotoContent = ({ single }) => {
  const { photo, comments } = useSelector((state) => state.photo.data);
  const {data} = useSelector(state => state.user)
  return (
    <div className={`${styles.photo} ${single ? styles.singlePhoto : ""}`}>
      <div className={styles.img}>
        <Image
          src={photo.src}
          alt={`foto ampliada da(o) carrocha(o) ${photo.title}`}
        />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            {data && data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}
            <span className={styles.visualizacoes}>{photo.accesses}</span>
          </p>
          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.age} anos</li>
            <li>{photo.weight} kg</li>
          </ul>
        </div>
      </div>
      <PhotoComments
        single={single}
        id={photo.id}
        userID={photo.user_ID}
        comments={comments}
      />
    </div>
  );
};

export default PhotoContent;
