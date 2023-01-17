import React, { createContext, useReducer } from "react";

import NewsReducer from "./NewsReducer";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {

    const initialState = {
        data: [],
        loading: true,
        searchedNews:[]
      
    }
 
    const [state, dispatch] = useReducer(NewsReducer, initialState)
   
  // other API option - NewsAPI
  // fetched response - data.articles
  // obj props have some differences and additions - article.urlToImage, article.description, article.author, article.source.name
  // NewsItem, NewsArticle, NewsContext (searchNews where obj.title and obj.description) needs to be updated
  // problem - NewsAPI allows only to run from localhost for free, to use in Netlify or other hosting service you need to pay
  // Code with API endpoint:

 /*  const apiKey = "8c3831e173fb4674b1387ec738dfd408"; */
 /*  const getNews = async () => {
      const response = await fetch(`http://newsapi.org/v2/everything?q=it&from=2023-01-12&pageSize=50&sortBy=popularity&apiKey=${apiKey}`)
      const data = await response.json()
      console.log(data)
      
      dispatch({
          type: 'GET_NEWS',
          payload: data.articles
      })
      
  } */

  // get all news
  const getNews = async () => {
    const response = await fetch(`https://api.spaceflightnewsapi.net/v3/articles`)
    const data = await response.json()
    console.log(data)
    
    dispatch({
        type: 'GET_NEWS',
        payload: data
    })
    
  }

    //get searched news and highlight search term

    const searchNews = (array, searchItem) => {
        const searchedNews = array
            //filter searched news
            .filter((item) => {
            return item.title.toLowerCase().includes(searchItem.toLowerCase()) || item.summary.toLowerCase().includes(searchItem.toLowerCase())
            //highlight search term
         }).map(item => {
            let newTitle = item.title.replace(
              new RegExp(searchItem, 'gi'),
              match =>
                `<mark style="background: yellow; color: black;">${match}</mark>`
            )
            let newContent = item.summary.replace(
              new RegExp(searchItem, 'gi'),
              match =>
                `<mark style="background: yellow; color: black;">${match}</mark>`
            )
            return {
              ...item,
              title: newTitle,
              summary: newContent,
            }
          })

         dispatch({
            type: 'GET_SEARCHED_NEWS',
            payload: searchedNews
        })

        return searchedNews
    }

    return (
      <NewsContext.Provider value={{ 
        data: state.data,
        loading: state.loading,
        searchedNews: state.searchedNews,
        getNews,
        searchNews,
      
        }}>
        {props.children}
      </NewsContext.Provider>
    );
  };