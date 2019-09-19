import React, { useState } from "react";
import AnyCard from "./AnyCard"
import initData from "../dataFiles"


export default function AnyList() {

    const [data, setData] = useState(initData)

    return (
        <div>
            <h1>The List:</h1>
            {data.map(person => (
                <AnyCard key={person.id} id={person.id} firstName={person.firstName} lastName={person.lastName} />
            ))}
        </div>
    )
}