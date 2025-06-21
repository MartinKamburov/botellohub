import NavBar from '@components/NavBar'
import SearchBar from '@components/SearchBar'
import Footer from '@components/Footer'
import FAQ from '@components/FAQ';


export default function HomePage() {

  return (
    <>
      <NavBar />
      <SearchBar onSearch={() => {}} />
      <FAQ />

      <Footer />
    </>
  )
}
