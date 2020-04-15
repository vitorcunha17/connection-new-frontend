import React from 'react';
import { Form } from '@rocketseat/unform';
import { Card, Col, Row, Icon, Checkbox } from 'antd';

export default function Candidates() {
  const { Meta } = Card;

  return (
    <Form>
      <Card title="Candidatos">
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
                  src="https://scontent.fldb7-1.fna.fbcdn.net/v/t1.0-9/p960x960/33237572_1710939072327086_39592696456675328_o.jpg?_nc_cat=105&_nc_ohc=H8hRZzrNsrQAQkhop3F70HUSp68F5VeUhlGT9Pfb9mbmIE6T2sigtV4Sg&_nc_ht=scontent.fldb7-1.fna&oh=f15e578a3229e9651695efb42d514344&oe=5EB23D2E"
                />
              }
              actions={[
                <Icon type="setting" key="setting" />,
                <Icon type="edit" key="edit" />,
                <Icon type="ellipsis" key="ellipsis" />,
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
              <br />
              <br />
              <Checkbox style={{ textAlign: 'center', width: '100%' }}>
                <b>Pré-Selecionar</b>
              </Checkbox>
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
                  src="https://scontent.fldb7-1.fna.fbcdn.net/v/t1.0-1/70384689_2429580230491585_7035443695440625664_n.jpg?_nc_cat=102&_nc_ohc=6HGX3PEr5soAQnbQDtIul5I9eMf_d2ijggpUO0B-rUsJ8eRTRkF8ffOJQ&_nc_ht=scontent.fldb7-1.fna&oh=51aee014bf13ec0d25e07cd60078a20b&oe=5E752134"
                />
              }
              actions={[
                <Icon type="setting" key="setting" />,
                <Icon type="edit" key="edit" />,
                <Icon type="ellipsis" key="ellipsis" />,
              ]}
            >
              <Meta
                title="José Madalena"
                description="https://www.linkedin.com/in/vitor-ribeiro-cunha/"
              />
              <br />
              <span>
                <b>Vaga para: </b>Programador Pleno
              </span>
              <br />
              <br />
              <Checkbox style={{ textAlign: 'center', width: '100%' }}>
                <b>Pré-Selecionar</b>
              </Checkbox>
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
                  src="https://scontent.fldb7-1.fna.fbcdn.net/v/t1.0-9/p960x960/71705182_2381043711965338_6983537641278930944_o.jpg?_nc_cat=106&_nc_ohc=8wWZB1_BWVUAQntZcSzcMZ8sL5iDTrazxo3duhCFEj5xVa7ynDsF1dTtQ&_nc_ht=scontent.fldb7-1.fna&oh=0a86db382758b9ca790b2ab0a838d123&oe=5E6BFAC8"
                />
              }
              actions={[
                <Icon type="setting" key="setting" />,
                <Icon type="edit" key="edit" />,
                <Icon type="ellipsis" key="ellipsis" />,
              ]}
            >
              <Meta
                title="Lucas Cunha"
                description="https://www.linkedin.com/in/lucas-ribeiro-cunha-138741125/"
              />
              <br />
              <span>
                <b>Vaga para: </b>Programador Pleno
              </span>
              <br />
              <br />
              <Checkbox style={{ textAlign: 'center', width: '100%' }}>
                <b>Pré-Selecionar</b>
              </Checkbox>
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
                  src="https://scontent.fldb7-1.fna.fbcdn.net/v/t1.0-9/56994120_2150337601721619_4055704645148868608_n.jpg?_nc_cat=101&_nc_ohc=PWZh40qw990AQn1-tEjk-h-a_y19bM4hvYBSl31Y4cPbMN7WiOv2XEE2w&_nc_ht=scontent.fldb7-1.fna&oh=eb9125ac2860b0954c8cdfecc4072d88&oe=5E72FEAC"
                />
              }
              actions={[
                <Icon type="setting" key="setting" />,
                <Icon type="edit" key="edit" />,
                <Icon type="ellipsis" key="ellipsis" />,
              ]}
            >
              <Meta
                title="Luis Nogma"
                description="https://www.linkedin.com/in/vitor-ribeiro-cunha/"
              />
              <br />
              <span>
                <b>Vaga para: </b>Programador Pleno
              </span>
              <br />
              <br />
              <Checkbox style={{ textAlign: 'center', width: '100%' }}>
                <b>Pré-Selecionar</b>
              </Checkbox>
            </Card>
          </Col>
        </Row>
      </Card>
    </Form>
  );
}
