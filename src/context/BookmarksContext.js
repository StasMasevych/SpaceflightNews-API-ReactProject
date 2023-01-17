import React, { createContext, useReducer } from "react";

import BookmarksReducer from "./BookmarksReducer";

export const BookmarksContext = createContext();

export const BookmarksContextProvider = (props) => {

    const initialState = {
        bookmarkItems: []
    }
 
    const [state, dispatch] = useReducer(BookmarksReducer, initialState)

    // add bookmaks to item
    const bookmarkItem = (item, array) => {
        localStorage.setItem("bookmarks", JSON.stringify([item, ...array]))
        dispatch({
          type: 'ADD_BOOKMARK_ITEM',
          payload: item,
        })
        console.log(item)
      }

    // delete bookmark from item
    const unBookmarkItem = (item, array) => {
        const newBookmarkItems = array.filter(
          (bookmarkItem) => bookmarkItem !== item
        )
        localStorage.setItem("bookmarks", JSON.stringify(newBookmarkItems))
        dispatch({
          type: 'DELETE_BOOKMARK_ITEM',
          payload: item,
        })
      }

    return (
      <BookmarksContext.Provider value={{ 
        bookmarkItems: state.bookmarkItems,
        loading: state.loading,
        bookmarkItem,
        unBookmarkItem
        }}>
        {props.children}
      </BookmarksContext.Provider>
    );
  };