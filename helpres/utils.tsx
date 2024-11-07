export const fetchStudentCharacters = async () => {
  const response = await fetch(
    "https://hp-api.onrender.com/api/characters/students",
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export function getRandomElement(array: []) {
  if (array.length === 0) return undefined;

  const randomIndex = Math.floor(Math.random() * array.length);

  return array[randomIndex];
}
