
// Function component 
export default function Hello() {
    var message = "Good Evening"
    var hours = new Date().getHours()
    if (hours < 12)
        message = 'Good Morning'
    else
        if (hours < 17) 
            message = "Good Afternoon"
    
    return (
        <>
            <h1 className="text-danger">{message}</h1>
            
        </>
    );
}

 