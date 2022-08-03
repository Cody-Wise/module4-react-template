/* eslint-disable react/prop-types */
// import { useEffect, useRef, useState } from 'react';
// eslint-disable-next-line max-len
// import { useFamilies, useFamilyActions } from '../../state/hooks/fuzzyBunny.js';
// import { InputControl } from '../Forms/FormControls.jsx';
// import styles from './FamilyList.css';

// export default function FamilyList() {
//   const { families } = useFamilies();

//   if (!families) return null;

//   return (
//     <ul className={styles.FamilyList}>
//       {families.map((family) => (
//         <Family key={family.id} family={family} />
//       ))}
//     </ul>
//   );
// }

// function Family({ family }) {
//   const { remove, update } = useFamilyActions();
//   const [editing, setEditing] = useState(false);
//   const ref = useRef();
//   const [name, setName] = useState(family.name);

//   const handleRemove = () => remove(family.id);

//   const handleDoubleClick = () => {
//     setEditing(true);
//   };

//   useEffect(() => {
//     if (editing) ref.current.focus();
//   }, [editing]);

//   const handleChange = ({ target }) => {
//     setName(target.value);
//   };

//   const handleEdit = async () => {
//     setEditing(false);
//     if (name === family.name) return;
//     await update({ name, id: family.id });
//   };

//   const handleKeyUp = (e) => {
//     if (e.code === 'Enter') handleEdit();
//   };

//   return (
//     <li className={styles.Family}>
//       {editing ? (
//         <InputControl
//           ref={ref}
//           name="name"
//           value={name}
//           onChange={handleChange}
//           onKeyUp={handleKeyUp}
//           onBlur={handleEdit}
//         />
//       ) : (
//         <h2 onDoubleClick={handleDoubleClick}>{family.name}</h2>
//       )}
//       <button onClick={handleRemove}>ⓧ</button>
//     </li>
//   );
// }

import { useEffect } from 'react';
import { useFamilies } from '../../state/hooks/fuzzyBunny.js';
import { getBunnies } from '../../state/services/fuzzy-bunny-service.js';
import Family from './Family.jsx';
import styles from './FamilyList.css';

export default function FamilyList() {
  const { families } = useFamilies();
  useEffect(() => {
    const fetchData = async () => {
      const data = await getBunnies();
      console.log(data, 'familylist');
      return data;
    };
    fetchData();
  }, []);
  if (!families) return null;

  return (
    <ul className={styles.FamilyList}>
      {families.map((family) => (
        <Family key={family.id} family={family} />
      ))}
    </ul>
  );
}
