const menuLables = [
    "Home",
    "Service",
    "About",
    "Page",
    "Blocks",
    "Contact",
]


export default function Menu(){
    return (
        <div>
            <ul className="menu-container">
                {
                    menuLables.map((menu) => (
                        <li><a href="">{menu}</a></li>
                    ))
                }
            </ul>
            
        </div> 
    )
}

