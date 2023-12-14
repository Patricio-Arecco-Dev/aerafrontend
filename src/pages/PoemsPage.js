import "../styles/components/pages/PoemsPage.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import PoemsItem from "./PoemsPageItems";

const PoemsPage = (props) => {
  const [loading, setLoading] = useState(false);
  const [poems, setPoems] = useState([]);

  useEffect(() => {
    const loadPoems = async () => {
      setLoading(true);
      const response = await axios.get("http://localhost:3000/api/poems");
      setPoems(response.data);
      setLoading(false);
    };
    loadPoems();
  }, []);
  return (
    <section className="poem">
      {loading ? (
        <p>Loading Page. . . </p>
      ) : (
        poems.map((item) => (
          <PoemsItem
            key={item.id_poems}
            name={item.name_poems}
            poem={item.poem_poems}
            image={item.link_img_poems}
            body={item.body}
          />
        ))
      )}
    </section>
  );
};
export default PoemsPage;
