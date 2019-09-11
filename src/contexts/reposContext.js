import React, { createContext, useState } from 'react';

const INITIAL_VALUE = [{
    id: 0,
    name: 'repositorio teste'
}]

export const ReposContext = createContext();

export default ({ children }) => {
    const [repositories, setRepositories] = useState([])

    const addRepo = setRepositories([
        ...repositories, { 
            id: 1,
            name: 'will'
        }
    ])

    return <ReposContext.Provider value={{
        repositories,
        addRepo
    }}>{children}</ReposContext.Provider>
}
    