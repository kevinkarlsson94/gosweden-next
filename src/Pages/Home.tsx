import { Typography } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { AppContainer, ArticleCard, ArticleContainer, Hero } from "../Components"
import { IArticle } from "../Components/ArticleCard/ArticleCard"

interface Props {
  articles: IArticle[]
}

const Home = ({ articles }: Props) => {
  const { isLoading, error, data, isFetching } = useQuery<IArticle[]>(["article"], () =>
    axios.get("https://62ffdc129350a1e548e77f42.mockapi.io/articles").then((res) => res.data)
  )

  return (
    <>
      <Hero header="Välkommen till GoSweden - Hitta små upplevelser som du inte visste om!" />
      <AppContainer>
        <Typography variant="h4" component="h2" mb="32px" mt="32px">
          Populära destinationer
        </Typography>

        <ArticleContainer>
          {data?.map((article) => (
            <ArticleCard article={article} key={article.header} />
          ))}
        </ArticleContainer>
      </AppContainer>
    </>
  )
}

export default Home
