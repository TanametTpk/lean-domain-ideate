import axios from 'axios'
import words_configs from '../configs/words'

const API = "https://www.secureserver.net/api/v1/domains/20?currencyType=USD&marketId=en-US&pageSize=1&q="

const getDomain = (domain, pages, limit) => {

    if (!pages) pages = 1
    if (!limit) limit = 15

    // from page to index
    pages -= 1
    let start = pages*limit
    let end = start + limit
    let words = words_configs.words.slice(start , end)
    
    return words.reduce((arr, word) => {
        return [...arr, word + domain, domain + word]
    }, [])

}

const query = async(domain, pages, limit) => {

    // get all possible domain name
    let domains = getDomain(domain, pages, limit)

    // query
    let results = await Promise.all(domains.map((domain) => axios.get(API + domain)))

    // filter avaliable domain
    results = results.filter((result) => {
        return result.data.exactMatchDomain.available
    }).map((result) => result.data.exactMatchDomain.domain.split(".")[0])

    // return
    return {
        domains:results,
        hasNext: domains.length > 0
    }

}

export default {
    query
}