import React, { useState } from 'react'

let UserContext = React.createContext()
let { Provider, Consumer } = UserContext


function UserProvider({ children }) {
    let [user, setUser] = useState(false)

    function login() {
        setUser({
            name: "Arturo",
            pic: "https://lh3.googleusercontent.com/a-/AAuE7mABNvT-jBHl74DLxjAFSKlfhQEvdIzv0wPIqrJbOw=s96"
        })
    }

    function logout() {
        setUser(null)
    }

    return (
        <Provider value={{ user, login, logout }} >
            {children}
        </Provider>
    )
}

export { UserProvider, Consumer as UserConsumer, UserContext }