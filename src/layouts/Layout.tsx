import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Modal from "../components/Modal";
import { useAppStore } from "../stores/useAppStore";
import Notification from "../components/Notification";
export default function Layout() {

    const loadFromStorage = useAppStore((state) => state.loadFromStorage)

    useEffect(() => {
        loadFromStorage()
    }, [])

    return (
        <>
            <Header />

            <main className="container mx-auto py-16">
                <Outlet />
            </main>

            <Modal />
            <Notification />

            <footer className="text-center text-white text-sm mt-10 bg-slate-800 font-black">
                <p className="p-2">Powered by <a href="https://www.thecocktaildb.com/">TheCocktailDB</a></p>
                <p className="p-2">Copyright &copy; {new Date().getFullYear()}</p>
                <p className="border-gray-500 border-t-2 mt-2 p-2">Made with ❤️ Thomas Schrödinger</p>
            </footer>
        </>
    )
}
