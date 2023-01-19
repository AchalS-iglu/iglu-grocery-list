import { collection, deleteDoc, doc, getDocs, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../Firebase/app";

export type ToDo_t = {
    id: string;
    user_id: string;
    desc: string;
    completed: boolean;
    created: number;
    updated: number;
}

export const getTodos = async (user_id: string) => {
    var todos: ToDo_t[] = [];
    try {
        await getDocs(collection(db, `Users/${user_id}/todos`)).then((data) => {
            if (data) {
                data.forEach((doc) => {
                    todos.push({ id: doc.id, ...doc.data() } as ToDo_t)
                });
            }
        }).catch((err) => console.log(err))
    } catch (err) { console.log(err) }
    return todos;
}

export const createToDo = async (todo: ToDo_t) => {
    try {
        await setDoc(doc(db, `Users/${todo.user_id}/todos`, todo.id), todo)
    } catch (err) { console.log(err) }
}

export const updateTodo = async (ToDo: ToDo_t) => {
    try {
        await updateDoc(doc(db, `Users/${ToDo.user_id}/todos/`, ToDo.id), ToDo)
    } catch (err) { console.log(err) }
}

export const toggleTodo = async (ToDo: ToDo_t) => {
    try {
        await updateDoc(doc(db, `Users/${ToDo.user_id}/todos/`, ToDo.id), { completed: !ToDo.completed })
    } catch (err) { console.log(err) }
}

export const deleteTodo = async (ToDo: ToDo_t) => {
    try {
        await deleteDoc(doc(db, `Users/${ToDo.user_id}/todos`, ToDo.id))
    } catch (err) { console.log(err) }
}