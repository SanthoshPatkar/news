import {useState,useEffect} from 'react';

function Main(){
  const [articles,setArticle]=useState([]);
    useEffect(()=>{
    let url="https://newsapi.org/v2/everything?q=microsoft&apiKey=ff9fdced1e1d4228a64e691c31dce29c";
    fetch(url)
    .then((response)=>response.json())
    .then((news)=>{
      setArticle(news.articles);
     })
    },[])
    return(
       <div className="container">
           <div className="header">
               {
                   articles.map((article,index)=>{
                        <div className="article">
                            <div className="news-image">
              
                            </div>
                            <div className="news-details">
                            </div>

                        </div>
                   })
               }
           </div>
       </div>
    )
}
export default Main