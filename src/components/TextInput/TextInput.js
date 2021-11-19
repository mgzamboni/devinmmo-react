import React from "react";
import { StyledFormGroup, StyledLabel, StyledTextInput } from "./TextInput.styles";

export const TextInput = (props) => {
  const {
    type,
    id,
    name,
    label = "Título do campo",
    placeholder = null,
    value,
    onChange,
    ...outros
  } = props;

  return (
    <>
      <StyledFormGroup>
        <StyledLabel htmlFor={id || name}>{label}</StyledLabel>
        {type === "textarea" ? (
          <StyledTextInput
            as="textarea"
            rows={4}
            id={id ?? name}
            name={name}
            type="text"
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            {...outros}
            {...outros.field}
          />
        ) : (
          <StyledTextInput
            id={id ?? name}
            name={name}
            type="text"
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            {...outros}
            {...outros.field}
          />
        )}
      </StyledFormGroup>
    </>
  );
};
