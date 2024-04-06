export const spaceToDash = (str: string | null) => {
  if (str) {
    return str.replace(/ /g, '-')
  }
  return ''
}

export const dashToSpace = (str: string | null) => {
  if (str) {
    return str.replace(/-/g, ' ')
  }
  return ''
}
