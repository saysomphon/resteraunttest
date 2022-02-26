import type { NextPage } from 'next';
import { Box, TextField, InputAdornment, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const Header: NextPage = () => {
    return <Box component="header" sx={{
        background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url('/assets/images/header.jpeg')`,
        height: '70vh', width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition:'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding:5
    }}>
        <TextField
            fullWidth
            placeholder='Find your favourite food'
            InputProps={{
                endAdornment: <InputAdornment position="start"><IconButton><SearchIcon /></IconButton></InputAdornment>,
                sx: { background: 'white' }
            }}
            sx={{ maxWidth: 500 }}
        />
    </Box>
}
export default Header;