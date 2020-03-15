import React from 'react'
import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

const MainLayout = (props) => {
    return (
        <Layout style={{height:"100vh"}}>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>

            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                    {props.children}
                </div>
            </Content>

            <Footer style={{ textAlign: 'center' }}>Lean Domain Ideate ©2020 Created by Tanamettpk</Footer>

        </Layout>
    )
}

export default MainLayout
