import React, {useState} from 'react'
import MainLayout from '../layouts/MainLayout'
import DomainList from '../components/DomainList'
import { Input, PageHeader  } from 'antd'
import styled from 'styled-components'
import DomainFinder from '../services/domain_finder'
import InfiniteScroll from 'react-infinite-scroller'

const { Search } = Input

const SearchContainer = styled.div`

    display:flex;
    justify-content: center;

`

const SearchPage = () => {

    let [results, setResults] = useState([])
    let [search, setSearch] = useState("")
    let [hasNext, setHasNext] = useState(true)

    const searchDomain = (value) => {

        setSearch(value)        

    }

    const loadMore = async(page) => {
        
        let {domains, hasNext} = await DomainFinder.query(search, page)
        
        setHasNext(hasNext)
        setResults([
            ...results,
            ...domains
        ])

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

            <PageHeader
                className="page-search-header"
                title="Results"
                subTitle=""
            />

            {
                search &&
                <InfiniteScroll
                    pageStart={0}
                    loadMore={loadMore}
                    hasMore={hasNext}
                    loader={<div className="loader" key={0}>Loading ...</div>}
                >
                    <DomainList domains={results} searchedWord={search} />
                </InfiniteScroll>
            }

        </MainLayout>
    )
}

export default SearchPage
