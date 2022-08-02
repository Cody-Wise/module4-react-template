import AddFamily from './AddFamily.jsx';
import FamilyList from './FamilyList.jsx';
import styles from './Families.css';

export default function Families() {
  return (
    <section className={styles.Families}>
      <AddFamily />
      <FamilyList />
    </section>
  );
}
