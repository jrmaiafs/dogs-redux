import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhoto } from "../../store/photo";
import { openModal } from "../../store/ui";
import Image from "../Helper/Image";
import Likes from "../Helper/Likes";
import styles from "./FeedPhotosItem.module.css";

const FeedPhotosItem = ({ photo }) => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.user);
  function handleClick() {
    dispatch(openModal());
    dispatch(fetchPhoto(photo.id));
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
