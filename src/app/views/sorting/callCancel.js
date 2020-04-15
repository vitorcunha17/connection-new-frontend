import React from 'react';
import { Form } from '@rocketseat/unform';
import { Card, Col, Row, Alert, Button, Icon } from 'antd';

export default function callCancel() {
  const onClose = e => {
    console.log(e, 'I was closed.');
  };

  return (
    <Form>
      <Card title="Cancelamento de Entrevista">
        <Row>
          <Col
            xs={{ span: 24 }}
            lg={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
          >
            <Alert
              message="Atenção!"
              description='Deseja mesmo cancelar esta entevista? Caso queira desqualificar este candidato, basta apertar o botão "Desqualificar" ou então clicar em "Cancelar e remarcar" para cancelar e remarcar a entrevista.'
              type="warning"
              closable
              onClose={onClose}
            />
            <div style={{ textAlign: 'center', width: '100%' }}>
              <Button type="primary" style={{ margin: '20px' }}>
                <Icon type="schedule" />
                Cancelar e Remarcar
              </Button>
              <Button type="danger">
                <Icon type="dislike" />
                Desqualificar Candidato
              </Button>
            </div>
          </Col>
        </Row>
      </Card>
    </Form>
  );
}
