import { useLocation } from "react-router-dom"


export const useQueryUrl = () => {
    const { search } = useLocation()
    return new URLSearchParams(search)
}
