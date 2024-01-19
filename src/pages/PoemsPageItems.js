import "../styles/components/pages/PoemsPage.css";
import React from "react";
const PoemsItem = (props) => {
  const { name, poem, body } = props;
  return (
    <div className="card-poem">
      <div className="card-poem-title">
        <h6 className="poem-title">{name}</h6>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </div>
      <div className="card-poem-poem">
        <pre className="poem-poem">{poem}</pre>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </div>
    </div>
  );
};
export default PoemsItem;
