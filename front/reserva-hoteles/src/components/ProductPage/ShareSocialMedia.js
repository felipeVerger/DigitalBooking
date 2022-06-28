import React from 'react'
import {
    SocialMediaBlock,
    SocialMediaContent,
    Title,
    List,
    Facebook,
    Email,
    Twitter,
    Linkedin
} from './SocialMediaStyle';

const ShareSocialMedia = ({ id }) => {
  return (
    <SocialMediaBlock>
        <SocialMediaContent>
            <Title>Comparta este producto en redes sociales</Title>
            <List>
                <li><a href={`https://www.facebook.com/sharer/sharer.php?u=http%3A//localhost%3A3000/product/${id}`}><Facebook/></a></li>
                <li><a href={`mailto:http://localhost:3000/product/${id}?`}><Email/></a></li>
                <li><a href={`https://twitter.com/intent/tweet?text=http%3A//localhost%3A3000/product/${id}`}><Twitter/></a></li>
                <li><a href={`https://www.linkedin.com/shareArticle?mini=true&url=http%3A//localhost%3A3000/product/${id}&title=linkedin&summary=&source="`}><Linkedin/></a></li>
            </List>
        </SocialMediaContent>
    </SocialMediaBlock>
  )
}

export default ShareSocialMedia;