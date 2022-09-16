import { useEffect, useState } from "react"

export const useData = (promise, deps) => {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)
    const [paginate, setPaginate] = useState()
    useEffect(() => {
        fetchData()
    }, deps)
    const fetchData = () => {
        setLoading(true)
        promise()
            .then((res) => {
                if (res.data) setData(res.data)
                if (res.paginate) setPaginate(res.paginate)
                setLoading(false)
            })
    }

    return { data, paginate, loading, fetchData }
}