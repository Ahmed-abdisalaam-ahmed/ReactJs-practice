import {useState,useEffect} from 'react'

const useFetch = (url)=>{
    const [data , setData] = useState(null)
    const [loading , setLoading] = useState(true)
    const [error,setError] = useState(null)
    
        useEffect(()=>{
            let isMounted = true;
            const fetchData = async () =>{
                try {
                    
                    const response = await fetch(url);

                    if(!response.ok){
                        throw new Error(`HTTP error! status: ${response.status}`)
                    }
                    const result = await response.json()
    
                    if(isMounted){
                        setData(result)
                        setLoading(false)
                    }
                } catch (error) {
                    if(isMounted){
                        setError(null)
                        setLoading(false)
                    }
                }
            }
            fetchData()
            return ()=> {
                isMounted = false
            }   
        },[url])

        return {loading , data, error}
}
export default useFetch;