import React from 'react'
import { List } from 'antd';
import { CloseCircleOutlined  } from '@ant-design/icons'
import { connect } from 'react-redux'
import { remove_domain_from_cart } from '../../store/actions/cartAction'

const index = ({domains, ...props}) => {

    const goToGoogleDomain = (name) => {

        window.open(`https://domains.google.com/m/registrar/search?searchTerm=${name}`, "_blank")

    }

    return (
        <List
            size="large"
            bordered
            dataSource={domains}
            renderItem={item => 
                <List.Item style={{display:"flex"}}>
                    <a href={"https://domains.google.com/m/registrar/search?searchTerm="+item} target="_blank" >
                        {item}
                    </a> 
                    <CloseCircleOutlined onClick={() => props.remove_domain_from_cart(item)} />
                </List.Item>
            }
        />
    )
}

const mapDispatchToProps = {
    remove_domain_from_cart
}


export default connect(null,mapDispatchToProps)(index)
