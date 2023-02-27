import { ReactElement } from "react"
import Footer from "./Footer"
import { Navbar } from "./Navbar"

interface layoutInterfaces {
    children: ReactElement
}

const Layout: React.FC<layoutInterfaces> = (props) => {
    const { children } = props

    return (
        <>
            <Navbar/>
            <main style={{minHeight: "calc(100vh - 136px)", overflow: "auto"}}>{children}</main>
            <Footer/>
        </>
    )
}

export default Layout