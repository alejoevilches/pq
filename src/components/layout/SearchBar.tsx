"use client"

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

export default function SearchBar(){
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const timer = useRef<number | null>(null)

  useEffect(()=>{
    if (!query || query.trim().length === 0){
      setResults([])
      setOpen(false)
      setLoading(false)
      if (timer.current) {
        window.clearTimeout(timer.current)
        timer.current = null
      }
      return;
    }

    setLoading(true)
    if (timer.current) window.clearTimeout(timer.current)
    timer.current = window.setTimeout(async ()=>{
      try{
        const res = await fetch(`/api/places/search?q=${encodeURIComponent(query)}`)
        if (!res.ok) {
          setResults([])
          setOpen(false)
          setLoading(false)
          return
        }
        const data = await res.json()
        setResults(data || [])
        setOpen(true)
      } catch(e){
        console.error('Search error', e)
        setResults([])
        setOpen(false)
      } finally {
        setLoading(false)
      }
    }, 300)

    return ()=>{
      if (timer.current) window.clearTimeout(timer.current)
    }
  }, [query])

  return (
    <div className="relative" style={{ minWidth: 280 }}>
      <input
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
        placeholder="Busca tus lugares favoritos"
        className="bg-white rounded-full p-2 w-72"
        aria-label="Buscar lugares"
      />

      {loading && <div className="absolute right-3 top-2 animate-spin h-4 w-4 border-t-2 border-b-2 border-gray-800 rounded-full" />}

      {open && results.length > 0 && (
        <div className="absolute z-50 mt-2 w-full bg-white rounded shadow max-h-60 overflow-auto">
          {results.map((r)=> (
            <Link
              key={r.lugarId}
              href={`/place/${r.lugarId}`}
              className="block px-4 py-2 hover:bg-gray-100"
              onClick={()=>{ setOpen(false); setQuery('') }}
            >
              <div className="font-semibold">{r.nombre}</div>
              {r.ubicacion && <div className="text-sm text-gray-500">{r.ubicacion}</div>}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
