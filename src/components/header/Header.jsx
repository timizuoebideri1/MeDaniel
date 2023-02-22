import Button from "../common/Button";
import Menu from "./Menu";


export default function Header(){
    return (
        <div className="header">
            <img src="https://trydo.rainbowit.net/assets/images/logo/logo.png" alt="Logo" />
            <div className="left-menu">
                <Menu />
                <Button btn_text="Buy Now" />
            </div>
        </div>
    )
}
