import { NavLink, Outlet } from "react-router-dom"

const Items = () => {
    const items = [1, 2, 3, 4]

    return (
        <div>
            <h1>Items</h1>
            {items.map((item) => {
                                // / items/1
                return <NavLink to={`/items/${item}`}
                className={({isActive}) => {
                    return isActive ? 'text-primary-700' : '';
                }}>
                    item {item}
                </NavLink>
            })}
            <Outlet />
        </div>
    )
}
export default Items