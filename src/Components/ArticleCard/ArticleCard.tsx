import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { useNavigate } from "react-router-dom"

export interface IArticle {
  header: string
  text: string
  path: string
  id: string
}

interface Props {
  article: IArticle
}

const ArticleCard = ({ article }: Props) => {
  const navigate = useNavigate()
  const gotoPage = () => navigate(`/article/${article.id}`)
  return (
    <Card sx={{ maxWidth: 345 }} style={{ background: "#292828", color: "#fff" }}>
      <CardMedia component="img" height="140" image={require("../../Assets/Images/Image1.jpeg")} alt="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {article.header}
        </Typography>
        <Typography variant="body2">{article.text}</Typography>
      </CardContent>
      <CardActions>
        <Button style={{ color: "#fff" }} size="small">
          Dela
        </Button>
        <Button style={{ color: "#fff" }} onClick={gotoPage} size="small">
          Se mer
        </Button>
      </CardActions>
    </Card>
  )
}

export default ArticleCard
