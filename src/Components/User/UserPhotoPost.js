import React from "react";
import Input from "../Form/Input";
import Button from "../Form/Button";
import useForm from "../../Hooks/useForm";
import styles from "./UserPhotoPost.module.css";
import Error from "../Helper/Error";
import { useNavigate } from "react-router-dom";
import Head from "../Helper/Head";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostPhoto } from "../../store/photoPost";

const UserPhotoPost = () => {
  const nome = useForm();
  const peso = useForm("number");
  const idade = useForm("number");
  const [img, setImg] = React.useState({});
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.token.data);
  const { data, error, loading } = useSelector((state) => state.photoPost);

  const navigate = useNavigate();

  React.useEffect(() => {
    if (data) {
      navigate("/conta");
    }
  }, [data, navigate]);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("name", nome.value);
    formData.append("weight", peso.value);
    formData.append("age", idade.value);

    if (peso.error === null && idade.error === null) {
      dispatch(fetchPostPhoto({ formData, token }));
    }
  }

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }
  return (
    <section className={styles.photoPost}>
      <Head
        title="Poste sua foto"
        description="aqui você pode postar qualquer foto que você quiser"
      />
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="text" name="peso" {...peso} />
        <Input label="Idade" type="text" name="idade" {...idade} />
        <input
          multiple
          className={styles.file}
          type="file"
          name="img"
          id="img"
          onChange={handleImgChange}
        />
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Error error={error} />
      </form>
      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url('${img.preview}')` }}
          ></div>
        )}
      </div>
    </section>
  );
};

export default UserPhotoPost;
