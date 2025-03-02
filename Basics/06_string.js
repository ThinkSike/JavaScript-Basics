const name = 'Tiya'
const repoCount = 90

console.log(name + repoCount + "Value")
console.log("Heloo my name is ${name} and my repoCount is ${repoCount}")

const gameName = new String('Valorant')
console.log(gameName)
console.log(typeof gameName)
console.log(gameName.length)
console.log(gameName.__proto__)
console.log(gameName.charAt(0))
console.log(gameName.indexOf('a'))

const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName.slice(-8, 4)
console.log(anotherString)

const newString1 = "   too much space..      "
console.log(newString1)
console.log(newString1.trim())

const url = "https://in/tiyabhavsar.com/tiya%20bhavsar"

console.log(url.replace('%20', '-'))
console.log(url.includes('tiya'))

console.log(gameName.split('-'))
