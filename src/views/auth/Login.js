import { Box, Button, Container, FormControl, FormLabel, TextField, Typography } from '@material-ui/core'
import React from 'react'

const Login = () => {
    return (
        <Box mx={{xs:"5%" ,sm:"20%", md:"35%"}} my={{xs: 8, sm:12}}>
            <Container>
                <FormControl>
                    <FormLabel>
                        <Typography variant="h4">Login</Typography>
                    </FormLabel>
                    <form method="POST">
                        <TextField placeholder="Enter your email address" required label="Email" fullWidth  />
                        <TextField placeholder="Enter your password" required  label="Password" fullWidth/>
                        <Box display="flex" justifyContent="center" mt="20px">
                            <Button variant="contained">Login</Button>
                        </Box>
                    </form>
                </FormControl>
            </Container>
        </Box>
    )
}

export default Login
