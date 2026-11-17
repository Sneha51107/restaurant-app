"use client"
import { useState } from "react"

export default function Kheader()
{
    return(
        <div className="mt-2 flex justify-between items-center bg-white px-4 py-2 border-b rounded-md">

            <div>
                <span className="material-symbols-outlined text-2xl">
                    chef_hat
                </span>
            </div>

            <div>
                <span className="material-symbols-outlined text-xl">
                    fit_screen
                </span>
            </div>

        </div>
    )
}