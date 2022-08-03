import { useContext, useEffect, useState, useMemo } from 'react';
import {
  FuzzyBunnyContext,
  FuzzyBunnyDispatchContext,
} from '../context/FuzzyBunnyContext.jsx';
import {
  getFamiliesWithBunnies,
  removeFamily,
  addFamily,
  updateFamily,
  getBunnies,
  addBunny,
} from '../services/fuzzy-bunny-service.js';
import { showSuccess, showError } from '../services/toaster.js';

export function useFamilies() {
  const [error, setError] = useState(null);
  const { families } = useContext(FuzzyBunnyContext);
  const { familyDispatch } = useContext(FuzzyBunnyDispatchContext);

  useEffect(() => {
    if (families) return;
    let ignore = false;

    const fetch = async () => {
      const { data, error } = await getFamiliesWithBunnies();
      if (ignore) return;

      if (error) {
        setError(error);
      }
      if (data) {
        familyDispatch({ type: 'load', payload: data });
      }
    };

    fetch();

    return () => (ignore = true);
  }, []);

  return { families, error };
}

export function useBunnies() {
  const [error, setError] = useState(null);
  const { bunnies } = useContext(FuzzyBunnyContext);
  console.log(bunnies, 'hook');
  const { bunniesDispatch } = useContext(FuzzyBunnyDispatchContext);
  useEffect(() => {
    if (bunnies) return;
    let ignore = false;

    const fetch = async () => {
      const { data, error } = await getBunnies();
      if (ignore) return;

      if (error) {
        setError(error);
      }
      if (data) {
        bunniesDispatch({ type: 'load', payload: data });
      }
    };

    fetch();

    return () => (ignore = true);
  }, []);

  return { bunnies, error };
}

function createDispatchActions(dispatch) {
  return function createAction({ service, type, success }) {
    return async (...args) => {
      const { data, error } = await service(...args);

      if (error) showError(error.message);

      if (data) {
        dispatch({ type, payload: data });
        const successMessage = success(data);
        showSuccess(successMessage);
      }
    };
  };
}

export function useFamilyActions() {
  const { familyDispatch } = useContext(FuzzyBunnyDispatchContext);

  const createAction = createDispatchActions(familyDispatch);

  const add = createAction({
    service: addFamily,
    type: 'add',
    success: (data) => `Added ${data.name}`,
  });

  const remove = createAction({
    service: removeFamily,
    type: 'remove',
    success: (data) => `Removed ${data.name}`,
  });

  const update = createAction({
    service: updateFamily,
    type: 'update',
    success: (data) => `Updated ${data.name}`,
  });

  return { add, remove, update };
}

export function useBunnyActions() {
  const { bunniesDispatch } = useContext(FuzzyBunnyDispatchContext);

  const createAction = createDispatchActions(bunniesDispatch);

  const add = createAction({
    service: addBunny,
    type: 'add',
    success: (data) => `Added ${data.name}`,
  });
  return useMemo(() => ({ add }), [bunniesDispatch]);
}

// eslint-disable-next-line eol-last
