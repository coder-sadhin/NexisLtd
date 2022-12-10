import { useEffect } from "react"

const useSetTitle = title => {
    useEffect(() => {
        document.title = `${title} - Employee Attendance Application`
    }, [title])
}

export default useSetTitle