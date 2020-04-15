import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Card, Row, Col, Upload, Button, Icon } from 'antd';
import api from '../../services/axios';

export default function MyCurriculum(props) {
  const [cursos, setCursos] = useState('');
  const [sobre, setSobre] = useState('');
  const [links, setLinks] = useState('');
  const [expertise, setExpertise] = useState('');
  const [skills, setSkills] = useState('');
  const [expProficional, setExpProficional] = useState('');
  const [interesses, setInteresses] = useState('');

  async function handleCadastrarCurriculo(e) {
    await api.post('/curriculo', {
      cursos,
      sobre,
      links,
      expertise,
      skills,
      expProficional,
      interesses
    });
    setCursos('');
    setSobre('');
    setLinks('');
    setExpertise('');
    setSkills('');
    setExpProficional('');
    setInteresses('');
  }

  return (
    <Form onSubmit={handleCadastrarCurriculo}>
      <Card title="Meu currículo">
        <Row>
          <Col
            xs={{ span: 23 }}
            sm={{ span: 23 }}
            md={{ span: 23 }}
            lg={{ span: 11 }}
          >
            <h2>• Vídeo-Currículo</h2>
            <Upload>
              <Button>
                <Icon type="upload" />
                Upload do Vídeo Currículo
              </Button>
            </Upload>
            <br />
            <h2>• Cursos Concluídos</h2>
            <Input
              className="ant-input"
              name="cursos"
              placeholder="Digite aqui os cursos concluídos"
              value={cursos}
              onChange={e => setCursos(e.target.value)}
            />
            <br />
            <br />
            <h2>• Quem é Você?</h2>
            <Input
              className="ant-input"
              name="sobre"
              placeholder="Fala um pouco sobre você"
              value={sobre}
              onChange={e => setSobre(e.target.value)}
            />
            <br />
            <br />
            <h2>• Links Importantes</h2>
            <Input
              className="ant-input"
              name="Links"
              placeholder="Links de portifólio, Linkedin, etc"
              value={links}
              onChange={e => setLinks(e.target.value)}
            />
            <br />
            <br />
          </Col>
          <Col
            xs={{ span: 1 }}
            sm={{ span: 1 }}
            md={{ span: 1 }}
            lg={{ span: 1 }}
          />
          <Col
            xs={{ span: 23 }}
            sm={{ span: 23 }}
            md={{ span: 23 }}
            lg={{ span: 11 }}
          >
            <h2>• Lista de Expertise</h2>
            <Input
              className="ant-input"
              name="expertise"
              placeholder="Digite aqui suas maiores expertises"
              value={expertise}
              onChange={e => setExpertise(e.target.value)}
            />
            <br />
            <br />
            <h2>• Lista de Skill's</h2>
            <Input
              className="ant-input"
              name="skills"
              placeholder="Digite aqui suas principais Skill's"
              value={skills}
              onChange={e => setSkills(e.target.value)}
            />
            <br />
            <br />
            <h2>• Experiencia Profissional</h2>
            <Input
              className="ant-input"
              name="expProficional"
              placeholder="Digite aqui suas experiencias profissionais"
              value={expProficional}
              onChange={e => setExpProficional(e.target.value)}
            />
            <br />
            <br />
            <h2>• Lista de Interesses</h2>
            <Input
              className="ant-input"
              name="interesses"
              placeholder="Digite aqui seus principais interesses"
              value={interesses}
              onChange={e => setInteresses(e.target.value)}
            />
            <br />
          </Col>
        </Row>
        <center>
          <Button type="primary" htmlType="submit">
            Salvar Currículo
          </Button>
        </center>
      </Card>
    </Form>
  );
}
