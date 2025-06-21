import { ArrowRight } from 'lucide-react';

export default function Agent({ title, count, href = '#' }) {
  return (
    <a
      href={href}
      className="group block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200"
    >
      <div className="flex justify-between items-start">

        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-gray-800">{title}</h3>
      <p className="mt-1 text-sm text-gray-500">
        {count} {count === 1 ? 'Agent' : 'Agents'}
      </p>
    </a>
  );
}