let cachedStars: number | null = null;

export async function getGitHubStars(): Promise<number> {
  if (cachedStars !== null) return cachedStars;

  const response = await fetch(
    "https://api.github.com/repos/BarishNamazov/kodlar.az",
  );
  if (!response.ok) {
    throw new Error(
      `GitHub API request failed with status ${response.status}`,
    );
  }
  const data = await response.json();
  cachedStars = data.stargazers_count;
  return cachedStars;
}
