import clsx from "clsx"
import { ReactNode } from "react"
import styles from "./AppContainer.module.scss"

interface Props {
  children: ReactNode
  customClass?: string
}

const AppContainer = ({ children, customClass }: Props) => {
  return <div className={clsx(styles.AppContainer, customClass)}>{children}</div>
}

export default AppContainer
