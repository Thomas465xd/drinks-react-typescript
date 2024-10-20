import { Link, NavLink } from "react-router-dom"

export default function Header() {
    return (
        <header className="bg-slate-800">
            <div className="mx-auto container px-5 py-16">
                <div className="flex justify-between items-center">
                    <div className="">
                        <img className="w-32" src="/logo.svg" alt="logotype" />
                    </div>

                    <nav className="flex gap-4">
                        <NavLink 
                            to="/" 
                            className={({isActive}) =>
                                isActive ? 'text-orange-500 uppercase font-bold' : "text-white uppercase font-bold"
                            }
                        >Home</NavLink>

                        <NavLink 
                            to="/favorites" 
                            className={({isActive}) =>
                                isActive ? 'text-orange-500 uppercase font-bold' : "text-white uppercase font-bold"
                            }
                        >Favorites</NavLink>
                    </nav>
                </div>
            </div>
        </header>
    )
}
