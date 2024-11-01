import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ChevronRightRounded from "@mui/icons-material/ChevronRightRounded";
import Star from "./assets/star";

export const NewsCardDemo = React.memo(function NewsCard({ src, heading, text }) {
  const n = 6;

  return (
    <Card
      sx={{
        maxWidth: 304,
        width: 400,
        margin: "auto",
        // boxShadow: 6,
        borderRadius: 3,
        overflow: "hidden",
        bgcolor: "transparent",
        transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
        "&:hover": {
          boxShadow: "0 4px 20px 0 rgba(230, 230, 250,0.82) ",
          transform: "scale(1.04)",
        },
      }}
    >
      <CardMedia
        component="img"
        height="300"
        image={src}
        alt={heading}
      />
      <CardContent
        sx={{
          padding: 3,
        }}
      >
        <Typography variant="h4"
          sx={{
            color: '#e6e6fa',
            // textShadow: `
            //               0 0 4px #e6e6fa,
            //               0 0 8px #e6e6fa,
            //               0 0 12px #d8bfd8,
            //               0 0 16px #d8bfd8
            //             `,
            transition: 'text-shadow 0.3s ease-in-out',
            '&:hover': {
              textShadow: `
                            0 0 10px #e6e6fa,
                            0 0 20px #e6e6fa,
                            0 0 25px #d8bfd8,
                            0 0 30px #d8bfd8
                          `,
            },
          }}
        >{heading}</Typography>
        <Typography variant="body2"
          sx={{
            textAlign: "justify",
            color: '#e6e6fa',
            // textShadow: `
            //               0 0 4px #e6e6fa,
            //               0 0 6px #e6e6fa,
            //               0 0 8px #d8bfd8,
            //               0 0 10px #d8bfd8
            //             `,
            transition: 'text-shadow 0.3s ease-in-out',
            '&:hover': {
              textShadow: `
                            0 0 10px #e6e6fa,
                            0 0 20px #e6e6fa,
                            0 0 25px #d8bfd8,
                            0 0 30px #d8bfd8
                          `,
            },
          }}
        >
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
});

export default NewsCardDemo;
