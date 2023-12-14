import "../styles/components/pages/BlogPage.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogItem from "./BlogPageItems";

const BlogPage = (props) => {
  const [loading, setLoading] = useState(false);
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const loadBlog = async () => {
      setLoading(true);
      const response = await axios.get("http://localhost:3000/api/messages");
      setBlog(response.data);
      setLoading(false);
    };
    loadBlog();
  }, []);
  return (
    <section className="blog">
      {loading ? (
        <p>Loading Page. . . </p>
      ) : (
        blog.map((item) => (
          <BlogItem
            key={item.id_messenger}
            name={item.name_messenger}
            message={item.content_messenger}
            image={item.link_img_messenger}
            body={item.body}
          />
        ))
      )}
    </section>
  );
};
export default BlogPage;
