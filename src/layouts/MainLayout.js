import React, {useState} from 'react'
import { Layout, Badge, Modal } from 'antd'
import {ShoppingCartOutlined} from '@ant-design/icons'
import { connect } from 'react-redux'
import CartList from '../components/CartList'

const { Header, Content, Footer } = Layout;

const MainLayout = (props) => {

    const [modalVisible, setModealVisible] = useState(false)

    return (
        <Layout style={{minHeight:"100vh"}}>
            <Header style={{ position: 'fixed', zIndex: 100, width: '100%', color:"white" }}>
                <div style={{ cursor: "pointer", display:"inline" }}>
                    <Badge count={props.carts.count} style={{ backgroundColor: '#52c41a' }} onClick={() => setModealVisible(true)} >
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

            <Modal
                title="Your domain list"
                visible={modalVisible}
                onOk={() => setModealVisible(false)}
                onCancel={() => setModealVisible(false)}
                footer={null}
            >
                <CartList domains={props.carts.items} />
            </Modal>

        </Layout>
    )
}

const mapStateToProps = (state) => ({
    carts: state.carts
})

export default connect(mapStateToProps, null)(MainLayout)