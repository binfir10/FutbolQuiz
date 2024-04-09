'use client'

import Link from 'next/link'
import React, { useEffect } from 'react'


export default function Results() {
    const results = [
        { name: 'John', score: 80 },
        { name: 'Jane', score: 90 },
        { name: 'Bob', score: 75 },
    ];


    return (
        <div className='flex flex-col min-h-screen justify-center items-center gap-7'>
            <div className='flex flex-col items-center justify-center gap-4'>
                <Link href="/"><button className="text-lg rounded-md bg-black p-2 py-1 text-slate-50 border-2 border-sky-400 hover:bg-sky-800"> ← </button></Link>
                <h2 className="text-4xl font-black text-center text-white">
                    RESULTADOS GENERALES:
                </h2>
            </div>
            <div className=' bg-slate-100 p-3 rounded-md  shadow-2xl shadow-black'>
                <table className='md:w-96 gap-3 h-auto w-72'>
                    <thead className=' '>
                        <tr className='px-2 rounded-md border-b'>
                            <th className='text-start px-4'>Nombre</th>
                            <th className='text-end px-4'>Puntaje</th>
                        </tr>
                    </thead>
                    <tbody className=' '>
                        {results.map((result, index) => (
                            <tr key={index} className='px-2 rounded-md gap-3 border-b hover:bg-slate-200 first:bg-slate-300 first:h-9 first:font-bold first:text-lg first:hover:bg-slate-500 '>
                                <td className='text-start px-4 '>{result.name}</td>
                                <td className='text-end px-4 font-bold'>{result.score}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    
        </div>
    )
}

