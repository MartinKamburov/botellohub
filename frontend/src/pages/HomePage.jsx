import { useState } from 'react'

import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import Footer from '../components/Footer'
import FAQ from '../components/FAQ';


export default function HomePage() {
  const [handleSearch, setHandleSearch] = useState('');

  return (
    <>
      <Navbar />
      <SearchBar onSearch={handleSearch} />
      <FAQ />

      <Footer />
    </>
  )
}
