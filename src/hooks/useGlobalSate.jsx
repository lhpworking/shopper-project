import { createContext, useContext, useState } from "react"

const context = createContext()

export const GlobalState = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)

    return <context.Provider value={ { isOpen, setIsOpen } }>{ children }</context.Provider>
}
export const useGlobalState = () => useContext(context)