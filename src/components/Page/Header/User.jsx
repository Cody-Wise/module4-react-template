import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './User.css';
import { signOut } from '../../../state/services/user-service';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const className = classNames(styles.User, {
    [styles.Open]: isOpen,
  });
  const handleSignOut = () => {
    signOut();
  };

  const handleClick = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <div className={className}>
      User
      <button onClick={handleClick}>v</button>
      <div className={styles.UserMenu}>
        <Link to="profile">Profile</Link>
        <Link to="sign-out" onClick={handleSignOut}>
          Sign Out
        </Link>
      </div>
    </div>
  );
}
