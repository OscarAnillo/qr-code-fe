import QRComponent from "./qr-component";
import TextComponent from "./text-component";

export default function CardComponent(){
    return (
        <div className="card">
            <div className="container">
                <QRComponent />
                <TextComponent />   
            </div>
        </div>
    )
}