/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as UsersAdmActions from '../../store/actions/useradmin.actions';
import { Form } from '@rocketseat/unform';
import SelectUnform from '../../components/SelectUnform';
import { Button, Card, Row, Col, Checkbox } from 'antd';
import InputUnform from '../../components/InputUnform';

export default function CreateLogin({ match, history }) {
  const [type, setType] = useState('');
  const [optionsEmail, setOptionsEmail] = useState([]);
  const [optionsName, setOptionsName] = useState([]);
  const [userEditing, setUserEditing] = useState({});
  const dispatch = useDispatch();
  const salesman = useSelector(state => state.salesman);
  const userAdm = useSelector(state => state.usersAdm);
  const [revealPassword, setRevealPassword] = useState(false); 

  useEffect(() => {
    if (type === 'salesman') {
      dispatch({ type: '@salesman/GET_ALL_REQUEST' });
    }
  }, [type]);

  useEffect(() => {
    if (match.params.id) {
      dispatch(UsersAdmActions.getUserByIdRequest(match.params.id));
    } else {
      dispatch(UsersAdmActions.clearUserById());
    }
  }, []);

  useEffect(() => {
    setUserEditing(userAdm.userById);
  }, [userAdm])

  useEffect(() => {
    const optionsNameSalesman = [];
    const optionsEmailSalesman = [];
    salesman.allSalesman.map(s => {
      let names = { id: s.name, title: s.name };
      optionsNameSalesman.push(names);
      let emails = { id: s.email, title: s.email };
      optionsEmailSalesman.push(emails);
      setOptionsEmail(optionsEmailSalesman);
      setOptionsName(optionsNameSalesman);
    })
  }, [salesman])

  const optionsType = [
    { id: 'super', title: 'Administrador' },
    { id: 'salesman', title: 'Vendedor' },
    { id: 'support', title: 'Suporte' },
    { id: 'finance', title: 'Financeiro' },
    { id: 'developer', title: 'Desenvolvedor'}, 
  ];

  function handleSubmit(data) {
    if (match.params.id) {
      dispatch(UsersAdmActions.editUserRequest(data, match.params.id));
    } else {
      dispatch(UsersAdmActions.createUserRequest(data));
    }
    setTimeout(() => {
      history.push('/list-users');
    }, 400)
  }

  function onChange(e) {
      if(e.target.checked){
        setRevealPassword(true);
      }else {
        setRevealPassword(false);
    }
  }
  
  return (
    <>
      <Card
        title={match.params.id ? 'EDITAR USUÁRIO' : 'CRIAR USUÁRIO'}
      >
        <Form onSubmit={handleSubmit} initialData={match.params.id ? userEditing : ''}>
          <Row>
            <Col xs={{ span: 12, offset: 6 }} lg={{ span: 8, offset: 2 }} sm={{ span: 12 }}>
              <SelectUnform
                contentLabel="Tipo de usuário"
                name="permission"
                value={userEditing.permission && userEditing.permission}
                options={optionsType}
                onChange={(e) => setType(e.target.value)}
              />
            </Col>
            {type !== 'salesman' ? (
              <>
                <Col xs={{ span: 12, offset: 6 }} lg={{ span: 8, offset: 2 }} sm={{ span: 12 }} >
                  <InputUnform contentLabel={'Digite o nome do usuário'} nameInput={'name'}></InputUnform>
                </Col>
                <Col xs={{ span: 12, offset: 6 }} lg={{ span: 8, offset: 2 }} sm={{ span: 12 }} >
                  <InputUnform contentLabel={'Digite o email do usuário'} nameInput={'email'}></InputUnform>
                </Col>
              </>
            ) : (
                <>
                  <Col xs={{ span: 12, offset: 6 }} lg={{ span: 8, offset: 2 }} sm={{ span: 12 }}>
                    <SelectUnform contentLabel="Selecione o nome do vendedor" name="name" options={optionsName} />
                  </Col>
                  <Col xs={{ span: 12, offset: 6 }} lg={{ span: 8, offset: 2 }} sm={{ span: 12 }}>
                    <SelectUnform contentLabel="Selecione o email do vendedor" name="email" options={optionsEmail} />
                  </Col>
                </>
              )}
              
              <Col  xs={{ span: 12, offset: 6 }} lg={{ span: 8, offset: 2 }} sm={{ span: 12 }}>
                {revealPassword && 
                  <InputUnform contentLabel={'Digite uma senha'} nameInput={'password'} type="password"></InputUnform>
                }
                {match.params.id ?
                  <Checkbox style={{marginTop: '15px'}} onChange={onChange}>Alterar senha</Checkbox> :
                  <InputUnform contentLabel={'Digite uma senha'} nameInput={'password'} type="password"></InputUnform>
                }
              </Col>
          </Row>
          <Button size="large" type="primary" htmlType="submit" style={{ float: 'right' }}> Enviar </Button>
        </Form>
      </Card>
    </>
  );
}
