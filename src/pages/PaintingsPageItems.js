import "../styles/components/pages/PaintingsPage.css";
import Modal from "./ModalWindow"; //!Agregado
// import React from "react";
import React, { useState } from "react"; //!Agregado

const PaintingsItem = (props) => {
  const { name, image, body } = props;
  const [modalState, changeModalState] = useState(false);
  return (
    <div className="card-painting">
      <div className="card-painting-photo">
        <img className="card-img" src={image} alt="of " 
         onClick={() => changeModalState(!modalState)}
        />
      </div>
      <div className="card-painting-title">
        <h6 className="painting-title">{name}</h6>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </div>
      <Modal state={modalState} changeState={changeModalState}>
        <img className="super-img" src={image} alt="off"></img>
      </Modal>
    </div>
  );
};
export default PaintingsItem;
