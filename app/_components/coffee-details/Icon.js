import Image from "next/image";

import porta from "../../../public/icons/porta.png";
import moka from "../../../public/icons/moka.png";
import filter from "../../../public/icons/coffee-filter.png";
import coldBrew from "../../../public/icons/coldbrew.png";
import frenchpress from "../../../public/icons/frenchpress.png";
import automat from "../../../public/icons/automat.png";
import siphon from "../../../public/icons/siphon.png";
import drip from "../../../public/icons/drip.png";
import turkish from "../../../public/icons/turkish.png";

import espressoDrink from "../../../public/icons/espresso-drink.png";
import lungo from "../../../public/icons/lungo.png";
import doppio from "../../../public/icons/doppio.png";
import mocha from "../../../public/icons/mocha.png";
import latte_macchiato from "../../../public/icons/latte-macchiato.png";
import affogato from "../../../public/icons/affogato.png";
import espresso_tonic from "../../../public/icons/espresso_tonic.png";
import latte from "../../../public/icons/latte.png";
import cappuccino from "../../../public/icons/cappuccino.png";
import cold_brew_drink from "../../../public/icons/cold_brew_drink.png";
import iced_coffee from "../../../public/icons/iced_coffee.png";
import americano from "../../../public/icons/americano.png";
import long_coffee from "../../../public/icons/long_coffee.png";
import black_coffee from "../../../public/icons/black_coffee.png";
import turkish_drink from "../../../public/icons/turkish_drink.png";
import flat_white from "../../../public/icons/flat_white.png";

const icons = {
    espresso: porta,
    moka: moka,
    filter: filter,
    cold_brew:  coldBrew,
    frenchpress: frenchpress,
    automat: automat,
    siphon: siphon,
    drip: drip,
    turkish: turkish,

    espresso_drink: espressoDrink,
    lungo: lungo,
    doppio: doppio,
    mocha: mocha,
    latte_macchiato: latte_macchiato,
    affogato: affogato,
    espresso_tonic: espresso_tonic,
    latte: latte,
    cappuccino: cappuccino,
    cold_brew_drink: cold_brew_drink,
    iced_coffee: iced_coffee,
    americano: americano,
    long_coffee: long_coffee,
    black_coffee: black_coffee,
    turkish_drink: turkish_drink,
    flat_white: flat_white,
    filter_drink: filter,
}

function Icon({className, src}) {
    return (
        <div className={`${className} relative w-[32px] h-[32px] rounded-full border-4 border-white bg-white`}>
        <Image src={icons[src]} alt="coffee-icon" fill />
        </div>
    )
}

export default Icon
