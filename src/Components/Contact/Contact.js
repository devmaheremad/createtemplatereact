import React, { Fragment } from 'react'
import { Form, FormInput, Section, Span, Title, FormInputInsideText, FormInputInsideEmail, InputSub, TextArea, InputSubmit } from './ContactStyled'
import Footer from '../Footer/Footer'
import Nav from '../Nav/Nav'

const Contact = () => {
    return (
        <Fragment>
            <Nav />
            <Section>
            <div className="container">
                <Title><Span>Drop </Span>Me A line</Title>
                <Form>
                    <FormInput>
                        <FormInputInsideText placeholder="Your Name" />
                        <FormInputInsideEmail placeholder="Your Email" />
                    </FormInput>
                    <InputSub type="text" placeholder="Your Subject" />
                    <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
                    <InputSubmit type="submit" value="Send Message" />
                </Form>
            </div>
            </Section>
            <Footer />
        </Fragment>
    )
}

export default Contact