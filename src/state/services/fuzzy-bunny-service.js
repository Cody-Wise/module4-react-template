import { client } from './client.js';

export async function getFamiliesWithBunnies() {
  const response = await client.from('loving_families').select(`
    id,
    name,
  fuzzy_bunnies(
        id,
        family_id,
        name
    )
  `);

  return response;
}

export async function removeFamily(id) {
  const response = await client
    .from('loving_families')
    .delete()
    .eq('id', id)
    .single();

  return response;
}

export async function addFamily(family) {
  const response = await client.from('loving_families').insert(family).single();

  return response;
}

export async function updateFamily(family) {
  const response = await client
    .from('loving_families')
    .update(family)
    .eq('id', family.id)
    .single();

  return response;
}

export async function addBunny(bunny) {
  return await client.from('fuzzy_bunnies').insert(bunny).single();
}

export async function getBunnies() {
  const response = await client.from('fuzzy_bunnies').select('*');
  return response;
}
