import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { signOut } from '../../store/actions/session.actions';
import { useDispatch } from 'react-redux';
import { Layout, Menu, Breadcrumb, Icon, Popover, Button, Avatar } from 'antd';
import logoHead from './logo_head.png';
import defaultProfile from './profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function SiderDemo(props) {
  const [collapsed, setCollapsed] = useState(false);
  const [permission] = useState(localStorage.getItem('@permission'));
  const dispatch = useDispatch();

  function VerifySuperOrSupportOrDeveloper() {
    if (
      permission === 'super' ||
      permission === 'support' ||
      permission === 'developer'
    ) {
      return true;
    }
    return false;
  }

  function logout() {
    dispatch(signOut());
    props.history.push('/');
  }

  function goToProfile() {
    props.history.push('/profile');
  }

  const contentPopUp = (
    <div>
      <Button
        block
        type="primary position-margin"
        onClick={() => goToProfile()}
      >
        Perfil
      </Button>
      <Button block type="danger" onClick={() => logout()}>
        Logout
      </Button>
    </div>
  );

  const textPopUp = (
    <>
      <div className="icon-foto-profile">
        <div onClick={() => goToProfile()} style={{ cursor: 'pointer' }}>
          <Avatar
            src={
              localStorage.getItem('@avatar')
                ? localStorage.getItem('@avatar')
                : defaultProfile
            }
          />
        </div>
      </div>
      <center>
        <span>{localStorage.getItem('@email')}</span>
      </center>
    </>
  );

  const onCollapse = menu => {
    setCollapsed(menu);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
            <Link to="/home">
              <Icon type="home" />
              <span> Home </span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/companies">
              <Icon type="shop" />
              <span> Empresas </span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/my-curriculum">
              <Icon type="video-camera" />
              <span> Meu Currículo </span>
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/vacancies">
              <Icon type="pie-chart" />
              <span> Vagas </span>
            </Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/interviews">
              <Icon type="message" />
              <span> Entrevistas </span>
            </Link>
          </Menu.Item>
          <Menu.Item key="6">
            <Link to="/candidates">
              <Icon type="team" />
              <span> Candidatos </span>
            </Link>
          </Menu.Item>
          <Menu.Item key="7">
            <Link to="/sorting">
              <Icon type="apartment" />
              <span> Triagem </span>
            </Link>
          </Menu.Item>
          <Menu.Item key="8">
            <Link to="/dashboard">
              <Icon type="dashboard" />
              <span> Dashboard </span>
            </Link>
          </Menu.Item>
          <Menu.Item key="9">
            <a href="https://connectionrh.com.br/academy">
              <Icon type="trophy" />
              <span> Academy </span>
            </a>
          </Menu.Item>
          {VerifySuperOrSupportOrDeveloper() && (
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="phone" /> <span> Fale Conosco </span>
                </span>
              }
            >
              <Menu.Item key="7">
                <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
                <span> Listar </span>
                <Link to="/called-list" />
              </Menu.Item>
            </SubMenu>
          )}
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>
          <img
            style={{ marginTop: '-3px' }}
            height="100%"
            alt="LogoHead"
            src={logoHead}
          />
          <Popover
            placement="bottomRight"
            title={textPopUp}
            content={contentPopUp}
            trigger="click"
          >
            <Button style={{ position: 'fixed', right: '14px', top: '14px' }}>
              <Icon type="user" />
            </Button>
          </Popover>
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }} />
          {props.children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>Connection RH ©2019</Footer>
      </Layout>
    </Layout>
  );
}

Layout.propTypes = {
  props: PropTypes.shape({
    history: PropTypes.shape({
      push: PropTypes.func,
    }),
    children: PropTypes.element.isRequired,
  }),
};
