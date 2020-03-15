import React from 'react'
import MainLayout from '../layouts/MainLayout'
import { Input } from 'antd'
import styled from 'styled-components'

const { Search } = Input

const SearchContainer = styled.div`

    display:flex;
    justify-content: center;

`

const SearchPage = () => {

    const searchDomain = (value) => {

        console.log(value)

    }

    return (
        <MainLayout>
            <SearchContainer>
                
                <Search
                    placeholder="Enter your domain keyword"
                    enterButton="Search"
                    size="large"
                    onSearch={searchDomain}
                    style={{maxWidth: "500px"}}
                />

            </SearchContainer>
        </MainLayout>
    )
}

export default SearchPage
