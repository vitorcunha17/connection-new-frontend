import React, { useEffect } from 'react';
import logo from '../../images/logo.png';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Icon, Button, Card, Spin } from 'antd';

export default function Login(props) {
  const session = useSelector(state => state.auth);
  useEffect(() => {
    if (localStorage.getItem('@token')) {
      props.history.push('/home');
    }
  }, [session]);

  function handleSubmit(data) {
    const { email, password } = data;
    if (email === 'vitor@connection.com' && password === 'admin') {
      props.history.push('/home');
    }
  }

  function cadastrar() {
    props.history.push('/register');
  }

  return (
    <div className="wrapper">
      <Card className="login-card">
        <img alt="logo-login" src={logo} width="100%" />
        <br />
        <br />
        <Form onSubmit={handleSubmit} className="login-form">
          <h2 style={{ textAlign: 'center', color: '#002267' }}>Bem-vindo!</h2>
          <br />
          <Icon type="user" className="icons-position" />
          <Input
            className="ant-input input-login"
            name="email"
            placeholder="&nbsp;Login"
          />
          <Icon type="lock" className="icons-position2" />
          <Input
            className="ant-input input-login"
            name="password"
            type="password"
            placeholder="&nbsp;Senha"
          />
          <Button
            block
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Login
          </Button>
          <Button
            block
            type="default"
            onClick={() => cadastrar()}
            className="login-form-button"
          >
            Cadastrar
          </Button>
          <div className="container-spinner">
            <Spin spinning={session.loading} size="large" />
          </div>
        </Form>
      </Card>
    </div>
  );
}
