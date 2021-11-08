export default function (date: string | Date | [Date, Date], text?: string) {
  if (typeof date === 'string' || typeof date === 'function') {
    const dateFormat = new Date(date)
    return (text) ? dateFormat.toLocaleTimeString().substring(0, 5) : dateFormat.toLocaleDateString()
  }
  else return new Date().toLocaleString().substring(0, 10)
}