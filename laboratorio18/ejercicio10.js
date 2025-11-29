const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
console.log(regex.test("Abcdef12"))
console.log(regex.test("abcdef12"))
console.log(regex.test("ABCDEFG1"))
console.log(regex.test("Abcdefgh"))