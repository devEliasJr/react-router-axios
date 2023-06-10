import "./Admin.css";

import blogFetch from "../axios/config";

import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const Admin = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await blogFetch.get("/posts");

      const data = response.data;
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  const deletePost = async (id) => {
    await blogFetch.delete(`/posts/${posts.id}`);

    const filteredPosts = posts.filter((post) => 
      post.id !== id
    );

    setPosts(filteredPosts);
  };

  return (
    <div>
      <h1>Gerenciar Posts</h1>
      {posts.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <div className="actions">
              <Link to={`/posts/edit/${post.id}`} className="btn edit-btn">Editar</Link>
              <button
                className="btn delete-btn"
                onClick={() => {
                  deletePost(post.id);
                }}
              >
                Excluir
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Admin;
