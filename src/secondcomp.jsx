import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Typography from '@mui/material/Typography';

export default function TitlebarBelowMasonryImageList() {
    return (
        <Box className='scroll-hide' sx={{ width: "80%", height: '100vh', m: 'auto', overflowY: 'scroll' }}>
            <Typography variant='h1'
                sx={{
                    color: "#FFFFFF", // Text color, can be any color that contrasts with the background
                    // Adjust size as needed
                    fontWeight: "bold", // Makes the glow effect more prominent
                    textShadow: `
                        0 0 10px rgba(128, 0, 128, 0.8),
                        0 0 20px rgba(128, 0, 128, 0.6),
                        0 0 30px rgba(128, 0, 128, 0.4),
                        0 0 40px rgba(128, 0, 128, 0.2)
                    `,
                }}
            >
                Our Events!
            </Typography>
            <ImageList variant="masonry" cols={3} gap={20}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img} sx={{ maxWidth: '250px' }}>
                        <img
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            alt={item.title}
                            loading="lazy"
                        />
                        {/* <ImageListItemBar position="below" title={item.author} /> */}
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
}

const itemData = [
    {
        img: './events/1.png',
        title: 'Bed',
        author: 'swabdesign',
    },
    {
        img: './events/8.png',
        title: 'Books',
        author: 'Pavel Nekoranec',
    },
    {
        img: './events/2.png',
        title: 'Sink',
        author: 'Charles Deluvio',
    },
    {
        img: './events/3.jpg',
        title: 'Kitchen',
        author: 'Christian Mackie',
    },
    {
        img: './events/4.png',
        title: 'Blinds',
        author: 'Darren Richardson',
    },
    {
        img: './events/5.png',
        title: 'Chairs',
        author: 'Taylor Simpson',
    },
    {
        img: './events/6.jpg',
        title: 'Laptop',
        author: 'Ben Kolde',
    },
    {
        img: './events/7.jpg',
        title: 'Laptop',
        author: 'Ben Kolde',
    }

];