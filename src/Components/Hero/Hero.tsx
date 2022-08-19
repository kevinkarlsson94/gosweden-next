import styles from "./Hero.module.scss"

const Hero = ({ header }: { header: string }) => {
  return (
    <div className={styles.Hero}>
      <h1>{header}</h1>
    </div>
  )
}

export default Hero
