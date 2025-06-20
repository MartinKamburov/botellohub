import { useState } from 'react';
import { Search } from 'lucide-react'; // or any icon library you prefer

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch?.(query);
  };

  return (
    <div className="w-full flex justify-center my-8 px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-xl">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search for Popular AI Agents"
          />
        </div>
      </form>
    </div>
  );
}