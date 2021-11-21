import styled from "styled-components";

export const StyledCountButton = styled.button`
    width: 0;
    height: 0;
    border-style: solid;
    border-width: ${(props) => props.incrementBool ? "0 15px 25px 15px" : "25px 15px 0 15px"};
    border-color: ${(props) => props.incrementBool ? "#fff #fff #ccc #fff" : "#ccc #fff #fff #fff"};
    &:hover{
        cursor: pointer;
        border-color: ${(props) => props.incrementBool ? "#fff #fff rgba(46, 204, 113, 0.8) #fff" : "rgba(207, 0, 15, 0.8) #fff #fff #fff"};
    }
`;
