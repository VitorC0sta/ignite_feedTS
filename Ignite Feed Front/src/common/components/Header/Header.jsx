import styles from './Header.module.css'
import igniteLogo from '../../../assets/ignite_symbol.svg'

export function Header() {
  const explanationText = "Logo do Aplicativo: Dois triângulos verdes de tamanhos diferentes encostados e rotacionados."

  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt={explanationText} />
    </header>
  )
}