import React, { useState } from 'react';

const initialState = {
    name: '',
    hobbies: [],
    language: [],
 };

export const Context = React.creatContext()

const Store = ({ children }) => {
    const [state, setState] = useState(initialState)

    return (
        <Context.Provider value={[state, setState]}>{children}</Context.Provider>
    )
}

export default Store