/* eslint-disable react/prop-types */
import { useState } from 'react';
import DeleteButton from '../Forms/DeleteButton.jsx';
import { InputControl, FormButton } from '../Forms/FormControls.jsx';
import { useBunnyActions } from '../../state/hooks/fuzzyBunny.js';
import styles from './BunnyTags.css';
export default function BunnyTags({ bunnies, familyID }) {
  const { add } = useBunnyActions();
  const [name, setName] = useState('');
  //   const [family_id, setFamilyId] = useState('');
  const handleChange = ({ target }) => setName(target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await add({ name, family_id: familyID });
    setName('');
  };

  return (
    <>
      <ul className={styles.BunnyTags}>
        {bunnies.map((bunny) => (
          <li key={bunny.id}>
            <h3>{bunny.name}</h3>
            <DeleteButton />
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
