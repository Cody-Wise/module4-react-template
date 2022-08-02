import styles from './BunnyList.css';

export function BunnyList() {
  return (
    <>
      <ul className={styles.BunnyList}>
        <li>
          <h3>yotz</h3>
          <button>ⓧ</button>
        </li>
        <li>
          <h3>yolo</h3>
          <button>ⓧ</button>
        </li>
        <li>
          <h3>Hector</h3>
          <button>ⓧ</button>
        </li>
        <li>
          <h3>O&apos;Hare</h3>
          <button>ⓧ</button>
        </li>
        <li>
          <h3>add new</h3>
          <button>ⓧ</button>
        </li>
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
