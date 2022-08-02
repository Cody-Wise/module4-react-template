import Menu from './Menu.jsx';
import Navigation from '../Navigation/Navigation.jsx';
import styles from './Header.css';
const primary = [
  { to: '/', label: 'Home' },
  { to: 'pokedex', label: 'Pokedex' },
  { to: 'fuzzy-bunny', label: 'Fuzzy Bunny' },
  { to: 'contact', label: 'Contact' },
];

export default function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.MenuContainer}>
        <Menu navigation={primary} />
      </div>

      <h1>My App</h1>

      <div className={styles.NavigationContainer}>
        <Navigation navigation={primary} />
      </div>

      <div>User</div>
    </header>
  );
}
