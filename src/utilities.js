function getRandomNumber(max) {
  return Math.floor(Math.random() * max)
}

export function generateRandomNumbers(n, max) {
  let randomNumbers = new Set()
  
  while(randomNumbers.size < n) {
    let randomNumber = getRandomNumber(max)
    if(randomNumber == 0) {
      randomNumber = 1
    }
    randomNumbers.add(randomNumber)
  }

  return Array.from(randomNumbers)
}