export interface GitHubUserContentProps {
  username?: string;
}

export async function GitHubUserContent({ username = 'vinigofr' }: GitHubUserContentProps) {
  const fetchGhUser = async () => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const userInfo = await response.json();

    return {
      login: userInfo.login,
      id: userInfo.id,
      company: userInfo.company,
      location: userInfo.location,
      name: userInfo.name,
    };
  };

  const userInfo = JSON.stringify(await fetchGhUser(), null, 2);

  return (<pre>{userInfo}</pre>);
}