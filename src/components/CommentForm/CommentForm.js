import React from "react";
import { Formik, Form, Field } from "formik";
import { TextInput } from "../TextInput";

export const CommentForm = ({ gameTitle }) => {
  const handleCommentStorage = (valores) => {
    const comentario = [{ game: gameTitle, likeCount: 0, ...valores }];
    const getLocalStorage = JSON.parse(localStorage.getItem("comentarios"));
    console.log(getLocalStorage);

    if (getLocalStorage != null) {
      getLocalStorage.push(...comentario);
      console.log(getLocalStorage);
      localStorage.setItem("comentarios", JSON.stringify(getLocalStorage));
    } else localStorage.setItem("comentarios", JSON.stringify(comentario));
  };

  return (
    <>
      <Formik initialValues={userInitialValues} onSubmit={handleCommentStorage}>
        {(formProps) => {
          const { handleSubmit } = formProps;
          return (
            <Form>
              <Field component={TextInput} name="nome" label="Nome:" />
              <Field component={TextInput} name="email" label="Email:" />
              <Field
                component={TextInput}
                TextInput
                type="textarea"
                name="comentario"
                label="Comentário:"
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
