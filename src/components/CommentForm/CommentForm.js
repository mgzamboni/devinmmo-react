import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { TextInput } from "../TextInput";
import * as Yup from "yup";
import {
  StyledErrorMessage,
  StyledFormBox,
  StyledFormField,
  StyledFormTextField,
  StyledHDescription,
  StyledUserInfoInput,
} from "./CommentForm.styles";
import { Button } from "../Button";

export const CommentForm = ({ gameTitle, setComments }) => {
  const handleCommentStorage = (values) => {
    const comentario = [{ id: 0, game: gameTitle, likeCount: 0, ...values }];

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
    <Formik
      validateOnChange={false}
      validateOnBlur={false}
      validationSchema={Yup.object().shape({
        nome: Yup.string()
          .min(2, "Nome muito curto! (mín. 2 caracteres)")
          .max(50, "Nome muito comprido! (máx. 50 caracteres)")
          .required("Por favor, insira seu nome!"),
        email: Yup.string()
          .email("Email inválido!")
          .required("Por favor, insira seu email!"),
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
          <StyledFormBox>
            <StyledHDescription>Comentários</StyledHDescription>
            <Form>
              <StyledUserInfoInput>
                <StyledFormField>
                  <Field component={TextInput} name="nome" label="" placeholder="Nome" />
                  <ErrorMessage name="nome" render={(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>} />
                </StyledFormField>
                <StyledFormField>
                  <Field component={TextInput} name="email" label="" placeholder="E-Mail" />
                  <ErrorMessage name="email" render={(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>} />
                </StyledFormField>
              </StyledUserInfoInput>
              <StyledFormTextField>
                <Field component={TextInput} type="textarea" name="comentario" label="" placeholder="Comentário" />
                <ErrorMessage name="comentario" render={(msg) => ( <StyledErrorMessage>{msg}</StyledErrorMessage>)} />
              </StyledFormTextField>
              <Button buttonText="ENVIAR" click={handleSubmit} type={"submit"} />
            </Form>
          </StyledFormBox>
        );
      }}
    </Formik>
  );
};

const userInitialValues = {
  nome: "",
  email: "",
  comentario: "",
};
