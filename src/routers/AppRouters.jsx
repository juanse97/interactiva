import { Route, Routes } from "react-router-dom"
import { Cards } from "../components/cards/Cards"

export const AppRouters = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Cards />} />
            </Routes>
        </>
    )
}
