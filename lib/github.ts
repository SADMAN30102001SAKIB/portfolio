import { GitHubStats } from '@/types';

const GITHUB_USERNAME = 'SADMAN30102001SAKIB';

// Default fallback values
const defaultGitHubStats: GitHubStats = {
  followers: 11,
  repositories: 40,
  contributions: 1500
};

export async function getGitHubStats(): Promise<GitHubStats> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        },
        next: { revalidate: 3600 } // Revalidate every hour (ISR)
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch GitHub user data');
    }

    const userData = await response.json();

    return {
      followers: userData.followers || defaultGitHubStats.followers,
      repositories: userData.public_repos || defaultGitHubStats.repositories,
      contributions: defaultGitHubStats.contributions
    };
  } catch (err) {
    console.error('Error fetching GitHub stats:', err);
    return defaultGitHubStats;
  }
}
