import {useState, useEffect} from 'react'

const Navbar = () => {
    const [active, setActive] = useState(false)

    useEffect(() => {
       const handleScroll = () => {
            if(window.scrollY > 150) {
                setActive(true)
            } else {
                setActive(false)
            }
       }
       window.addEventListener('scroll', handleScroll)
       return () => {
        window.removeEventListener('scroll', handleScroll)
       }
    }, []) 

  return (
    <div className="navbar py-6 flex items-center justify-between">
        <div className="logo">
            <h1 className="text-3xl font-bold text-white">Goji</h1>
        </div>
        <ul className=  {`menu flex items-center sm:gap-8 gap-4 fixed left-1/2 -translate-x-1/2 md:-translate-x-0 md:static -top-10 opacity-0 md:opacity-100 bg-zinc-900/80 backdrop-blur-md px-5 py-3 rounded-br-2xl rounded-bl-2xl border border-white/10
            md:bg-transparent md:border-0 transition-all md:transition-none ${active ? "top-0 opacity-100" : "-top-10 opacity-0"}`}>
            <li><a href="#" className="sm:text-lg text-base font-medium hover:text-blue-500">Beranda</a></li>
            <li><a href="#tentang" className="sm:text-lg text-base font-medium hover:text-blue-500">Tentang</a></li>
            <li><a href="#proyek" className="sm:text-lg text-base font-medium hover:text-blue-500">Proyek</a></li>
            <li><a href="#kontak" className="sm:text-lg text-base font-medium hover:text-blue-500">Kontak</a></li>
        </ul>
    </div>
  )
}

export default Navbar
