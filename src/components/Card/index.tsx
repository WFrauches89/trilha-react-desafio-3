import React from 'react'
import { FiThumbsUp } from 'react-icons/fi'

import {
    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture
} from './styles';

const Card = () => {
    return (
        <CardContainer>
            <ImageBackground src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4-z02kttv2Q0MAjnTOBMn4EzT0Li1WJzK9A&s" />
            <Content>
                <UserInfo>
                    <UserPicture src="https://avatars.githubusercontent.com/u/101157962?s=400&u=1e8120194ed5bc403a6a2fb61e90b70064bd73a5&v=4" />
                    <div>
                        <h4>Wanderson Frauches</h4>
                        <p>Há 15 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para curso de HTML e CSS</h4>
                    <p>Projeto feito o curso de html e css no bootcamp dio do Global avanade...<strong>Saiba Mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #Javascript</h4>
                    <p>
                        <FiThumbsUp /> 10
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

export { Card }