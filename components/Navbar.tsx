import Link from "next/link"

export default function Navbar() {
    return (
        <>
        <nav
            style={{
                display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center",
                borderBottom: "1px solid grey", height: "75px", padding : "0 20px", marginBottom: "1rem"
            }}
        >
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "2rem"}}>
                <h1>BLeader</h1>
                <div style={{ display: "flex", flexDirection: "row", gap: "1rem", alignItems: "center" }}>
                    <Link href="/Maps">Maps</Link>
                    <Link href="/Rankings">Rankings</Link>
                    <Link href="/Events">Events</Link>
                    <Link href="/Clans">Clans</Link>
                </div>
            </div>
            <div>
                <button className="button">Sign in</button>
            </div>
        </nav>
        </>
    )
}