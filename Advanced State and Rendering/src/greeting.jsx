const greeting = ({isLoggedIn}) =>{

    // if(isLoggedIn){
    //     return <h1>wellcome back!</h1>
    // }else{
    //     return <h1>Please sign in!</h1>
    // }

    return isLoggedIn ? <h1>wellcome</h1> : <h1>sing please your account!</h1>

}

export default greeting;