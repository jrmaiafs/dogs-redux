import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../store/ui";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import PhotoContent from "../Photo/PhotoContent";
import styles from "./FeedModal.module.css";

const FeedModal = () => {
  const { modal } = useSelector((state) => state.ui);
  const { data, error, loading } = useSelector((state) => state.photo);
  const dispatch = useDispatch();

  function handleOutSideClick(event) {
    if (event.target === event.currentTarget) {
      dispatch(closeModal());
    }
  }

  React.useEffect(() => {
    dispatch(closeModal());
  }, [dispatch]);

  if (!modal) return null;

  return (
    <div onClick={handleOutSideClick} className={styles.modal}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent />}
    </div>
  );
};

export default FeedModal;
