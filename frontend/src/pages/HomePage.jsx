import NavBar from '@components/NavBar'
import SearchBar from '@components/SearchBar'
import Footer from '@components/Footer'
import FAQ from '@components/FAQ';
import FeaturedAgents from '@components/FeaturedAgents';
import Agent from '@components/Agent';


export default function HomePage() {

  return (
    <>
      <NavBar />
      <SearchBar onSearch={() => {}} />
      <FeaturedAgents />

      <div className="w-full max-w-4xl mx-auto px-4 py-8">
          <Agent />
          <Agent title="Top AI Agents" count={5} href="/agents" />
      </div>
      <FAQ />

      <Footer />
    </>
  )
}
