

export default function IconColumns({icon, title, content}){
    return (
        <div className="col-md-3">
            <div>{icon}</div>
            <b>{title}</b>
            <p>{content}</p>
        </div>
    )
}