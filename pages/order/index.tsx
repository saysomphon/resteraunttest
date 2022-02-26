import type { NextPage } from 'next';
import Image from 'next/image'
// MUI UI
import { Container, Grid, Typography, Box, ButtonGroup, Button, Paper, Divider } from '@mui/material';
// component
import AppBar from '../../src/components/AppBar'
import Header from '../../src/components/pages/order/Header'
// -----------------------------------

const Order: NextPage = () => {
    const menuData: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <Container>
            <AppBar />
            <Header />
            <Grid container spacing={2} sx={{ paddingTop: 5 }}>
                <Grid item xs={12} sm={12} md={3}>
                    <Box>
                        <Typography variant='h5' textAlign="center" sx={{marginBottom:5}}>Categories</Typography>
                        <ButtonGroup orientation="vertical" variant="text" color='inherit' fullWidth>
                            <Button>Item1</Button>
                            <Button>Item2</Button>
                            <Button>Item3</Button>
                            <Button>Item4</Button>
                            <Button>Item5</Button>
                            <Button>Item6</Button>
                        </ButtonGroup>
                    </Box>

                </Grid>
                <Grid item xs={12} sm={12} md={9}>
                <Typography variant='h5' textAlign="center" sx={{marginBottom:5}}>Menu</Typography>
                    {
                        menuData.map((item, index) => {

                            return (<Box key={index}>
                            

                                <Grid container>
                                    <Grid item xs>
                                        <Image src={(index%2===0 ? "/assets/images/image2.jpeg": "/assets/images/img1.jpeg")} width={300} height={300} alt="not found image" />
                                    </Grid>
                                    <Grid item xs>
                                        <Box p={2}>
                                            <Typography variant='h6'>ແຮມເບີເກີ</Typography>
                                            <Typography variant='h6' sx={{ color: 'gray' }}>Hamburger</Typography>
                                            <Typography variant='h6'>ລາຄາ: <span style={{ color: "red" }}>5,000</span> ກີບ</Typography>

                                        </Box>

                                    </Grid>
                                    <Grid item xs>
                                        <Button variant='contained' sx={{ marginTop: 30}}>Order</Button>
                                    </Grid>
                                </Grid>

                                <Divider sx={{ paddingTop: 3 }} />
                            </Box>
                            )

                        })
                    }

                </Grid>
            </Grid>
        </Container>
    )
}
export default Order;

