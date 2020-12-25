import Styled from 'styled-components'

export const Section = Styled.section `
    padding: 50px 0;
    text-align: center;
    background: url('https://i.ibb.co/v30vfpV/contact-bg.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    filter: brightness(0.5);
`

export const Title = Styled.h2 `
    font-size: 60px;
    margin-bottom: 30px;
    @media (max-width:575px) {
    font-size: 40px;
    };
`

export const Span = Styled.span `
    font-weight: normal;
`

export const Form = Styled.form `
    width: 70%;
    margin: auto;
    @media (max-width:575px) {
        width: 90%;
    };
`

export const Input = Styled.input `
    box-sizing: border-box;
    outline: 0;
    padding: 5px;
    margin-bottom: 10px;
    @media (max-width:575px) {
        width: 100%;
    };
`

export const FormInput = Styled.div `
    overflow: hidden;
`

export const FormInputInsideText = Styled(Input)
`
    float: left;
    width: 49%;
`

export const FormInputInsideEmail = Styled(Input)
`
    float: right;
    width: 49%;
`

export const InputSub = Styled(Input)
`
    width: 100%;
`

export const TextArea = Styled.textarea `
    width: 100%;
    outline: 0;
    background: #ccc;
`

export const InputSubmit = Styled(Input)
`
    width: 60%;
    background: #fff;
    border: 1px solid #ccc;
    color: #888;
    cursor: pointer;
`