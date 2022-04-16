import CardWidget from "../CardWidget";
import classNames from "classnames/bind";
import creditStyles from "./navBar.module.css";
const cx = classNames.bind(creditStyles);

const NavBar = () => {
    return (
        <>
            <header className={cx("text-gray-600 body-font", "headerStyle")}>
                <div className="mx-auto flex flex-wrap pl-5 pr-10 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-purple-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">Dulce-Tarde </span>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <a className={cx("p-7 text-xl", "itemNav")}>Inicio</a>
                        <a className={cx("p-7 text-xl", "itemNav")}>Tortas</a>
                        <a className={cx("p-7 text-xl", "itemNav")}>Postres</a>
                        <a className={cx("p-7 text-xl", "itemNav")}>Combos</a>
                        <a className={cx("p-7 text-xl", "itemNav")}>¡Quienes somos!</a>
                    </nav>
                    <div className="">
                        <CardWidget></CardWidget>
                    </div>
                </div>
            </header>
        </>
    );
}

export default NavBar;