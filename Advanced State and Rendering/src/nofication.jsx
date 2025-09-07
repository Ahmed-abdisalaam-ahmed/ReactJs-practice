const nofication = ({unreadMessages})=>{
    return (
        <div>
            <h1>helooooooooooooo ahmed</h1>
            {/* haduuu true yahay bas intaa ku jooog wixii kale laguma dirsan */}
            {unreadMessages.length > 0 &&
            <h2>
                You have {unreadMessages.length} unread messages.
            </h2>
            }
        </div>
    )
}

export default nofication;