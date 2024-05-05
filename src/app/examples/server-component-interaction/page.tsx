import Expandable from "@/app/components/Expandable"
import { GitHubUserContent } from "@/app/components/GitHubUserContent"

export default function ServerComponentInteraction() {
  const githubUserList = ['vinigofr', 'mercadolibre', 'vercel'];

  return (
    <div>
      {/* Expandable = client component */}
      {githubUserList.map((ghUser) => (
        <Expandable key={ghUser}>
          {/* GitHubUserContent = server component */}
          <GitHubUserContent username={ghUser} />
        </Expandable>
      ))}

    </div>
  )
}