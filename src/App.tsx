import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navbar } from "./Components"
import { IArticle } from "./Components/ArticleCard/ArticleCard"
import { ArticlePage, Home } from "./Pages"

const articles: IArticle[] = [
  {
    header: "Gömstället",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce odio odio, commodo eget dolor ac, aliquam eleifend eros.",
    path: "../../Assets/Images/Image1.jpeg",
    id: "32234242342352345",
  },
  {
    header: "Gamla berget",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce odio odio, commodo eget dolor ac, aliquam eleifend eros.",
    path: "../../Assets/Images/Image1.jpeg",
    id: "2384728394789234",
  },
  {
    header: "Mineralvattnet",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce odio odio, commodo eget dolor ac, aliquam eleifend eros.",
    path: "../../Assets/Images/Image1.jpeg",
    id: "98543959348590235",
  },
  {
    header: "Gammeleken",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce odio odio, commodo eget dolor ac, aliquam eleifend eros.",
    path: "../../Assets/Images/Image1.jpeg",
    id: "198959238592384",
  },
]

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home articles={articles} />} />
          <Route path="/article/:id" element={<ArticlePage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
