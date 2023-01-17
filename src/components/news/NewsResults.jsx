
import { useEffect} from 'react';

import { useNewsContext } from '../../hooks/useNewsContext';

import NewsItem from './NewsItem'
import Spinner from '../layout/Spinner'


function NewsResults() {
  const { data, loading, getNews, searchedNews } = useNewsContext();

  useEffect(() => {
    getNews()
  },[])

  return (
    <div className="all__news">
      { 
        loading
        ? (
          <Spinner/>
        )
        : data && searchedNews.length < 1
        ? (
          data.map((article) => (
          <NewsItem article={article} key={article.url}/>
        ))
        )
        : (
          searchedNews.map((article) => (
          <NewsItem article={article} key={article.url}/>
        ))
        )
      }
    </div>
  )
  
}

export default NewsResults