/**
 * This function converts the string
 * The numbers in the string are converted into letters next to them.
 *
 * By:      Yiyun Qin
 * Version: 1.0
 * Since:   2022-11-07
 */

import promptSync from 'prompt-sync'

/**
 * The function replaces the number in the string to letters on its right.
 *
 * @param {string} string The import string from the user
 * @returns {string} answerString blowup numbers to letters
 */
function blowup (string: string): string {
  const answer = []
  let indexString: string
  let indexNextString: string
  let list = []
  let index: number = -1
  let indexNext: number = -1
  list = Array.from(string)
  for (let loopCounter = 0; loopCounter < list.length; loopCounter++) {
    indexString = list[loopCounter]
    index = parseInt(indexString)
    // if the indexString is not the last character in the string
    if (loopCounter + 1 !== list.length) {
      indexNextString = list[loopCounter + 1]
      indexNext = parseInt(indexNextString)
      // if the index is a letter
      if (isNaN(index)) {
        answer.push(indexString)
        continue
        // if two continue number
      } else if (Number.isInteger(index) && Number.isInteger(indexNext)) {
        continue
        // if one number following by a letter
      } else {
        for (let i = 0; i < index; i++) {
          answer.push(indexNextString)
        }
        continue
      }
      // if the indexString is the last character in the string
    } else {
      if (isNaN(index)) {
        answer.push(indexString)
      } else {
        continue
      }
    }
  }
  const answerString = answer.join('')
  return answerString
}

let newString: string
const prompt = promptSync()
const input = prompt('Input a string: ')
if (input !== '') {
  newString = blowup(input)
  console.log(`\nNew string is ${newString}`)
} else {
  console.log('\nPlease input a string!')
}
console.log('\nDone.')
