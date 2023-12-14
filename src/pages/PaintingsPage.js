import "../styles/components/pages/PaintingsPage.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import PaintingsItem from "./PaintingsPageItems";

const PaintingsPage = (props) => {
  const [loading, setLoading] = useState(false);
  const [paintings, setPaintings] = useState([]);

  useEffect(() => {
    const loadPaintings = async () => {
      setLoading(true);
      const response = await axios.get("http://localhost:3000/api/paintings");
      setPaintings(response.data);
      setLoading(false);
    };
    loadPaintings();
  }, []);
  return (
    <section className="paintings">
      {loading ? (
        <p>Loading Page. . . </p>
      ) : (
        paintings.map((item) => (
          <PaintingsItem
            key={item.id_paintings}
            name={item.name_paintings}
            image={item.link_img_paintings}
            body={item.body}
          />
        ))
      )}
    </section>
  );
};
export default PaintingsPage;
