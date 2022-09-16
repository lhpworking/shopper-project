import { useQueryUrl } from "./useQueryUrl"

export const usePage = (name = 'page') => {
    const search = useQueryUrl()
    return parseInt(search.get(name) || 1)

}

