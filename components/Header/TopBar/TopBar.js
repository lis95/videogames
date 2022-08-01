import { Container, Grid, Image, Input } from "semantic-ui-react";

export default function TopBar() {
  return (
    <div className="top-bar">
      <Container>
        <Grid className="top-bar">
          <Grid.Column width={8} className="top-bar__left">
            <Logo />
          </Grid.Column>
          <Grid.Column width={8} className="top-bar__right">
            <h2>buscador</h2>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}

function Logo() {
  return <Image src="/logo.png" alt="Gaming" />;
}
