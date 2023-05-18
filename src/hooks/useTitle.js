import { useEffect } from "react"

const useTitle=title=>{
    useEffect(()=>{
        document.title=`${title} || Sportsvillage`
    },[title])
}

export default useTitle