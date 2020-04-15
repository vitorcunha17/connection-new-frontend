import React from 'react';
import { Form } from '@rocketseat/unform';
import { Card, Col, Row, Icon } from 'antd';

export default function Companies() {
  const { Meta } = Card;

  return (
    <Form>
      <Card title="Empresas">
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
                  src="https://anba.com.br/wp-content/uploads/2018/06/copacol-aves-1140x620.jpg"
                />
              }
              actions={[
                <Icon type="setting" key="setting" />,
                <Icon type="edit" key="edit" />,
                <Icon type="ellipsis" key="ellipsis" />,
              ]}
            >
              <Meta title="Empesa Copacol" description="www.copacol.com" />
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
                  src="https://anba.com.br/wp-content/uploads/2018/06/copacol-aves-1140x620.jpg"
                />
              }
              actions={[
                <Icon type="setting" key="setting" />,
                <Icon type="edit" key="edit" />,
                <Icon type="ellipsis" key="ellipsis" />,
              ]}
            >
              <Meta title="Empesa Copacol" description="www.copacol.com" />
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
                  src="https://anba.com.br/wp-content/uploads/2018/06/copacol-aves-1140x620.jpg"
                />
              }
              actions={[
                <Icon type="setting" key="setting" />,
                <Icon type="edit" key="edit" />,
                <Icon type="ellipsis" key="ellipsis" />,
              ]}
            >
              <Meta title="Empesa Copacol" description="www.copacol.com" />
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
                  src="https://anba.com.br/wp-content/uploads/2018/06/copacol-aves-1140x620.jpg"
                />
              }
              actions={[
                <Icon type="setting" key="setting" />,
                <Icon type="edit" key="edit" />,
                <Icon type="ellipsis" key="ellipsis" />,
              ]}
            >
              <Meta title="Empesa Copacol" description="www.copacol.com" />
            </Card>
          </Col>
        </Row>
      </Card>
    </Form>
  );
}
