const greeting = ({isLoggedIn}) =>{

    if(isLoggedIn){
        return <h1>wellcome back!</h1>
    }else{
        return <h1>Please sign in!</h1>
    }
}

export default greeting;