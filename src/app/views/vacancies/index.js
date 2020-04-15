import React, { useState } from 'react';
import { Form } from '@rocketseat/unform';
import { Card, Col, Row, Icon, Button, Modal, Input } from 'antd';
import api from '../../services/axios';

export default function Vacancies() {
  const { Meta } = Card;
  const [visible, setVisible] = useState(false);
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [quantidade, setQuantidade] = useState('');

  function showModal(e) {
    setVisible(true);
  };

  function handleCancel(e) {
    setVisible(false);
  };

  async function handleSalvarVaga(e) {
    await api.post('/vaga', {
      nome,
      descricao,
      quantidade,
    });
    setNome('');
    setDescricao('');
    setQuantidade('');
    setVisible(false);
  };

  return (
    <div>
      <Modal
        title="Adicionar Vaga"
        visible={visible}
        onCancel={handleCancel}
        footer={[
          <Button key="submit" type="primary" htmlType="submit" onClick={handleSalvarVaga}>Salvar</Button>,
          <Button key="cancel" type="danger" onClick={handleCancel}>Cancelar</Button>
        ]}
      >
        <Form className="login-form">
          <Input
            className="ant-input input-login"
            name="nome"
            placeholder="Nome"
            value={nome}
            onChange={e => setNome(e.target.value)}
          />
          <Input
            className="ant-input input-login"
            name="descricao"
            placeholder="Descrição"
            value={descricao}
            onChange={e => setDescricao(e.target.value)}
          />
          <Input
            className="ant-input input-login"
            name="quantidade"
            placeholder="Quantidade de vagas"
            value={quantidade}
            type="number"
            onChange={e => setQuantidade(e.target.value)}
          />
        </Form>
      </Modal>
      <Card title="Vagas">
        <center>
          <Button type="primary" onClick={showModal}>Adicionar Vaga</Button>
          <br />
          <br />
        </center>
        <Row>
          <Col
            xs={{ span: 24 }}
            lg={{ span: 6 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
          >
            <Card
              hoverable
              style={{ width: '93%' }}
              cover={
                <img
                  alt="example"
                  src="https://blog.schoolofnet.com/wp-content/uploads/2018/11/bom-programador.png"
                />
              }
              actions={[
                <Icon type="setting" key="setting" />,
                <Icon type="edit" key="edit" />,
                <Icon type="ellipsis" key="ellipsis" />,
              ]}
            >
              <Meta
                title="Programador Pleno"
                description="Requer conhecimentos avançados em Php, React e Css."
              />
            </Card>
          </Col>
          <Col
            xs={{ span: 24 }}
            lg={{ span: 6 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
          >
            <Card
              hoverable
              style={{ width: '93%' }}
              cover={
                <img
                  alt="example"
                  src="https://blog.schoolofnet.com/wp-content/uploads/2018/11/bom-programador.png"
                />
              }
              actions={[
                <Icon type="setting" key="setting" />,
                <Icon type="edit" key="edit" />,
                <Icon type="ellipsis" key="ellipsis" />,
              ]}
            >
              <Meta
                title="Programador Pleno"
                description="Requer conhecimentos avançados em Php, React e Css."
              />
            </Card>
          </Col>
          <Col
            xs={{ span: 24 }}
            lg={{ span: 6 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
          >
            <Card
              hoverable
              style={{ width: '93%' }}
              cover={
                <img
                  alt="example"
                  src="https://blog.schoolofnet.com/wp-content/uploads/2018/11/bom-programador.png"
                />
              }
              actions={[
                <Icon type="setting" key="setting" />,
                <Icon type="edit" key="edit" />,
                <Icon type="ellipsis" key="ellipsis" />,
              ]}
            >
              <Meta
                title="Programador Pleno"
                description="Requer conhecimentos avançados em Php, React e Css."
              />
            </Card>
          </Col>
          <Col
            xs={{ span: 24 }}
            lg={{ span: 6 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
          >
            <Card
              hoverable
              style={{ width: '93%' }}
              cover={
                <img
                  alt="example"
                  src="https://blog.schoolofnet.com/wp-content/uploads/2018/11/bom-programador.png"
                />
              }
              actions={[
                <Icon type="setting" key="setting" />,
                <Icon type="edit" key="edit" />,
                <Icon type="ellipsis" key="ellipsis" />,
              ]}
            >
              <Meta
                title="Programador Pleno"
                description="Requer conhecimentos avançados em Php, React e Css."
              />
            </Card>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
