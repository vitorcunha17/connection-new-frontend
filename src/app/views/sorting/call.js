import React, { useEffect } from 'react';
import { Form } from '@rocketseat/unform';
import { Card, Col, Row, Input } from 'antd';

export default function Call() {
  const { TextArea } = Input;

  return (
    <Form>
      <Card title="Chamada de Vídeo">
        <Row>
          <Col
            xs={{ span: 24 }}
            lg={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            style={{ margin: '0 auto' }}
          >
            <label>Anotações sobre o candidato</label>
            <TextArea rows={4} />
          </Col>
        </Row>
      </Card>
    </Form>
  );
}
