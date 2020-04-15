import React from 'react';
import { Form } from '@rocketseat/unform';
import { Card, Col, Row, Table, Divider, Tabs, Icon } from 'antd';
import { Link } from 'react-router-dom';

export default function Sorting() {
  const { TabPane } = Tabs;
  const { Meta } = Card;

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
  ];

  function callback(key) {
    console.log(key);
  }

  return (
    <Form>
      <Card title="Triagem">
        <Row>
          <Col
            xs={{ span: 24 }}
            lg={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
          >
            <Tabs defaultActiveKey="1" onChange={callback}>
              <TabPane tab="Candidatos Pré-Selecionados" key="1">
                <Table columns={columns} dataSource={data} />
              </TabPane>
              <TabPane tab="Candidatos em Fase de Entrevista" key="2">
                <Table columns={columns} dataSource={data} />
              </TabPane>
              <TabPane tab="Candidatos Selecionados" key="3">
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
                        src="https://scontent.fldb7-1.fna.fbcdn.net/v/t1.0-9/p960x960/33237572_1710939072327086_39592696456675328_o.jpg?_nc_cat=105&_nc_ohc=H8hRZzrNsrQAQkhop3F70HUSp68F5VeUhlGT9Pfb9mbmIE6T2sigtV4Sg&_nc_ht=scontent.fldb7-1.fna&oh=f15e578a3229e9651695efb42d514344&oe=5EB23D2E"
                      />
                    }
                    actions={[
                      <a href="https://connection-chamada.herokuapp.com/">
                        <Icon type="video-camera" key="chamada" />
                      </a>,
                    ]}
                  >
                    <Meta
                      title="Vitor Ribeiro Cunha"
                      description="https://www.linkedin.com/in/vitor-ribeiro-cunha/"
                    />
                    <br />
                    <span>
                      <b>Vaga para: </b>Programador Pleno
                    </span>
                  </Card>
                </Col>
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </Card>
    </Form>
  );
}
