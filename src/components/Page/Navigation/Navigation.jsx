/* eslint-disable react/prop-types */
// import { Link } from 'react-router-dom';
// import styles from './Navigation.css';

// export default function Navigation() {
//   return (
//     <nav className={styles.Navigation}>
//       <Link to="/">Home</Link>
//       <Link to="pokedex">Pokedex</Link>
//       <Link to="fuzzy-bunny">Fuzzy Bunnies</Link>
//       <Link to="about">About</Link>
//     </nav>
//   );
// }

import { Link } from 'react-router-dom';
import styles from './Navigation.css';

export default function Navigation({ navigation }) {
  return (
    <nav className={styles.Navigation}>
      {navigation.map(({ to, label }) => (
        <NavLink key={to} to={to}>
          {label}
        </NavLink>
      ))}
    </nav>
  );
}

function NavLink({ children, ...rest }) {
  return (
    <Link className="label-text" {...rest}>
      {children}
    </Link>
  );
}
