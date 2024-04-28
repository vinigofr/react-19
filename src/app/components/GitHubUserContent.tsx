'use server';

export interface GitHubUserContentProps {
  username?: string;
}

// Toda vez que eu precisar trazer algum tipo de interação
// Eu precisarei transformar este componente em um 'use client'

// A ideia é separar bem os componentes caso haja a necessidade de utulização
// de interações com o usuário.
export async function GitHubUserContent({username = 'vinigofr'}: GitHubUserContentProps) {
  const fetchGhUser = async () => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const userInfo = await response.json();

    return userInfo;
  };

  const userInfo = JSON.stringify(await fetchGhUser(), null, 2);

  return (<pre>{userInfo}</pre>);
}