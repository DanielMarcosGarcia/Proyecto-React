import CardWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav>
            <h3>Tienda de Cosmeticos</h3>
            <div>
                <button>Esmaltes</button>
                <button>Accesorios</button>
                <button>Cremas</button>
            </div>
            <CardWidget />
        </nav>
    )
}

export default NavBar;