import Image from "next/image";

function Icon({className, src}) {
    return (
        <div className={`${className} relative`}>
        <Image src={src} alt="coffee-icon" fill />
        </div>
    )
}

export default Icon
