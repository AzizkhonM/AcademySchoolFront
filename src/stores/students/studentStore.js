import { computed, reactive } from "vue"
import { defineStore } from "pinia";
import { students, addStud } from "../../constants/students"
import { list } from "postcss";

export const studentStore = defineStore("student", () => {

    /* localStorage.setItem("students", JSON.stringify(students)) */

    const state = reactive({
        list: JSON.parse(localStorage.getItem("students")) || []
    })

    const ADD = (data) => {
        let id = generateID()
        data.id = id
        state.list.push(data)
        localStorage.setItem("students", JSON.stringify(state.list))
    }

    const generateID = () => {
        const min = 1000;
        const max = 9999;
        const id = Math.floor(Math.random() * (max - min + 1)) + min;
        
        return id;
    }

    const DELETE = (id) => {
        const arr = JSON.parse(localStorage.getItem("students"))
        let ind
        for(let i in arr){
            console.log(i);
            if(arr[i].id == id){
                ind = i
            }
        }
        arr.splice(ind, 1)
        localStorage.setItem("students", JSON.stringify(arr))
    }

    return { ADD, DELETE }

})