import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";

const pages = [
  { id: 1, label: "Home", route: "/dashboard" },
  { id: 2, label: "Watchlist", route: "/watchlist" },
  { id: 3, label: "About Us", route: "/about-us" },
  { id: 4, label: "Genres", route: "" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const genres = [
  { id: 28, name: "Action" },
  { id: 9648, name: "Mystery" },
  { id: 53, name: "Thriller" },
  { id: 80, name: "Crime" },
];

function Header() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [genresMenu, setGenresMenu] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenGenresMenu = (event) => {
    setGenresMenu(event.currentTarget);
  };

  const handleCloseGenresMenu = () => {
    setGenresMenu(null);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page?.id} onClick={() => navigate(page?.route)}>
                  <Typography
                    textAlign="center"
                    onClick={() => console.log("djdjd")}
                  >
                    {page?.label}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) =>
              index < 3 ? (
                <Button
                  key={page}
                  onClick={() => navigate(page?.route)}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page?.label}
                </Button>
              ) : (
                <Button
                key={"genres"}
                onClick={handleOpenGenresMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Genres
              </Button>
              )
            )}
          </Box>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={genresMenu}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(genresMenu)}
            onClose={handleCloseGenresMenu}
          >
            {genres.map((genre) => (
              <MenuItem key={genre?.id} onClick={handleCloseGenresMenu}>
                <div
                  onClick={() => navigate(`/search-movie?genreId=${genre?.id}`)}
                >
                  <Typography textAlign="center">{genre?.name}</Typography>
                </div>
              </MenuItem>
            ))}
          </Menu>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
