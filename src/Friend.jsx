export default function Friend ({friend}) {
    const {name,email} =friend;
    return (
        
        <div style={{
            border: '2px solid tomato',
            padding: '15px',
            margin: '15px',
            borderRadius: '15px'
        }}>
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
        </div>
    )

}