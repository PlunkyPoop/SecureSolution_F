import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import {useNavigate} from "react-router-dom";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const navigate = useNavigate()

  function Home(){
    navigate('/')
  }

  function Alerts(){
    navigate('/alerts')
  }

  return (
    <Box display="flex" justifyContent="end" p={2}>
      <Box display="flex">

        <IconButton onClick={Home}>
          {theme.palette.mode === "dark" ? (
              <HomeOutlinedIcon />
          ) : (
              <HomeOutlinedIcon />
          )}
        </IconButton>
        <IconButton onClick={Alerts}>
          {theme.palette.mode === "dark" ? (
              <ErrorOutlineIcon />
          ) : (
              <ErrorOutlineIcon />
          )}
        </IconButton>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
              <DarkModeOutlinedIcon />
          ) : (
              <LightModeOutlinedIcon />
          )}
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;