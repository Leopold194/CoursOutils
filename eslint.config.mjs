import json from '@eslint/json';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  // N'ignore pas tous les JS !
  {
    ignores: ['node_modules/**', 'dist/**'], // Ignorer uniquement les dossiers classiques
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        browser: true,
        node: true
      }
    },
    rules: {
      'no-console': 'warn',
      'indent': ['error', 2],
      'quotes': ['error', 'single']
    }
  }
]);
