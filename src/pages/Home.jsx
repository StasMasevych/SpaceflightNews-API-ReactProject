import { useNewsContext } from '../hooks/useNewsContext'

import Button from '@mui/material/Button';
//components

import NewsSearch from '../components/news/NewsSearch'
import NewsResults from '../components/news/NewsResults'

function Home() {
  const {data, searchedNews} = useNewsContext()

  const refreshPage = () => {
    window.location.reload();
  }

  return (
    <>
      <NewsSearch/>
      <div className="results">
        <h2>Results: {searchedNews.length > 0 ? searchedNews.length : data.length} News</h2>
      </div>
      <Button onClick={refreshPage} variant="contained" size="large" sx={{background: '#12d38c', "&:hover": {background: '#05e693'}, marginTop: 4, marginLeft: 4}}>         
        Refresh page
      </Button>
      <NewsResults/>
    </>
  )
}

export default Home