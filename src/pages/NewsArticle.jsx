import { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

import Button from '@mui/material/Button';
import { FaHome, FaRegPaperPlane } from "react-icons/fa";

import { useNewsContext } from "../hooks/useNewsContext";


function NewsArticle() {
  const {getNews, data} = useNewsContext()

  const params = useParams()
  console.log(params)

  const navigate = useNavigate()

  useEffect(() => {
    getNews()
  },[])

  const backToHome = () => {
    navigate('/')
  }
  

  return (
    <div className="single-article__container">
     {data.map((el) => {
      if (el.publishedAt === params.publishedAt) {
        return (
          <section key={el.publishedAt} className="single-article">
            <img src={el.imageUrl} alt="img"/>
            <div>
              <h2>{el.title}</h2>
              {/* <p>Author: {el.author}</p> */}
              <p>{el.summary}</p>
              <h4>Published: {el.publishedAt}</h4>
            </div>
            <div className="single-article__links">
              <Button onClick={backToHome} variant="contained" size="large" sx={{background: '#12d38c', "&:hover": {background: '#05e693'}}}>
                <FaHome style={{marginRight:'10',marginBottom: '2'}} size='18'/>
                Back to news
              </Button>
              <Button variant="contained" size="large" sx={{background: '#12d38c', "&:hover": {background: '#05e693'}}}>
                <a href={el.url} className="single-article-link_original">
                <FaRegPaperPlane style={{marginRight:'10',marginTop: '0'}} size='14'/>
                Visit original source
                </a>
              </Button>
            </div>
          </section>
        )
      }
     })}
    
    </div>
  )
}

export default NewsArticle