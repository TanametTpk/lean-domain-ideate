import React from 'react'
import { Layout, Badge } from 'antd';
import {ShoppingCartOutlined} from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

const MainLayout = (props) => {
    return (
        <Layout style={{height:"100vh"}}>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%', color:"white" }}>
                <div style={{ cursor: "pointer", display:"inline" }}>
                    <Badge count={10} style={{ backgroundColor: '#52c41a' }}>
                        <ShoppingCartOutlined style={{fontSize:"24px", cursor: "pointer" }} />
                    </Badge>
                </div>
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
