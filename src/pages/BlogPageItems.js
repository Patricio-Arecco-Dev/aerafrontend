import "../styles/components/pages/BlogPage.css";
import React from "react";
const PoemsItem = (props) => {
  const { name, message, image, body } = props;
  return (
    <div className="card-blog">
      <div className="card-blog-name">
        <h6 className="blog-name">{name}</h6>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </div>
      <div className="card-blog-body">
        <div className="card-blog-text">
          <div className="card-blog-message">
            <p className="blog-message">{message}</p>
            {/* <pre className="blog-message">{message}</pre> */}
            <div dangerouslySetInnerHTML={{ __html: body }} />
          </div>
        </div>
        <div className="card-blog-photo">
          <img className="img-blog-photo" src={image} alt="of " />
        </div>
      </div>
    </div>
  );
};
export default PoemsItem;
