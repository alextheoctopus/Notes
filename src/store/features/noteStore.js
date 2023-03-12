import { createSlice } from "@reduxjs/toolkit";

// здесь создаем объект ,который будет хранить данные об авторизации пользователя
//он содержит начальные значения данных и все методы ,которы позволяют эти данные менять

export const noteStore = createSlice({
    name: "note",//это аргументы функции createSlice
    initialState: {//опред стурктуру данных и их начальные значения
        text: localStorage.getItem('notes'),
        login: localStorage.getItem('login'),
        status: localStorage.getItem('status'),//по умолчанию не авторизирован
    },
    reducers: {
        logining: (state) => {
            state.name = localStorage.getItem('name');
            state.login = localStorage.getItem('login');
            state.status = localStorage.getItem('status');
        },
        logouting: (state) => {
            state.name = localStorage.removeItem('name', null);
            state.login = localStorage.removeItem('login', null);
            state.status = localStorage.removeItem('status', false);
        }
    }
});