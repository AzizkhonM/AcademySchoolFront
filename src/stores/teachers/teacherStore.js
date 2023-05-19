import { reactive } from "vue"
import { defineStore } from "pinia";

export const teacherStore = defineStore("teacher", () => {

    /* localStorage.setItem("students", JSON.stringify(students)) */

    const state = reactive({
        list: JSON.parse(localStorage.getItem("teachers")) || []
    })

    const ADD = (data) => {
        let id = generateID()
        data.id = id
        state.list.push(data)
        localStorage.setItem("teachers", JSON.stringify(state.list))
    }

    const generateID = () => {
        const min = 1000;
        const max = 9999;
        const id = Math.floor(Math.random() * (max - min + 1)) + min;
        
        return id;
    }


    const DELETE = (id) => {
        const arr = JSON.parse(localStorage.getItem("teachers"))
        let ind
        for(let i in arr){
            console.log(i);
            if(arr[i].id == id){
                ind = i
            }
        }
        arr.splice(ind, 1)
        localStorage.setItem("teachers", JSON.stringify(arr))
    }

    return { ADD, DELETE }

})