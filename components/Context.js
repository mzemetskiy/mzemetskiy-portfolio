import { createContext, useContext, useState } from "react";

const AppContext = createContext()

export function AppWrapper({ children }) {
    const menuState = useState(false)
    let sharedState = menuState

    return (
        <AppContext.Provider value={sharedState}>
            {children}
        </AppContext.Provider>
    )
}

export function useMenuContext() {
    return useContext(AppContext)
}