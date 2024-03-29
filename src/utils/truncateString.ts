export function truncateString(text: string, maxChar: number): string {
  if (text.length <= maxChar) {
    return text;
  }

  return `${text.substring(0, maxChar)}...`;
}
