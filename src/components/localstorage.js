// localStorage.js

const STORAGE_KEY = 'code_wallet_fragments';

// Récupère tous les fragments depuis localStorage
export function getFragments() {
  const fragments = localStorage.getItem(STORAGE_KEY);
  return fragments ? JSON.parse(fragments) : [];
}

// Sauvegarde les fragments dans localStorage
export function saveFragments(fragments) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(fragments));
}

// Ajoute un nouveau fragment
export function addFragment(fragment) {
  const fragments = getFragments();
  fragments.push(fragment);
  saveFragments(fragments);
}

// Met à jour un fragment existant par son ID
export function updateFragment(updatedFragment) {
  const fragments = getFragments();
  const index = fragments.findIndex(f => f.id === updatedFragment.id);
  if (index !== -1) {
    fragments[index] = updatedFragment;
    saveFragments(fragments);
  }
}

// Supprime un fragment par son ID
export function deleteFragment(fragmentId) {
  const fragments = getFragments();
  const updatedFragments = fragments.filter(f => f.id !== fragmentId);
  saveFragments(updatedFragments);
}

// Récupère un fragment par son ID
export function getFragmentById(fragmentId) {
  const fragments = getFragments();
  return fragments.find(f => f.id === fragmentId);
}
