import { BrowserRouter, Routes, Route } from 'react-router-dom';

//components

import Navbar from './components/layout/Navbar';

//pages

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import NewsArticle from './pages/NewsArticle';
import Bookmarks from './pages/Bookmarks';

//context providers

import  { NewsContextProvider } from './context/NewsContext'
import { BookmarksContextProvider } from './context/BookmarksContext';

function App() {
  return (
    <NewsContextProvider>
      <BookmarksContextProvider>
        <BrowserRouter>
            <Navbar/>
            <main className="main">
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/articles/:publishedAt" element={<NewsArticle/>}/>
              <Route path="/bookmarks" element={<Bookmarks/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/notfound" element={<NotFound/>}/> 
              <Route path="/*" element={<NotFound/>}/>       
            </Routes>
            </main>
        </BrowserRouter>
      </BookmarksContextProvider>
    </NewsContextProvider>
  )
}

export default App;
