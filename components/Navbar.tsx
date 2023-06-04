import Link from "next/link"

export default function Navbar() {
    return (
        <>
        <nav
            style={{
                display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center",
                borderBottom: "1px solid grey", height: "75px", padding : "0 20px", marginBottom: "1rem",
            }}
        >
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "2rem"}}>
                <Link href="/" style={{ textDecoration: "none" }}><h1>BLeader</h1></Link>
                <div style={{ display: "flex", flexDirection: "row", gap: "1rem", alignItems: "center", textDecoration: "none" }}>
                    <Link href="/Maps" style={{ textDecoration: "none" }} >Maps</Link>
                    <Link href="/Rankings" style={{ textDecoration: "none" }}>Rankings</Link>
                    <Link href="/Events" style={{ textDecoration: "none" }}>Events</Link>
                    <Link href="/Clans" style={{ textDecoration: "none" }}>Clans</Link>
                </div>
            </div>
            <div>
                <button className="button">Sign in</button>
            </div>
        </nav>
        </>
    )
}