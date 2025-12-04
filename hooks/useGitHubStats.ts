'use client';

import { useState, useEffect } from 'react';
import { GitHubStats } from '@/types';

const GITHUB_USERNAME = 'SADMAN30102001SAKIB';

// Default fallback values
const defaultGitHubStats: GitHubStats = {
  followers: 11,
  repositories: 40,
  contributions: 1500
};

export function useGitHubStats() {
  const [stats, setStats] = useState<GitHubStats>(defaultGitHubStats);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchStats() {
      try {
        // Fetch user data (followers, public repos)
        const userResponse = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}`,
          { 
            headers: {
              'Accept': 'application/vnd.github.v3+json',
            }
          }
        );

        if (!userResponse.ok) {
          throw new Error('Failed to fetch GitHub user data');
        }

        const userData = await userResponse.json();

        setStats({
          followers: userData.followers || defaultGitHubStats.followers,
          repositories: userData.public_repos || defaultGitHubStats.repositories,
          contributions: defaultGitHubStats.contributions
        });
      } catch (err) {
        console.error('Error fetching GitHub stats:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch stats');
        // Keep default values on error
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  return { stats, loading, error };
}
