/* eslint-disable indent */
import { useBunnies } from '../../state/hooks/fuzzyBunny';
import DeleteButton from '../Forms/DeleteButton';
import styles from './BunnyList.css';
import { useState } from 'react';
import { useBunnyActions } from '../../state/hooks/fuzzyBunny.js';
import { FormButton, InputControl } from '../Forms/FormControls';

// eslint-disable-next-line react/prop-types
export function BunnyList({ familyID }) {
  const { bunnies } = useBunnies();
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
      <ul className={styles.BunnyList}>
        {familyID
          ? bunnies
              .filter((bunny) => bunny.family_id === familyID)
              .map((bunny) => (
                <li key={bunny.id}>
                  <h3>{bunny.name}</h3>
                  <DeleteButton onClick={() => handleRemove(bunny)} />
                </li>
              ))
          : bunnies.map((bunny) => (
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
