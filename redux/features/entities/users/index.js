import { normalizedUsers } from "../../../../constans/mock-norm";
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user', 
    initialState: {
        entities: normalizedUsers.reduce((acc, user) => {
            acc[user.id] = user
            
            return acc
        }, {}),
        ids: normalizedUsers.map(({id}) => id)
    }
})

export default userSlice