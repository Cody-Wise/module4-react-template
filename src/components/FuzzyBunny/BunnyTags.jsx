/* eslint-disable react/prop-types */
import { useState } from 'react';
import DeleteButton from '../Forms/DeleteButton.jsx';
import { InputControl, FormButton } from '../Forms/FormControls.jsx';
import { useBunnyActions } from '../../state/hooks/fuzzyBunny.js';
import styles from './BunnyTags.css';
export default function BunnyTags({ bunnies, familyID }) {
  const { add, remove } = useBunnyActions();
  const [name, setName] = useState('');
  //   const [family_id, setFamilyId] = useState('');
  const handleChange = ({ target }) => setName(target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await add({ name, family_id: familyID });
    setName('');
  };

  const handleRemove = async (bunny) => {
    const message = `Are you sure you want to remove bunny ${bunny.name}?`;
    if (confirm(message)) {
      await remove(bunny.id);
    }
  };

  return (
    <>
      <ul className={styles.BunnyTags}>
        {bunnies.map((bunny) => (
          <li key={bunny.id}>
            <h3>{bunny.name}</h3>
            <DeleteButton onClick={() => handleRemove(bunny)} />
          </li>
        ))}
      </ul>

      <form className={styles.AddBunny} onSubmit={handleSubmit}>
        <InputControl
          required
          title={`Add a new bunny to the ${'Ivanova'} family`}
          placeholder="new bunny..."
          value={name}
          onChange={handleChange}
        />

        <FormButton icon={true}>🐰</FormButton>
      </form>
    </>
  );
}
