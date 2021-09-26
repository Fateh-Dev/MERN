import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import Badge from "@mui/material/Badge";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import MoreIcon from "@mui/icons-material/MoreVert";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SignInSide from "../auth/SignInSide";
import modules from "../../modules";
import { ThemeProvider } from "@mui/material/styles";
import { globaleTheme } from "../../default/theme";
const drawerWidth = 220;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(7)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const signOut = () => {
    ReactDOM.render(<SignInSide />, document.getElementById("root"));
  };

  return (
    <Router>
      <ThemeProvider theme={globaleTheme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar position='fixed' open={open} enableColorOnDark>
            <Toolbar>
              <IconButton
                color='inherit'
                aria-label='open drawer'
                onClick={handleDrawerOpen}
                edge='start'
                sx={{
                  marginRight: "36px",
                  ...(open && { display: "none" }),
                }}
              >
                <MenuIcon />
              </IconButton>
              <Box sx={{ flexGrow: 1 }} />
              <Typography variant='h6' noWrap component='div'>
                Gestion Materiels Informatiques
              </Typography>

              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <IconButton
                  size='large'
                  aria-label='show 4 new mails'
                  color='inherit'
                >
                  <Badge badgeContent={4} color='error'>
                    <MailOutlineOutlinedIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  size='large'
                  aria-label='show 17 new notifications'
                  color='inherit'
                >
                  <Badge badgeContent={17} color='error'>
                    <NotificationsActiveOutlinedIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  size='large'
                  edge='end'
                  aria-label='account of current user'
                  aria-haspopup='true'
                  color='inherit'
                >
                  <AccountCircleOutlinedIcon />
                </IconButton>
                <Box style={{ width: 20 }}></Box>
                <IconButton
                  size='large'
                  aria-label='show more'
                  aria-haspopup='true'
                  color='inherit'
                  onClick={signOut}
                >
                  <ExitToAppIcon />
                </IconButton>
              </Box>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size='large'
                  aria-label='show more'
                  aria-haspopup='true'
                  color='inherit'
                >
                  <MoreIcon />
                </IconButton>
              </Box>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size='large'
                  aria-label='show more'
                  aria-haspopup='true'
                  color='inherit'
                  onClick={signOut}
                >
                  <ExitToAppIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
          {/* {renderMobileMenu}
      {renderMenu} */}
          <Drawer variant='permanent' open={open}>
            <DrawerHeader
              style={
                {
                  // height: "calc(100% - 64px)",
                }
              }
            >
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "rtl" ? (
                  <ChevronRightIcon />
                ) : (
                  <ChevronLeftIcon />
                )}
              </IconButton>
            </DrawerHeader>
            <List>
              {modules.map(
                (
                  module // with a name, and routes
                ) => (
                  <Tooltip
                    title={module.name}
                    key={module.name}
                    placement='right'
                  >
                    <ListItem
                      button
                      key={module.name}
                      component={Link}
                      to={module.routeProps.path}
                    >
                      <ListItemIcon>{module.icon}</ListItemIcon>
                      <ListItemText primary={module.name} />
                    </ListItem>
                  </Tooltip>
                )
              )}
            </List>
            {/* <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List> */}
          </Drawer>
          <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
            <main>
              <div />
              {modules.map((module) => (
                <Route {...module.routeProps} key={module.name} />
              ))}
            </main>
          </Box>
        </Box>
      </ThemeProvider>
    </Router>
  );
}
