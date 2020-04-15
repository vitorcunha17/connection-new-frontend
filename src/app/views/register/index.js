import React from 'react';
import logo from '../../images/logo.png';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Button, Card, Spin } from 'antd';
import api from '../../services/axios';
import { useState } from 'react';
import { Radio } from 'antd';

export default function Login(props) {
  const [tipo, setTipo] = useState('candidato');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const session = useSelector(state => state.auth);

  async function handleCadastrar(e) {
    await api.post('/registro', {
      tipo,
      nome,
      email,
      senha,
    });
    setNome('');
    setEmail('');
    setSenha('');
    props.history.push('/');
  }

  function handleSelectType(e) {
    setTipo(e.target.value);
  }

  return (
    <div className="wrapper">
      <Card className="login-card">
        <img alt="logo-login" src={logo} width="100%" />
        <br />
        <br />
        <Form onSubmit={handleCadastrar} className="login-form">
          <center>
            <Radio.Group defaultValue="candidato" value={tipo} onChange={handleSelectType}>
              <Radio.Button value="candidato">Candidato</Radio.Button>
              <Radio.Button value="empresa">Empresa</Radio.Button>
            </Radio.Group>
          </center>
          <br />
          <Input
            className="ant-input input-login"
            name="nome"
            placeholder="Nome"
            value={nome}
            onChange={e => setNome(e.target.value)}
          />
          <Input
            className="ant-input input-login"
            name="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            className="ant-input input-login"
            name="senha"
            placeholder="Senha"
            type="password"
            value={senha}
            onChange={e => setSenha(e.target.value)}
          />
          <Button
            block
            type="submit"
            htmlType="submit"
            className="login-form-button"
          >
            Cadastrar-se
          </Button>
          <div className="container-spinner">
            <Spin spinning={session.loading} size="large" />
          </div>
        </Form>
      </Card>
    </div>
  );
}
