import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <h1>help desk</h1>

      <Link href="/">dashboard</Link>

      <Link href="/tickets">Tickets</Link>
    </nav>
  )
}

export default Navbar
