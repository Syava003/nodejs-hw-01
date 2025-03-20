import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const existingContacts = await readContacts(); // Зчитуємо поточні контакти
    const newContacts = Array.from({ length: number }, createFakeContact); // Генеруємо нові контакти
    const updatedContacts = [...existingContacts, ...newContacts]; // Додаємо нові контакти до старих

    await writeContacts(updatedContacts); // Записуємо у файл
    console.log(`Успішно додано ${number} нових контактів!`);
  } catch (error) {
    console.error('Помилка генерації контактів:', error.message);
  }
};

// Викликаємо функцію для тестування
generateContacts(5);

