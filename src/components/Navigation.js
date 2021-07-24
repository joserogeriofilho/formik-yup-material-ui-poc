import { Link } from "react-router-dom";
import styles from './Navigation.module.scss';

export default function Navigation() {
  return (
    <div className={styles.wrapper}>
      <Link to="/">HOME</Link>
      <Link to="/subscription">SUBSCRIPTION</Link>
      <Link to="/tickets">TICKETS</Link>
    </div>
  )
}