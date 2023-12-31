
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, CardContent, Typography, Button, Stack, Box } from "@mui/material";
import podsImg from "../../assets/podsImage.png";

const Sliderr = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    
    prevArrow: null,
    nextArrow: null,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2, // Change this to 3 for 3 cards in a row on mobile
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Stack sx={{ width: {lg:"90%", xs:"93%", }, margin: "auto" }}>
      <Slider {...settings}>
        {data.map((d) => (
          <Card
            sx={{ maxWidth: "380px", borderRadius: "25px", backgroundColor:"white" }}
            key={d.name}
          >
            <Stack alignItems="center" spacing={2} p={{lg:2, md:2, sm:2, xs:1.2}}>
              <Box
                sx={{
                  height: "auto",
                  width: "100%",
                  borderRadius: "16px 16px 0 0",
                }}
              >
                <img
                  src={podsImg}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "16px 16px 0 0",
                  }}
                />
              </Box>
              <CardContent sx={{p:{xs:"0"}, pb:{xs:"0"}}}>
                <Typography fontSize={{xs:"15px"}}gutterBottom >
                  {d.name}
                </Typography>
                
               
              </CardContent>
            </Stack>
          </Card>
        ))}
      </Slider>
    </Stack>
  );
};

const data = [
  {
    name: `John Morgan`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Ellie Anderson`,
    img: `/students/Ellie_Anderson.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Nia Adebayo`,
    img: `/students/Nia_Adebayo.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Rigo Louie`,
    img: `/students/Rigo_Louie.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Mia Williams`,
    img: `/students/Mia_Williams.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
];

export default Sliderr;
