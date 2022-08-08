
import { Container, Menu, Grid, Label } from "semantic-ui-react"

export default function MenuWeb() {
    return (
        <div className="menu">
            <Container>
                <Grid>
                    <Grid.Column className="menu_left" width={6}>
                        <h2>menu plataformas</h2>
                    </Grid.Column>
                    <Grid.Column className="menu_right" width={6}>
                        <h2>menu usuarios</h2>
                    </Grid.Column>
                </Grid>
            </Container>
        </div>
    )
}
