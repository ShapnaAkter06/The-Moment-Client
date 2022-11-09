import { useEffect } from "react"

const useTitle = title =>{
    useEffect(() =>{
        document.title = `${title} - The Moment`;
    },[title])
}

export default useTitle;