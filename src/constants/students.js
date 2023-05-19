export const students = [
    {
        id: 1234,
        img: "https://i.pinimg.com/originals/cd/6b/60/cd6b6008ab44208f0fe9bde1531ac2a6.jpg",
        first_name: "Asilbek",
        second_name: "Umarov",
        third_name: "Rahmonovich",
        stage: "Frilanserlik",
        login: "Asilbek",
        birth_date: "1999-09-01",
        password: "asilbek_u"
    },
]


export const addStud = (data) => {
    students.push(data)
}