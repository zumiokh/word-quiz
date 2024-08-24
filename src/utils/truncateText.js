export function formatText(text, length = 10) {
  const lowerCaseText = text.toLowerCase().split("");
  const newText = lowerCaseText.map((letter, i) => {
    if (i === 0) return letter.toUpperCase();

    return letter;
  });

  if (newText.length <= length) return newText.join("");

  return newText.slice(0, length).join("") + "...";
}
