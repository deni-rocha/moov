function verifyWindowSize(): boolean {
  const windowSize = window.innerWidth
  if (windowSize <= 800) {
    return false
  } else {
    return true
  }
}

export default verifyWindowSize
