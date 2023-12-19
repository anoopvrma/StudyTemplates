'use client'
import { Box, Container, Divider, Grid, Typography } from '@mui/material'
import {
  useTheme
} from '@mui/material/styles';
import school from "@/public/school.jpg"
import library from "@/public/library.jpg"
import laboratory from "@/public/laboratory.jpg"
import sports from "@/public/sports.jpg"
import { BackgroundImageBox } from '@/components/BackgroundImageBox';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { basicInfo } from '@/data/basicInfo';
import { Leaderships } from '@/data/leadership'
import { MessageCard } from '@/components/cards/MessageCard';
import SocialMediaBar from '@/components/SocialMediaBar';
import Benefits from '@/components/Benefits';
import UpcomingEvents from '@/components/UpcomingEventsBar';
import LatestNews from '@/components/NewsBar';
import Subscribe from '@/components/Subscribe';
import Contact from '@/components/ContactForm';

export default function Home() {

  const theme = useTheme();

  return (
    <>
      <Grid>
        <Grid item xs={12}>
          <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            sx={{ height: '80vh', background: theme.palette.primary.light, color: theme.palette.secondary.dark }}
          >
            <Swiper
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              autoplay={{
                disableOnInteraction: false, // Optional, but recommended
                delay: 3000,
              }}
              loop={true}
              navigation
              speed={2000}
              pagination={{ enabled: true, clickable: true }}
              modules={[Autoplay, Pagination]}
              className='products-swiper'
            >
              <SwiperSlide style={{ width: "100vw", height: '80vh' }} className='SwiperSlide'>
                <BackgroundImageBox imageUrl={school.src} >
                  <Box sx={{ maxWidth: 'sm' }}>
                    <Typography gutterBottom variant="h3" fontWeight="bold" color={theme.palette.common.white}>
                      Infrastructure
                    </Typography>
                    <Typography
                      variant="body1"
                      color={theme.palette.common.white}
                      fontWeight="medium"
                    >
                      Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut euismod pellentesque imperdiet. Cras laoreet gravida lectus, at viverra lorem venenatis in. Aenean id varius quam. Nullam bibendum interdum dui, ac tempor lorem convallis ut
                    </Typography>
                  </Box>
                </BackgroundImageBox>
              </SwiperSlide>
              <SwiperSlide style={{ width: "100vw", height: '80vh' }} className='SwiperSlide'>
                <BackgroundImageBox imageUrl={library.src} >
                  <Box sx={{ maxWidth: 'sm' }}>
                    <Typography gutterBottom variant="h3" fontWeight="bold" color={theme.palette.common.white}>
                      Library
                    </Typography>
                    <Typography
                      variant="body1"
                      color={theme.palette.common.white}
                      fontWeight="medium"
                    >
                      Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut euismod pellentesque imperdiet. Cras laoreet gravida lectus, at viverra lorem venenatis in. Aenean id varius quam. Nullam bibendum interdum dui, ac tempor lorem convallis ut
                    </Typography>
                  </Box>
                </BackgroundImageBox>
              </SwiperSlide>
              <SwiperSlide style={{ width: "100vw", height: '80vh' }} className='SwiperSlide'>
                <BackgroundImageBox imageUrl={laboratory.src} >
                  <Box sx={{ maxWidth: 'sm' }}>
                    <Typography gutterBottom variant="h3" fontWeight="bold" color={theme.palette.common.white}>
                      Laboratories
                    </Typography>
                    <Typography
                      variant="body1"
                      color={theme.palette.common.white}
                      fontWeight="medium"
                    >
                      Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut euismod pellentesque imperdiet. Cras laoreet gravida lectus, at viverra lorem venenatis in. Aenean id varius quam. Nullam bibendum interdum dui, ac tempor lorem convallis ut
                    </Typography>
                  </Box>
                </BackgroundImageBox>
              </SwiperSlide>
              <SwiperSlide style={{ width: "100vw", height: '80vh' }} className='SwiperSlide'>
                <BackgroundImageBox imageUrl={sports.src} >
                  <Box sx={{ maxWidth: 'sm' }}>
                    <Typography gutterBottom variant="h3" fontWeight="bold" color={theme.palette.common.white}>
                      Sports
                    </Typography>
                    <Typography
                      variant="body1"
                      color={theme.palette.common.white}
                      fontWeight="medium"
                    >
                      Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut euismod pellentesque imperdiet. Cras laoreet gravida lectus, at viverra lorem venenatis in. Aenean id varius quam. Nullam bibendum interdum dui, ac tempor lorem convallis ut
                    </Typography>
                  </Box>
                </BackgroundImageBox>
              </SwiperSlide>
            </Swiper>
          </Box >
        </Grid>
        <Grid item xs={12} py={6}>
          <Container>
            <Grid
              container
              direction="row"
              justifyContent="space-evenly"
              alignItems="stretch"
              spacing={4}
              py={6}
            >
              <Grid item xs={12}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Typography variant='h3' fontWeight='bold' textAlign={'center'} >
                    Welcome to <Box color={theme.palette.primary.main} component="span"> The {basicInfo.name}</Box>
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }} pb={4}>
                  <Typography textAlign={'center'} maxWidth={"md"} >
                    Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut euismod pellentesque imperdiet. Cras laoreet gravida lectus, at viverra lorem venenatis in. Aenean id varius quam. Nullam bibendum interdum dui, ac tempor lorem convallis ut
                  </Typography>
                </Box>
              </Grid>

              {Leaderships.map((leader, index) => {
                return <Grid item sm={12} md={4} key={index}><MessageCard {...leader}></MessageCard></Grid>
              })}

            </Grid>
          </Container>
        </Grid>

        <Grid item xs={12} py={4}>
          <Container>
            <Grid
              container
              direction="row"
              justifyContent="space-evenly"
              alignItems="stretch"
              spacing={4}
              py={6}
            >
              <Grid item md={4} sm={12}>
                <Benefits />
              </Grid>
              <Grid item md={4} sm={12}>
                <UpcomingEvents />
              </Grid>
              <Grid item md={4} sm={12}>
                <LatestNews />
              </Grid>

            </Grid>
            <Divider />
          </Container>
        </Grid>

        <Grid item xs={12} sx={{ background: theme.palette.background.paper, color: theme.palette.text.secondary, pb: 4 }}>
          <Subscribe theme={theme} />
        </Grid>
        <Grid item xs={12} sx={{ background: theme.palette.background.default, color: theme.palette.text.secondary, py: 4 }}>
          <Contact />
        </Grid>
      </Grid>

      <Grid item xs={12} sx={{ background: theme.palette.divider }} py={6}>
        <Container>
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="stretch"
            spacing={4}
            pb={2}
          >
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }} >
                <Typography variant='h4' textAlign={'center'}  >
                  Join Us on Social Media
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <SocialMediaBar />
            </Grid>
          </Grid>
        </Container>
      </Grid>

    </>
  )
}
