import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeEurope } from "@fortawesome/free-solid-svg-icons"

export default function Navbar() {
    return (
        <nav className="myNav">
            <i><FontAwesomeIcon icon={faGlobeEurope} /></i>
            <h1>my travel journal.</h1>
        </nav>
    )
}