
import { useContext } from "react"
import { NewsContext } from "../context/NewsContext" 

export const useNewsContext = () => {
  const context = useContext(NewsContext)

  if (context === undefined) {
    throw new Error("useNewsContext() must be used inside a NewsContextProvider")
  }

  return context
}