import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layouts/Layout";
import Loader from "./components/ui/Loader";
import GenerateAIPage from "./views/GenerateAIPage";

const IndexPage = lazy(() => import("./views/IndexPage"))
const FavoritesPage = lazy(() => import("./views/FavoritesPage"))

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={
                        <Suspense fallback={<Loader />}>
                            <IndexPage />
                        </Suspense>
                    } index />
                    <Route path="/favorites" element={
                        <Suspense fallback={<Loader />}>
                            <FavoritesPage />
                        </Suspense>
                    } />
                    <Route path="/ai" element={
                        <Suspense fallback={<Loader />}>
                            <GenerateAIPage />
                        </Suspense>
                    } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
