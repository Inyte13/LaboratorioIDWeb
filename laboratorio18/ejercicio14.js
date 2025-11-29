const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/
console.log(regex.test("22/12/2025")) 
console.log(regex.test("1999/10/2024"))
console.log(regex.test("12/15/2022"))
