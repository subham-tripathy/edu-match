"use client"
import React, { useEffect } from 'react'

const page = () => {
    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        for (let a of searchParams) {
            console.log(a[1]);
        }
    })
    return (
        <div>

        </div>
    )
}

export default page