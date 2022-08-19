import { Typography } from "@mui/material"
import AppContainer from "../../Components/AppContainer/AppContainer"

import styles from "./Article.module.scss"

const Article = () => {
  return (
    <div>
      <AppContainer customClass={styles.Article}>
        <img src={require("../../Assets/Images/Image4.jpeg")} />
        <div className={styles.ArticleText}>
          <i>By Kevin - 2022-01-01</i>
          <Typography variant="h2" component="h1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>

          <Typography component="p">
            In et laoreet leo. Fusce semper et massa eget fringilla. Etiam vitae ipsum ut sem eleifend fermentum.
            Maecenas quis cursus eros, vitae sollicitudin leo. Cras dapibus ligula nec laoreet iaculis. Aliquam id
            efficitur sapien, ut tempor mi. Nulla tincidunt leo vel tristique lacinia. Fusce auctor mattis diam, non
            ullamcorper eros gravida vel.
          </Typography>

          <Typography component="p">
            Morbi congue ex vel tincidunt ultricies. In hac habitasse platea dictumst. Suspendisse eu mauris urna. Nunc
            blandit, odio id posuere semper, tortor justo varius risus, sed venenatis justo ex et leo. Duis ex diam,
            gravida sit amet vehicula et, venenatis quis erat. In aliquet mollis suscipit. Suspendisse in placerat nunc,
            at pretium dui.
          </Typography>

          <Typography component="p">
            Phasellus finibus sollicitudin nulla. Fusce feugiat, nulla sed sagittis congue, magna neque sodales ipsum,
            at feugiat arcu magna suscipit lacus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam
            erat volutpat. Integer gravida elit in consectetur elementum. Pellentesque in enim sit amet nisi ullamcorper
            lobortis nec vel nibh. Ut a est et odio cursus commodo. In placerat fringilla consectetur. Morbi id sagittis
            nulla.
          </Typography>
        </div>
        <iframe
          width="425"
          height="350"
          src="https://www.openstreetmap.org/export/embed.html?bbox=16.20064973831177%2C59.6188001467026%2C16.20967268943787%2C59.62336320080811&amp;layer=mapnik"
        ></iframe>
        <br />
        <small>
          <a href="https://www.openstreetmap.org/#map=17/59.62108/16.20516">Visa större karta</a>
        </small>
      </AppContainer>
    </div>
  )
}

export default Article
