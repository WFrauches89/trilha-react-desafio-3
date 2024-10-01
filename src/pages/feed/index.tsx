
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";
import { Header } from "../../components/Header";

import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
    return (<>
        <Header autenticado={true} />
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
                <UserInfo percentual={5} nome="Wanderson Frauches" image="https://avatars.githubusercontent.com/u/101157962?s=400&u=1e8120194ed5bc403a6a2fb61e90b70064bd73a5&v=4" />
                <UserInfo percentual={25} nome="Wanderson Frauches" image="https://avatars.githubusercontent.com/u/101157962?s=400&u=1e8120194ed5bc403a6a2fb61e90b70064bd73a5&v=4" />
                <UserInfo percentual={50} nome="Wanderson Frauches" image="https://avatars.githubusercontent.com/u/101157962?s=400&u=1e8120194ed5bc403a6a2fb61e90b70064bd73a5&v=4" />
                <UserInfo percentual={85} nome="Wanderson Frauches" image="https://avatars.githubusercontent.com/u/101157962?s=400&u=1e8120194ed5bc403a6a2fb61e90b70064bd73a5&v=4" />
                <UserInfo percentual={100} nome="Wanderson Frauches" image="https://avatars.githubusercontent.com/u/101157962?s=400&u=1e8120194ed5bc403a6a2fb61e90b70064bd73a5&v=4" />

            </Column>
        </Container>
    </>)
}

export { Feed }