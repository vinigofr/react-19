import Container from '../../components/Expandable';
import { GitHubUserContent } from '../../components/GitHubUserContent';
import { GenericProvider } from '../../contexts/GenericContext';

export default function Home() {
  return (
    <GenericProvider>
      <Container>
        <GitHubUserContent />
      </Container>
    </GenericProvider>
  );
}
