export default function formatSize(size: number, i: number = 0) {
  const units = ['б', 'Кб', 'Мб', 'Гб', 'Тб'];
  while (size / 1024 > 0 && i < 5) {
    formatSize(size / 1024, i++)
  }
  if (i > 1) {
    return `${Math.trunc(size * 10) / 10} ${units[i]}`
  }
  else return `${Math.trunc(size)} ${units[i]}`
}