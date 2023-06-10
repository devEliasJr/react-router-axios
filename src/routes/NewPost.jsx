//styles
import "./NewPost.css";
//hooks
import { useState } from "react";
//axios
import blogFetch from "../axios/config";
//router
import { useNavigate } from "react-router-dom";

const NewPost = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const CreatePost = async (e) => {
    e.preventDefault();

    const post = { title, body, userId: 1 };
    console.log(post)
    await blogFetch.post("/posts", 
    {body: post})

    navigate("/")
  };

  return (
    <div className="new-post">
      <h2>Inserir novo post</h2>
      <form onSubmit={(e) => CreatePost(e)}>
        <div className="form-control">
          <label htmlFor="title">Título</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Digite o título"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="body">Conteudo</label>
          <textarea
            type="text"
            id="body"
            name="body"
            placeholder="Digite o conteudo"
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <input type="submit" value="Criar Post" className="btn" />
      </form>
    </div>
  );
};

export default NewPost;
