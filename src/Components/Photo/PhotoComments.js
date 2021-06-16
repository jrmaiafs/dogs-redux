import React from "react";
import CommentsForm from "./CommentsForm";
import styles from "./PhotoComments.module.css";
import CommentDelete from "./CommentDelete";
import { useSelector } from "react-redux";

const PhotoComments = (props) => {
  const [comments, setComments] = React.useState(() => props.comments);
  const { data } = useSelector(state => state.user)
  const refUl = React.useRef();

  React.useEffect(() => {
    refUl.current.scrollTop = refUl.current.scrollHeight;
  }, []);

  return (
    <>
      <ul
        ref={refUl}
        className={`${styles.comments} ${
          props.single ? styles.singlePhoto : ""
        }`}
      >
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <div className={styles.boxComment}>
              <b>{comment.comment_author}: </b>
              <span>{comment.comment_content}</span>
            </div>
            {data && (
              <div>
                {data.id === props.userID ||
                data.id === Number(comment.user_id) ? (
                  <CommentDelete
                    comments={comments}
                    photoID={props.id}
                    setComments={setComments}
                    Dtrue={true}
                    idComment={comment.comment_ID}
                    commentPostId={comment.comment_post_ID}
                  />
                ) : (
                  <CommentDelete false={false} />
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
      {data && (
        <CommentsForm
          single={props.single}
          setComments={setComments}
          id={props.id}
        />
      )}
    </>
  );
};

export default PhotoComments;
