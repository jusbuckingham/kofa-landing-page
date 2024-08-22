import React, { useState } from 'react';

interface SearchResult {
  title: string;
  url: string;
  snippet: string;
}

const SearchComponent: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    if (!query.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch results');
      }

      const data = await response.json();
      setResults(data.results);
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl mb-4">Search with AI</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter your search..."
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <button
        onClick={handleSearch}
        className="w-full bg-primary text-white py-2 rounded"
        disabled={loading}
      >
        {loading ? 'Searching...' : 'Search'}
      </button>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      <div className="mt-6">
        {results.length > 0 && (
          <ul>
            {results.map((result, index) => (
              <li key={index} className="mb-4">
                <a href={result.url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                  <h3 className="text-xl font-semibold">{result.title}</h3>
                </a>
                <p>{result.snippet}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchComponent;
