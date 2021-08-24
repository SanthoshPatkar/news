import { useState, useEffect } from 'react';

function Main() {
    const [articles, setArticle] = useState([]);
    const [searchValue, setsearchValue] = useState("Cricket")
    useEffect(() => {
        let url = `https://newsapi.org/v2/everything?q=${searchValue}&apiKey=ff9fdced1e1d4228a64e691c31dce29c`;
        fetch(url)
            .then((response) => response.json())
            .then((news) => {
                console.log(news)
                setArticle(news.articles);
            })
    }, [])
    function readNews(value) {
        setsearchValue(value);
    }
    function getnews() {
        let url = `https://newsapi.org/v2/everything?q=${searchValue}&apiKey=ff9fdced1e1d4228a64e691c31dce29c`;
        fetch(url)
            .then((response) => response.json())
            .then((news) => {
                console.log(news)
                setArticle(news.articles);
            })
    }
    return (
        <div className="container">
            <h1>LATEST NEWS</h1>
            <div className="header">
                <div className="search">
                    <input type="text" placeholder="Enter news topic" onChange={(event) => { readNews(event.target.value) }} className="search-field" />
                    <button className="btn" onClick={getnews}> Seach for News</button>
                </div>
                <h1>All Related News of Searched Topic</h1>
                {
                    articles?.length === 0 ? (<h2 className="nodata"> NO Data Found</h2>) :
                        articles.map((article, index) => (

                            <div className="article">
                                <div className="news-image">
                                    <img src={article.urlToImage} alt=" " className="img" />
                                </div>
                                <div className="news-details">
                                    <h3 className="title">{article.title}</h3>
                                    <p className="author"><span>Author</span>: {article.author}</p>
                                    <p className="description"><span>Description</span>: {article.description}</p>
                                    <p><span>Publish</span>: {article.publishedAt}</p>
                                    <p>
                                        <a href={article.url} target="blank">
                                            <button className="btn">Read Full Article</button>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        ))
                }
            </div>
        </div>
    )
}
export default Main