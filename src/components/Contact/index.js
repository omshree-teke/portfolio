import React, { useRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 0px 0px 60px 0px;
    scroll-margin-top: 80px;
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1100px;
    gap: 12px;
`;

const Title = styled.div`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const Form = styled.form`
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 20px;
`;

const Input = styled.input`
    background: ${({ theme }) => theme.card};
    border: 1px solid ${({ theme }) => theme.text_secondary + 50};
    border-radius: 12px;
    padding: 14px 18px;
    font-size: 16px;
    color: ${({ theme }) => theme.text_primary};
    outline: none;
    &:focus {
        border-color: ${({ theme }) => theme.primary};
    }
`;

const TextArea = styled.textarea`
    background: ${({ theme }) => theme.card};
    border: 1px solid ${({ theme }) => theme.text_secondary + 50};
    border-radius: 12px;
    padding: 14px 18px;
    font-size: 16px;
    color: ${({ theme }) => theme.text_primary};
    outline: none;
    resize: vertical;
    min-height: 150px;
    &:focus {
        border-color: ${({ theme }) => theme.primary};
    }
`;

const Button = styled.button`
    background: ${({ theme }) => theme.primary};
    color: white;
    border: none;
    border-radius: 12px;
    padding: 14px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
        opacity: 0.8;
    }
`;

const Contact = () => {
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message sent!');
        e.target.reset();
    };

    return (
        <Container id="contact">
            <Wrapper>
                <Title>Contact Me</Title>
                <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
                <Form ref={form} onSubmit={handleSubmit}>
                    <Input type="text" placeholder="Your Name" required />
                    <Input type="email" placeholder="Your Email" required />
                    <Input type="text" placeholder="Subject" required />
                    <TextArea placeholder="Message" required />
                    <Button type="submit">Send Message</Button>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Contact;