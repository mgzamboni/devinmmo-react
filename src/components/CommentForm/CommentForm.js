import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { TextInput } from "../TextInput";
import * as Yup from "yup";

export const CommentForm = ({ gameTitle, setComments }) => {
  const handleCommentStorage = (valores) => {
    const comentario = [{ id: 0, game: gameTitle, likeCount: 0, ...valores }];
    const getLocalStorage = JSON.parse(localStorage.getItem("comentarios"));

    if (getLocalStorage != null) {
      comentario[0].id = getLocalStorage.length;
      getLocalStorage.push(...comentario);
      setComments(getLocalStorage);
      localStorage.setItem("comentarios", JSON.stringify(getLocalStorage));
    } else {
      localStorage.setItem("comentarios", JSON.stringify(comentario));
      setComments(getLocalStorage);
    }
  };

  return (
    <>
      <Formik
        validateOnChange={false}
        validateOnBlur={false}
        validationSchema={Yup.object().shape({
          nome: Yup.string()
            .min(2, "Nome muito curto! (mín. 2 caracteres)")
            .max(50, "Nome muito comprido! (máx. 50 caracteres)")
            .required("Por favor, insira seu nome!"),
          email: Yup.string().email("Email inválido!").required("Por favor, insira seu email!"),
          comentario: Yup.string().required("Por favor, insira seu comentário!"),
        })}
        initialValues={userInitialValues}
        onSubmit={(values, { resetForm }) => {
          handleCommentStorage(values);
          resetForm(userInitialValues);
        }}
      >
        {(formProps) => {
          const { handleSubmit } = formProps;
          return (
            <Form>
              <Field component={TextInput} name="nome" label="Nome:" />
              <ErrorMessage
                name="nome"
                render={(msg) => <div style={{ color: "red" }}>{msg}</div>}
              />
              <Field component={TextInput} name="email" label="Email:" />
              <ErrorMessage
                name="email"
                render={(msg) => <div style={{ color: "red" }}>{msg}</div>}
              />
              <Field
                component={TextInput}
                TextInput
                type="textarea"
                name="comentario"
                label="Comentário:"
              />
              <ErrorMessage
                name="comentario"
                render={(msg) => <div style={{ color: "red" }}>{msg}</div>}
              />
              <button type="button" onClick={handleSubmit}>
                Salvar
              </button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

const userInitialValues = {
  nome: "",
  email: "",
  comentario: "",
};
