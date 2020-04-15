import React from 'react';
import { Form } from '@rocketseat/unform';
import { Card, Row, Col, Timeline } from 'antd';

export default function HomeAdm() {
  return (
    <Form>
      <Card title="Home">
        <Row>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 12 }}
          >
            <h2>• Vídeo-Currículo</h2>
            <video controls width="90%"></video>
            <br />
            <br />
            <h2>• Cursos Feitos</h2>
            <blockquote>
              <span>Sistemas de Informações</span>
            </blockquote>
            <br />
            <h2>• Quem é Você?</h2>
            <blockquote>
              <p>Texto falando um pouco sobre mim.</p>
            </blockquote>
            <br />
            <h2>• Links Importantes</h2>
            <blockquote>
              <a href="https://www.linkedin.com/">Linkedin</a>
            </blockquote>
            <br />
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 12 }}
          >
            <h2>• Lista de Expertise</h2>
            <blockquote>
              <span>Java, Php, JavaScript, Liderança.</span>
            </blockquote>
            <br />
            <h2>• Lista de Skill's</h2>
            <blockquote>
              <span>Css, Html, Scrum.</span>
            </blockquote>
            <br />
            <h2>• Experiencia Profissional</h2>
            <blockquote>
              <span>Programador na Connection desde - 11/10/2019.</span>
            </blockquote>
            <br />
            <h2>• Lista de Interesses</h2>
            <blockquote>
              <span>Programação, Esportes, Cursos.</span>
            </blockquote>
            <br />
            <h2>• Acompanhe seu Desempenho</h2>
            <Timeline>
              <Timeline.Item color="green">
                Enviou vídeo-currículo em 16/12/2019
              </Timeline.Item>
              <Timeline.Item color="green">
                Candidatou-se à uma vaga na empresa: Connection em 18/12/2019
              </Timeline.Item>
              <Timeline.Item color="red">
                <p>Não foi aprovado para a vaga em 18/12/2019</p>
              </Timeline.Item>
              <Timeline.Item color="green">
                Candidatou-se à uma vaga na empresa: Copacol em 18/12/2019
              </Timeline.Item>
              <Timeline.Item>
                <p>
                  Passou para a fase de entrevista online agendada para{' '}
                  <b>03/01/2020 às 15 horas</b>
                </p>
              </Timeline.Item>
            </Timeline>
          </Col>
        </Row>
      </Card>
    </Form>
  );
}
