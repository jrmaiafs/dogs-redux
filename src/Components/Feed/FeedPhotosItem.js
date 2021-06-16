import React from "react";
import { useSelector } from "react-redux";
import Image from "../Helper/Image";
import Likes from "../Helper/Likes";
import styles from "./FeedPhotosItem.module.css";

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  const {data } = useSelector(state => state.user)
  function handleClick() {
    setModalPhoto(photo);
  }
  return (
    <li className={styles.photoLi}>
      <div onClick={handleClick} className={styles.photo}>
        <Image
          src={photo.src}
          alt={`foto ampliada da(o) carrocha(o) ${photo.title}`}
        />
        <span className={styles.visualizacao}>{photo.accesses}</span>
      </div>
      {data && <Likes userID={data.id} photo={photo} />}
    </li>
  );
};

export default FeedPhotosItem;
