import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
    try {
      const data = await fs.readFile(PATH_DB, 'utf-8'); // Зчитуємо файл як текст
      return JSON.parse(data); // Парсимо JSON-рядок у JavaScript-об'єкт
    } catch (error) {
      console.error('Error reading contacts:', error.message);
      return []; // Повертаємо порожній масив у разі помилки
    }
  };