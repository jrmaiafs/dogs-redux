import React from "react";
import FeedModal from "./FeedModal";
import FeedPhotos from "./FeedPhotos";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { loadNewPhotos, resetStateFeed } from "../../store/feed";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";

const Feed = ({ user }) => {
  const { loading, infinite, list, error } = useSelector((state) => state.feed);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(resetStateFeed());
    dispatch(loadNewPhotos({ user, total: 3 }));
  }, [dispatch, user]);

  React.useEffect(() => {
    let wait = false;
    function infinityScroll() {
      if (infinite) {
        const scroll = window.scrollY;
        const heigth = document.body.offsetHeight - window.innerHeight;
        if (scroll > heigth * 0.75 && !wait) {
          dispatch(loadNewPhotos({ user, total: 3 }));
          wait = true;

          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    }
    window.addEventListener("scroll", infinityScroll);
    window.addEventListener("wheel", infinityScroll);
    return () => {
      window.removeEventListener("scroll", infinityScroll);
      window.removeEventListener("wheel", infinityScroll);
    };
  }, [infinite, dispatch, user]);

  return (
    <div>
      <FeedModal />
      {error && <Error />}
      {loading && <Loading />}
      {list.length > 0 && <FeedPhotos />}
    </div>
  );
};

Feed.defaultProps = {
  user: 0,
};

Feed.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
};

export default Feed;
