// Importación de estilos
import "../styles/components/pages/ContactPage.css";
// Declaración de dependencias
import React, { useState } from "react";
//import axios from "axios";

const ContactPage = (props) => {
  // NotaAlPie_1.
  const initialForm = {
    name_messenger: "",
    email_messenger: "",
    img_messenger: "",
    content_messenger: "",
  };
  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState("Complete los campos Nombre y Mensaje");
  const [formData, setFormData] = useState(initialForm);
  const [stateButton, setStateButton] = useState(true);
  const [previewSource, setPreviewSource] = useState("");
  const [fileInputState, setFileInputState] = useState("");

  //! Capta los cambios del input del Archivo
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file); //!  Llama la Función Vista Previa
    setFileInputState(file.name);
  };
  //!  Función Vista Previa
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };
  //! Capta los cambios de los inputs Nombre, Mail y Mensaje
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((oldData) => ({
      ...oldData,
      [name]: value,
    }));
    if (
      formData.name_messenger.length >= 3 &&
      formData.content_messenger.length >= 4
    ) {
      setStateButton(false);
      setMsg("");
    } else {
      setStateButton(true);
      setMsg("Complete los campos Nombre y Mensaje");
    }
  };
  //!  Función Subir Imagen
  const uploadImage = async (base64EncodedImage) => {
    //console.log(base64EncodedImage);
    try {
      const response = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        body: JSON.stringify({ file: base64EncodedImage, objText: formData }),
        headers: { "Content-type": "application/json" },
      });
      console.log("RESPONSE", response);
      setSending(false);
      setMsg("Su mensaje fué enviado con Éxito");
      setFormData(initialForm);
      setPreviewSource("");
      setFileInputState("");
      //previewFile(""); //!  Llama la Función Vista Previa
    } catch (error) {
      console.error(error);
    }
  };
  //! Envío del Formulario a la API
  const handleSubmit = async (e) => {
    e.preventDefault(); // NotaAlPie_2.
    console.log("FORM", formData); //! este
    setSending(true);
    uploadImage(previewSource); //!  Llama la Función Subir Imagen
  };

  //! Estructura de la pagina
  return (
    <main className="contact">
      <div>
        <h2 className="h2_contactPage">
          Deje un mensaje o contribución a la biografía
        </h2>
        <form
          action="/contact"
          method="post"
          onSubmit={handleSubmit}
          className="contactForm"
        >
          <p className="p_contactPage">
            <label className="label_contactPage" htmlFor="name_messenger">
              Nombre:
            </label>
            <input
              className="input_contactPage"
              type="text"
              name="name_messenger"
              value={formData.name_messenger}
              onChange={handleChange}
              placeholder="Tu Nombre será Publicado"
            />
          </p>
          <p className="p_contactPage">
            <label className="label_contactPage" htmlFor="email_messenger">
              E-mail:
            </label>
            <input
              className="input_contactPage"
              type="email"
              name="email_messenger"
              value={formData.email_messenger}
              onChange={handleChange}
              placeholder="Si lo deseas puedes incluir tu e-mail que No será Publicado"
            />
          </p>
          <p className="p_contactPage">
            <label className="label_contactPage" htmlFor="img_messenger">
              Imagen:
            </label>
            <input
              className="input_contactPage"
              type="file"
              name="img_messenger"
              onChange={handleFileInputChange}
              placeholder={fileInputState}
            />
          </p>
          <p className="p_contactPage">
            <label className="label_contactPage" htmlFor="content_messenger">
              Mensaje
            </label>
            <textarea
              className="textarea_contactPage"
              name="content_messenger"
              value={formData.content_messenger}
              onChange={handleChange}
              placeholder="Escribe en esta área de texto el mensaje que desees publicar"
            ></textarea>
          </p>
          <p className="submitForm">
            <button
              className="input_contactPage"
              type="submit"
              disabled={stateButton}
            >
              Enviar
            </button>
            {/* <input className="input_contactPage" type="submit" value="Enviar" disabled="true"/> */}
          </p>
          <div className="submitFormMsg">
            {sending ? <p className="submitForm">Enviando. . .</p> : null}
            {msg ? <p className="submitForm">{msg}</p> : null}
          </div>
        </form>
      </div>
      <div className="data">
        <h2 className="h2_contactPage">Si desea contactar al administrador</h2>
        <ul className="lu_contactPage">
          <li className="li_contactPage">N° Teléfono: +549 3743 585 787</li>
          <li className="li_contactPage">E-mail: patricioarecco@gmail.com</li>
        </ul>
        <div className="div_image">
          {previewSource && (
            <img src={previewSource} alt="chosen" style={{ height: "200px" }} />
          )}
        </div>
      </div>
    </main>
  );
};
export default ContactPage;

/* NotaAlPie_1: Los props son en los componentes ReactJS lo que los
argumentos son en las funciones Javascript. Es información que le llega
cuando es invocado el componente */

/* NotaAlPie_2: Con el preventDefault() hacemos que React tome el control
de la carga de la pagina, no no agregamos esta linea lo que sucede es que
el control lo toma HTML y por defecto HTML carga la pagina cuando es
llamada y cada vez que se modifica el contenido de un elemento input */
