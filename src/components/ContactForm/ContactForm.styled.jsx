import styled from "@emotion/styled";

export const Form = styled.form `
    display: flex;
    flex-direction: column; 
    gap: 5px;
    margin-bottom: 20px;
    border: 1px solid black;
    padding: 10px;
    border-radius: 15px;
`

export const Input = styled.input `
    width: 200px;
    margin-bottom: 10px
`

export const Add = styled.button `
    width: fit-content;
    font-family: inherit;
    font-weight: 500;
    padding: 2px 5px;
    background-color: lightskyblue;
    border: 1px solid grey;
    border-radius: 3px;
    cursor: pointer
`

