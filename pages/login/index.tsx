import type { NextPage } from "next";
import {
    Button,
    CssBaseline,
    TextField,
    Link,
    Grid,
    Box,
    Typography,
    Container,
    Card
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useRouter } from 'next/router';

// ----------------------------------

const theme = createTheme();
const Login: NextPage = () => {
    const router=useRouter();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            email: data.get("email"),
            password: data.get("password"),
        });
        router.push("/order")
    };
 
    //return
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="sm">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Card sx={{ padding: 5,minHeight:'80vh' }}>
                        <Box
                            component="form"
                            onSubmit={handleSubmit}
                            sx={{ mt: 1 }}
                        >



                            <Box sx={{ display: "flex", justifyContent: "center" }}>
                                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                                    <LockOutlinedIcon />
                                </Avatar>
                            </Box>
                            <Box>
                                <Typography
                                    component="h1"
                                    variant="h5"
                                    sx={{ textAlign: "center" }}
                                >
                                    Sign in
                                </Typography>
                            </Box>

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                size="large"
                            >
                                Sign In
                            </Button>
                        
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Typography variant="h6" sx={{marginTop:5,color:'red'}}>Type any username and password and click signin</Typography>
                        </Box>
                    </Card>
                </Box>
            </Container>
        </ThemeProvider>
    );
};
export default Login;
