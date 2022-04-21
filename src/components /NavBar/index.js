import CardWidget from "../CardWidget";
import classNames from "classnames/bind";
import navStyles from "./navBar.module.css";
import logo from "../../assets/logo.png"
const cx = classNames.bind(navStyles);

const NavBar = () => {
    return (
        <>
            <header className={cx("text-gray-600 body-font")}>
                <a className={cx("flex justify-center absolute", "position")}>
                    <img src={logo} style={{ width: "100px" }} ></img>
                </a>
                <nav className={cx("md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-around", "headerStyle")}>
                    <a className={cx("py-4 px-0 text-2xl", "itemNav")}>Inicio</a>
                    <a className={cx("py-4 px-0 text-2xl", "itemNav")}>Tortas</a>
                    <a className={cx("py-4 px-0 text-2xl", "itemNav")}>Postres</a>
                    <a className={cx("py-4 px-0 text-2xl", "itemNav")}>Combos</a>
                </nav>
                <div className={cx("flex justify-center absolute", "positionShopping")}>
                    <CardWidget />
                </div>
            </header>
        </>
    );
}

export default NavBar;