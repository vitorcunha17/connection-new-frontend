import React from 'react';
import { Form } from '@rocketseat/unform';
import { Card, Col, Row, Table, Divider } from 'antd';
import { Link } from 'react-router-dom';

export default function Interviews() {
  const columns = [
    {
      title: 'Nome',
      dataIndex: 'nome',
      key: 'nome',
    },
    {
      title: 'Data',
      dataIndex: 'data',
      key: 'data',
    },
    {
      title: 'Vaga',
      dataIndex: 'vaga',
      key: 'vaga',
    },
    {
      title: 'Ações',
      key: 'action',
      render: (text, record) => (
        <span>
          <Link to="/call">Chamar {record.nome}</Link>
          &nbsp;
          <Divider type="vertical" />
          &nbsp;
          <Link style={{ color: 'red' }} to="/call-cancel">
            Cancelar Entrevista
          </Link>
        </span>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      nome: 'Vitor Cunha',
      data: '19/12/2019 - 16:30',
      vaga: 'Programador Pleno',
    },
    {
      key: '2',
      nome: 'José Madalena',
      data: '19/12/2019 - 15:30',
      vaga: 'Programador Pleno',
    },
    {
      key: '3',
      nome: 'Lucas Cunha',
      data: '20/12/2019 - 17:00',
      vaga: 'Programador Pleno',
    },
  ];

  return (
    <Form>
      <Card title="Agenda de Entrevistas">
        <Row>
          <Col
            xs={{ span: 24 }}
            lg={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
          >
            <Table columns={columns} dataSource={data} />
          </Col>
        </Row>
      </Card>
    </Form>
  );
}
