import { useBookmarksContext } from "../hooks/useBookmarksContext"

import NewsItem from "../components/news/NewsItem"

function Bookmarks() {
  const {bookmarkItems} = useBookmarksContext()

  return (
   <div className="bookmarks__container">
    <h1 className="bookmarks__title">Your bookmarks</h1>
    <br/>
    <div>
      {bookmarkItems.length === 0 ? (
        <h2 className="bookmarks__subtitle">You have {bookmarkItems.length} bookmarks</h2>
      ): (
        <h2 className="bookmarks__subtitle">{bookmarkItems.length} Bookmarks</h2>
      )}
    </div>
    <div className="bookmarks__list">
      {bookmarkItems.map((bookmark, i) => (
        <NewsItem article={bookmark} key={i}/>
      ))}
    </div>
   </div>
  )
}

export default Bookmarks