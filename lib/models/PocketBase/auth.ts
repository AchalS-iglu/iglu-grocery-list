import { newUser_t } from "../user"
import { pocketBaseApp } from "./app"

export const registerUser = async (form: newUser_t) => {
    const user = await pocketBaseApp.collection('users').create({ ...form, emailVisibility: false, name: "test", })
    return user
}

export const loginWithUserPass = async (username: string, password: string) => {
    await pocketBaseApp.collection('users').authWithPassword(username, password)
}

export const logout = () => {
    return pocketBaseApp.authStore.clear()
}

export const getCurrentUser = () => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('pocketbase-auth')
    }
}