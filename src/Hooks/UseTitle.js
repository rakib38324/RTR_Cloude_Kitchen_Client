import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} RTR Cloud Kitchen`;
    }, [title])
}

export default useTitle;