import { ReactNode } from "react"
import styles from "./ArticleContainer.module.scss"

interface Props {
  children: ReactNode
}

const ArticleContainer = ({ children }: Props) => {
  return <div className={styles.ArticleContainer}>{children}</div>
}

export default ArticleContainer
