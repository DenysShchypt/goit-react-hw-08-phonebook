import { nanoid } from "nanoid";
import { createSlice } from "@reduxjs/toolkit";

const contactsState = [];

export const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsState,
    reducers: {
        addContact: {
            reducer(state, action) {
                if (state.some(contact => contact.name === action.payload.name)) {
                    alert(`${action.payload} is already in contacts`);
                } else {
                    state.push(action.payload)
                }
            },
            prepare(name, phone) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        phone,
                    },
                };
            },
        },
        removeContact(state, action) {
            const index = state.findIndex(contact => contact.id === action.payload)
            state.splice(index, 1)
        }
    }
});

export const { removeContact, addContact } = contactsSlice.actions;
