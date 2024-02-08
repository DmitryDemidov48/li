import React, { useState } from 'react';
import styled from 'styled-components';

// Компоненты стилизации (styled-components)

// Стилизованный компонент для формы входа
const LoginFormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;

// Компонент формы входа
const LoginForm = () => {
    // Состояния для хранения значений полей формы и результата аутентификации
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Обработчик изменения значений в полях формы
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Обработчик отправки формы
    const handleSubmit = (e) => {
        e.preventDefault();
        // Здесь вы можете добавить проверку данных формы и имитировать успешную аутентификацию
        // Например, если данные пользователя верные:
        setIsAuthenticated(true);
    };

    return (
        <LoginFormContainer>
            <Title>Вход</Title>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="username"
                    value={formData.username}
                    placeholder="Имя пользователя"
                    onChange={handleInputChange}
                    required
                />
                <Input
                    type="password"
                    name="password"
                    value={formData.password}
                    placeholder="Пароль"
                    onChange={handleInputChange}
                    required
                />
                <Button type="submit">Войти</Button>
            </Form>
            {isAuthenticated && <p>Вы успешно вошли!</p>}
        </LoginFormContainer>
    );
};

export default LoginForm;
