import { useBunnies } from '../../state/hooks/fuzzyBunny';
import DeleteButton from '../Forms/DeleteButton';
import styles from './BunnyList.css';

export function BunnyList() {
  const { bunnies } = useBunnies();
  console.log(bunnies);
  return (
    <>
      <ul className={styles.BunnyList}>
        {bunnies.map((bunny) => (
          <li key={bunny.id}>
            <h3>{bunny.name}</h3>
            <DeleteButton />
          </li>
        ))}
      </ul>
      <form className={styles.AddBunny}>
        <input
          required
          title={`Add a new bunny to the ${'Ivanova'} family`}
          placeholder="new bunny..."
        />
        <button>⊕</button>
      </form>
    </>
  );
}
