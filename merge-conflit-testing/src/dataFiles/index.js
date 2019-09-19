const init = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const first = ["John", "Sally", "Bill", "Kairen", "Xavier", "Sebastion"]

const last = ["Burns", "Vars", "Whitely", "Whitly", "Fondan"]

export default init.map(num => {
    return {
        id: num,
        firstName: first[Math.floor(Math.random()*first.length)],
        lastName: last[Math.floor(Math.random()*last.length)],
    }
})