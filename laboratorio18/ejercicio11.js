const regex = /https:\/\/[^\s]+/g
console.log(regex.test("https://example.com"))
console.log(regex.test("http://example.com"))