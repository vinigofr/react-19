import Container from '../../components/Container';
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
