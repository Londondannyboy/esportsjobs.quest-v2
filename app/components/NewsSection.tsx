'use client';

import { useEffect, useState } from 'react';

interface Article {
  title: string;
  description: string;
  date: string;
  category: string;
  slug: string;
  url: string;
}

export function NewsSection() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch('https://esportsnews.quest/api/articles?limit=3');
        if (response.ok) {
          const data = await response.json();
          setArticles(data);
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Latest Esports News
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-6 rounded-xl bg-gray-900/50 border border-gray-700 animate-pulse">
                <div className="h-4 bg-gray-700 rounded w-1/4 mb-3"></div>
                <div className="h-6 bg-gray-700 rounded w-3/4 mb-3"></div>
                <div className="h-4 bg-gray-700 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-700 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (articles.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Latest Esports News
            </span>
          </h2>
          <a
            href="https://esportsnews.quest"
            className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
          >
            View All News →
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <a
              key={article.slug}
              href={article.url}
              className="group p-6 rounded-xl bg-gray-900/50 border border-gray-700 hover:border-cyan-500/50 transition-all"
            >
              <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                <span className="px-2 py-1 rounded bg-cyan-500/10 text-cyan-400">
                  {article.category || 'News'}
                </span>
                <span>{article.date}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                {article.title}
              </h3>
              <p className="text-gray-400 text-sm line-clamp-2">
                {article.description}
              </p>
            </a>
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">
            Powered by{' '}
            <a href="https://esportsnews.quest" className="text-cyan-400 hover:underline">
              Esports News UK
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
