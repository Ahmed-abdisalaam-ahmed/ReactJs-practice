import useFetch from './useFetch'

// const Github = () => {
//     // const [data , setData] = useState(null)
//     // const [loading , setLoading] = useState(true)
//     // const [error,setError] = useState(null)

//     // useEffect(()=>{
//     //     let isMounted = true;
//     //     const fetchData = async()=>{
//     //         try {
                
//     //             const response = await fetch("https://api.github.com/users/ahmed-abdisalaam-ahmed")
//     //             if(!response.ok){
//     //                 throw new Error(`HTTP error! status: ${response.status}`)
//     //             }
//     //             const result = await response.json()

//     //             if(isMounted){
//     //                 setData(result)
//     //                 setLoading(false)
//     //             }
//     //         } catch (error) {
//     //             if(isMounted){
//     //                 setError(null)
//     //                 setLoading(false)
//     //             }
//     //         }
//     //     }
//     //     fetchData()
//     //     return ()=> {
//     //         isMounted = false
//     //     }   
//     // },[])
//     if(loading) return <h1>Loading ....</h1>
//   return (
//     <div>
//         <h2>{data.name}</h2>
//         <img src={data.avatar_url} alt="" />
//     </div>
//   )
// }
export const Gitnub = () => {
    const {data, loading ,error} = useFetch('https://api.github.com/users/ahmed-abdisalaam-ahmed')
 
    if(loading) return <h1>Loading ....</h1>

  return (
    <div>
        <h2>{data.name}</h2>
        <img src={data.avatar_url} alt=""/>
    </div>
  )
}