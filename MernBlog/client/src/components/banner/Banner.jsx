
import { styled, Box, Typography } from '@mui/material';
// https://img.freepik.com/free-vector/blog-post-concept-illustration_114360-244.jpg?w=2000
const Image = styled(Box)`
    width: 100%;
    background: url(https://img.freepik.com/free-vector/blog-post-concept-illustration_114360-244.jpg?w=2000) center/55% repeat-x #000;
    height: 50vh;
    display: flex;
    flex-direction: column;
    position:relative;
    align-items: center;
    justify-content: center;
    
    
`;

const Heading = styled(Typography)`
    font-size: 100px;
    color: black;
    line-height: 1
    font-family: 'Ubuntu', sans-serif;
    
    `;

const SubHeading = styled(Typography)`
    font-size: 70px;
    background: #FFFFFF;
    border-radius: 8px;
    font-family: 'Ubuntu Condensed', sans-serif;
    position:absolute;
    
    bottom:0px;

    
`;

const Banner = () => {
    
    return (
        <Image>
            {/* <Heading>BLOG</Heading> */}
            <SubHeading>Jot that Thought</SubHeading>
        </Image>
    )
}

export default Banner;