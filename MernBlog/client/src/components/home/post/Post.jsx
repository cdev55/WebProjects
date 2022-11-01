
import { styled, Box, Typography } from '@mui/material';

const Container = styled(Box)`
    border: 1px solid #d3cede;
    border-radius: 10px;
    
    margin: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 350px;
    & > img, & > p {
        padding: 0 5px 5px 5px;
    }
`;

const Image = styled('img')({
    width: '100%',
    objectFit: 'cover',
    borderRadius: '10px 10px 0 0',
    height: 150
});

const Text = styled(Typography)`
    color: #878787;
    font-size: 15px;
    font-family: 'Ubuntu Condensed', sans-serif;
`;

const Heading = styled(Typography)`
    font-size: 20px;
    font-weight: 600;
    font-family: 'Ubuntu Condensed', sans-serif;
`;

const Details = styled(Typography)`
    font-size: 17px;
    font-family: 'Ubuntu Condensed', sans-serif;
    word-break: break-word;
    
`;

const Post = ({ post }) => {
    const url = post.picture ? post.picture : 'https://www.perfecto.io/sites/default/files/image/2021-02/social-blog-tc-front-end-testing.jpg';
    
    const addEllipsis = (str, limit) => {
        return str.length > limit ? str.substring(0, limit) + '...' : str;
    } 

    return (
        <Container>
            <Image src={url} alt="post" />
            <Text>{post.categories}</Text>
            <Heading>{addEllipsis(post.title, 20)}</Heading>
            <Text>Author: {post.name}</Text>
            <Details>{addEllipsis(post.description, 100)}</Details>
        </Container>
    )
}

export default Post;