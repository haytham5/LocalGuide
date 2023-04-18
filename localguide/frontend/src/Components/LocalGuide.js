import './localguide.css';
import * as React from 'react';
import { useState } from 'react';
import statusBar from './Status Bar.png';
import logo from './logo.png'
import { Button, IconButton, Modal, Box, createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import {Wifi1Bar, Wifi2Bar, Wifi,  AddCircle, Restaurant, FmdGood, LocationCity, ShoppingBag, LocalBar, Opacity} from '@mui/icons-material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Rating from '@mui/material/Rating';
import Grow from '@mui/material/Grow';
import Fade from '@mui/material/Fade';
import axios from 'axios';
import Popover from '@mui/material/Popover';

const theme = createTheme({
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Poppins"',
        '"Raleway"'
      ].join(','),
    },
  });

const scanDiv = {
    paddingTop: '90%', 
    height: '100%', 
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 210,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '5%'
};

function LocalGuide() { 
    const [showLanding, setShowLanding] = useState(true);
    const [showHome, setShowHome] = useState(false); 

    const [restaurantClicked, setRestaurantClicked] = useState(false);
    const [shopClicked, setshopClicked] = useState(false);
    const [publicPlaceClicked, setPublicPlaceClicked] = useState(false);
    const [clubClicked, setClubClicked] = useState(false);

    const [add, setAdd] = useState(false);
    const [addClicked, setAddClicked] = useState(false);
    const [pinClicked, setPinClicked] = useState(false);
    const [currentData, setCurrentData] = useState({});
    const [currentColor, setCurrentColor] = useState('#696969');
    const [data, setData] = useState([]);

    const [placeType, setPlaceType] = useState("");

    if(data.length == 0) {
        try {
            axios.get('http://localhost:5000/places/').then(res => setData(res.data));
        }
        catch {
            console.log("Error: Could not gather info from database");
        }
    }

    const clickPin = (id) => {
        if(pinClicked) {
            setPinClicked(false);
        }
        else {
            setPinClicked(true);
            setCurrentData(data[id]);
        }
    }

    const clickRestaurant = () => {
        if(restaurantClicked) {
            setRestaurantClicked(false);
            setCurrentColor('#696969');
        }
        else {
            setRestaurantClicked(true);
            setCurrentColor('#064789');
        }

        if(shopClicked) setshopClicked(false);
        if(publicPlaceClicked) setPublicPlaceClicked(false);
        if(clubClicked) setClubClicked(false);
    }

    const clickShop = () => {
        if(shopClicked) {
            setshopClicked(false);
            setCurrentColor('#696969');
        }
        else {
            setshopClicked(true);
            setCurrentColor('#449DD1');
        }

        if(restaurantClicked) setRestaurantClicked(false);
        if(publicPlaceClicked) setPublicPlaceClicked(false);
        if(clubClicked) setClubClicked(false);
    }

    const clickPublicPlace = () => {
        if(publicPlaceClicked) {
            setPublicPlaceClicked(false);
            setCurrentColor('#696969');
        }
        else {
            setPublicPlaceClicked(true);
            setCurrentColor('#F28F3B');
        }

        if(shopClicked) setshopClicked(false);
        if(restaurantClicked) setRestaurantClicked(false);
        if(clubClicked) setClubClicked(false);
    }

    const clickClub = () => {
        if(clubClicked) {
            setClubClicked(false);
            setCurrentColor('#696969');
        }
        else {
            setClubClicked(true);
            setCurrentColor('#25283D');
        }

        if(publicPlaceClicked) setPublicPlaceClicked(false);
        if(shopClicked) setshopClicked(false);
        if(restaurantClicked) setRestaurantClicked(false);
    }

    const [scanSize, setScanSize] = useState("Small");
    
    const increaseSize = () => {
        if(scanSize === "Small") setScanSize("Medium");
        if(scanSize === "Medium") setScanSize("Large");
        if(scanSize === "Large") setScanSize("Small");

    }

    const landingToHome = () => {
        setShowLanding(false);
        setShowHome(true);
    }

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handlePopoverClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
  

    return (
        <ThemeProvider theme={theme}>
            <div className="Phone">
                { showLanding &&
                <div className="LandingPage">
                    <img src={statusBar} className="StatusBar" alt="Status Bar"/>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <Fade
                            in={showLanding}
                            {...(showLanding ? { timeout: 750 } : {})}
                        >    
                            <Typography variant="h4" component="h4" sx={{marginTop: '20px', color: '#449DD1', fontWeight: 'Bold', fontFamily:"Poppins"}}>
                                LocalGuide
                            </Typography>
                        </Fade>


                        <Fade
                            in={showLanding}
                            {...(showLanding ? { timeout: 1500 } : {})}
                        >    
                            <Typography variant="h6" component="h6" sx={{marginTop: '110px', color: '#064789', fontWeight: 'Thin', fontFamily:"Poppins",
                                    opacity: '50%'}}>
                                Tap Icon to Scan
                            </Typography>
                        </Fade>
                    </ThemeProvider>

                    <Fade
                        in={showLanding}
                        {...(showLanding ? { timeout: 1000 } : {})}
                    >                 
                        <img src={logo} style={{transitionDuration: '0.2s'}} className="logo" alt="logo" onClick={landingToHome}/>
                    </Fade>
                </div>}

                { showHome &&
                    <Fade
                        in={showHome}
                        {...(showHome ? { timeout: 1000 } : {})}
                    >
                        <div className="MainPage" >
                            <img src={statusBar} className="StatusBar" alt="Status Bar"/>

                            {/* INCREASE RADIUS BUTTON */}
                            <Button variant="contained" endIcon={
                                scanSize === "Small" ? <Wifi1Bar /> : scanSize === "Medium" ? <Wifi2Bar /> : <Wifi /> 
                            
                            } onClick={increaseSize} sx={{marginTop: '10px', transitionDuration: '0.3s', bgcolor: currentColor, boxShadow: 0, '&:hover':{ bgcolor: currentColor}}}>{scanSize}</Button>
                            
                            {/* SELF */}
                            <IconButton color="secondary" sx={{color: '#C8553D',position: 'absolute', bottom: '332px', left: '135px'}} size="large" >
                                <FmdGood />
                            </IconButton>

                            {/* SCAN RADIUS */}
                            {scanSize === "Small" &&
                                <Box sx={{ display: 'flex' }}>
                                    <Grow
                                    in={scanSize === "Small"}
                                    sx={{transformOrigin: 'bottom'}}
                                    {...(scanSize === "Small" ? { timeout: 700 } : {})}
                                    >
                                        <div style={scanDiv}>
                                            <div className='Circle' style={{width: '105px', height: '105px', border: `7px solid ${currentColor}`}}></div>
                                        </div>
                                    </Grow>
                                </Box>
                            }

                            {scanSize === "Medium" && 
                                <Box sx={{ display: 'flex' }}>
                                    <Grow
                                    in={scanSize === "Medium"}
                                    sx={{transformOrigin: 'bottom'}}
                                    {...(scanSize === "Medium" ? { timeout: 700 } : {})}
                                    >
                                        <div style={scanDiv}>
                                            <div className='Circle' style={{width: '205px', height: '205px', border: `7px solid ${currentColor}`}}></div>
                                        </div>
                                    </Grow>
                                </Box>
                            }

                            {scanSize === "Large" && 
                                <Box sx={{ display: 'flex' }}>
                                    <Grow
                                    in={scanSize === "Large"}
                                    sx={{transformOrigin: 'bottom'}}
                                    {...(scanSize === "Large" ? { timeout: 700 } : {})}
                                    >
                                        <div style={scanDiv}>
                                            <div className='Circle' style={{width: '290px', height: '290px', border: `7px solid ${currentColor}`}}></div>
                                        </div>
                                    </Grow>
                                </Box>
                            }
                            

                            {/* PINS */}
                            {/* RESTAURANTS */}
                            {restaurantClicked && 
                                <Grow
                                in={restaurantClicked}
                                {...(restaurantClicked ? { timeout: 700 } : {})}
                                >
                                    <IconButton color="secondary" sx={{color: '#064789',position: 'absolute', bottom: '355px', left: '125px'}} size="large" 
                                    onClick={() => clickPin(0)}>
                                        <FmdGood />
                                    </IconButton>      
                                </Grow>
                            }

                            {restaurantClicked && scanSize !== 'Small' &&
                                <Grow
                                in={restaurantClicked && scanSize !== 'Small'}
                                {...(restaurantClicked && scanSize !== 'Small' ? { timeout: 700 } : {})}
                                >
                                    <IconButton color="secondary" sx={{color: '#064789',position: 'absolute', bottom: '260px', left: '190px'}} size="large" 
                                    onClick={() => clickPin(1)}>
                                        <FmdGood />
                                    </IconButton>
                                </Grow>
                            }

                            {restaurantClicked && scanSize !== 'Small' &&
                                <Grow
                                in={restaurantClicked && scanSize !== 'Small'}
                                {...(restaurantClicked && scanSize !== 'Small'? { timeout: 700 } : { })}
                                >
                                    <IconButton color="secondary" sx={{color: '#064789',position: 'absolute', bottom: '300px', left: '65px'}} size="large" 
                                    onClick={() => clickPin(2)}>
                                        <FmdGood />
                                    </IconButton>
                                </Grow>
                            }

                            {restaurantClicked && scanSize === 'Large' &&
                                <Grow
                                in={restaurantClicked && scanSize === 'Large'}
                                {...(restaurantClicked && scanSize === 'Large' ? { timeout: 700 } : { })}
                                >
                                    <IconButton color="secondary" sx={{color: '#064789',position: 'absolute', bottom: '450px', left: '65px'}} size="large" 
                                    onClick={() => clickPin(3)}>
                                        <FmdGood />
                                    </IconButton>
                                </Grow>
                            }

                            {/* SHOPS */}
                            { shopClicked &&
                                <Grow
                                in={shopClicked}
                                {...(shopClicked ? { timeout: 700 } : { })}
                                >
                                    <IconButton color="secondary" sx={{color: '#449DD1',position: 'absolute', bottom: '320px', left: '90px'}} size="large" 
                                    onClick={() => clickPin(4)}>
                                        <FmdGood />
                                    </IconButton>
                                </Grow>
                            }

                            { shopClicked && scanSize !== 'Small' &&
                                <Grow
                                in={shopClicked}
                                {...(shopClicked ? { timeout: 700 } : { })}
                                >
                                    <IconButton color="secondary" sx={{color: '#449DD1',position: 'absolute', bottom: '265px', left: '180px'}} size="large" 
                                    onClick={() => clickPin(5)}>
                                        <FmdGood />
                                    </IconButton>
                                </Grow>
                            }

                            { shopClicked && scanSize === 'Large' && 
                                <Grow
                                in={shopClicked && scanSize === 'Large'}
                                {...(shopClicked && scanSize === 'Large' ? { timeout: 700 } : { })}
                                >
                                    <IconButton color="secondary" sx={{color: '#449DD1',position: 'absolute', bottom: '275px', left: '20px'}} size="large" 
                                    onClick={() => clickPin(6)}>
                                        <FmdGood />
                                    </IconButton>
                                </Grow>
                            }

                            { shopClicked && scanSize === 'Large' && 
                                <Grow
                                in={shopClicked && scanSize === 'Large'}
                                {...(shopClicked && scanSize === 'Large' ? { timeout: 700 } : { })}
                                >
                                    <IconButton color="secondary" sx={{color: '#449DD1',position: 'absolute', bottom: '415px', left: '20px'}} size="large" 
                                    onClick={() => clickPin(7)}>
                                        <FmdGood />
                                    </IconButton>
                                </Grow>
                            }


                            {/* PUBLIC PLACES */}
                            {publicPlaceClicked &&
                                <Grow
                                in={publicPlaceClicked}
                                {...(publicPlaceClicked ? { timeout: 700 } : { })}
                                >
                                    <IconButton color="secondary" sx={{color: '#F28F3B',position: 'absolute', bottom: '350px', left: '150px'}} size="large" 
                                    onClick={() => clickPin(11)}>
                                        <FmdGood />
                                    </IconButton>
                                </Grow>
                            }

                            {publicPlaceClicked && scanSize !== 'Small'  &&
                                <Grow
                                in={publicPlaceClicked && scanSize !== 'Small' }
                                {...(publicPlaceClicked && scanSize !== 'Small' ? { timeout: 700 } : { })}
                                >
                                    <IconButton color="secondary" sx={{color: '#F28F3B',position: 'absolute', bottom: '280px', left: '140px'}} size="large" 
                                    onClick={() => clickPin(12)}>
                                        <FmdGood />
                                    </IconButton>
                                </Grow>
                            }

                            {publicPlaceClicked && scanSize === 'Large' &&
                                <Grow
                                in={publicPlaceClicked && scanSize === 'Large'}
                                {...(publicPlaceClicked && scanSize === 'Large' ? { timeout: 700 } : { })}
                                >
                                    <IconButton color="secondary" sx={{color: '#F28F3B',position: 'absolute', bottom: '210px', left: '40px'}} size="large" 
                                    onClick={() => clickPin(13)}>
                                        <FmdGood />
                                    </IconButton>
                                </Grow>
                            }

                            {publicPlaceClicked && scanSize !== 'Small' &&
                                <Grow
                                in={publicPlaceClicked && scanSize !== 'Small' }
                                {...(publicPlaceClicked && scanSize !== 'Small'  ? { timeout: 700 } : { })}
                                >
                                    <IconButton color="secondary" sx={{color: '#F28F3B',position: 'absolute', bottom: '250px', left: '90px'}} size="large" 
                                    onClick={() => clickPin(14)}>
                                        <FmdGood />
                                    </IconButton>
                                </Grow>
                            }

                            {/* CLUBS */}
                            {clubClicked && scanSize === 'Large' &&
                                <Grow
                                in={clubClicked && scanSize === 'Large'}
                                {...(clubClicked && scanSize === 'Large' ? { timeout: 700 } : { })}
                                >
                                    <IconButton color="secondary" sx={{color: '#25283D',position: 'absolute', bottom: '235px', left: '48px'}} size="large" 
                                    onClick={() => clickPin(8)}>
                                        <FmdGood />
                                    </IconButton>
                                </Grow>
                            }

                            {clubClicked && scanSize !== 'Small' &&
                                <Grow
                                in={clubClicked && scanSize !== 'Small'}
                                {...(clubClicked && scanSize !== 'Small' ? { timeout: 700 } : { })}
                                >
                                    <IconButton color="secondary" sx={{color: '#25283D',position: 'absolute', bottom: '250px', left: '115px'}} size="large" 
                                    onClick={() => clickPin(9)}>
                                        <FmdGood />
                                    </IconButton>
                                </Grow>
                            }

                            {clubClicked && scanSize !== 'Small' &&
                                <Grow
                                in={clubClicked && scanSize !== 'Small'}
                                {...(clubClicked && scanSize !== 'Small' ? { timeout: 700 } : { })}
                                >
                                    <IconButton color="secondary" sx={{color:  '#25283D',position: 'absolute', bottom: '310px', left: '50px'}} size="large" 
                                    onClick={() => clickPin(10)}>
                                        <FmdGood />
                                    </IconButton>
                                </Grow>
                            }

                            <Modal open={pinClicked} onClose={()=> setPinClicked(false)}>
                                <Box sx={style}>
                                    <CardContent align='left' >
                                        <Typography variant="h5" component="p">
                                            {currentData.name}
                                        </Typography>

                                        <Typography variant="h6" component="p">
                                        {currentData.type} - {currentData.info}
                                        </Typography>

                                        <Typography gutterBottom variant="subtitle1" color="text.secondary">
                                            <strong>{currentData.address}</strong>, <em>{currentData.distance}km</em>
                                        </Typography>

                                        <Rating value={currentData.rating} readOnly/>
                                        
                                        <Typography gutterTop variant="body1" color="text.secondary">
                                            <em>"{currentData.review}"</em>
                                        </Typography>
                                    </CardContent>

                                    <CardActions >
                                        <Button size="small" onClick={()=> setPinClicked(false)}>Close</Button>
                                    </CardActions>
                                </Box>
                            </Modal>

                            {/* BUTTONS */}
                            <div className="bottomBar" style={{borderTop: `5px solid ${currentColor}`, transitionDuration: '0.3s'}}>
                                <IconButton color="secondary" sx={{color: restaurantClicked ? '#064789' : '#696969' }} size="large" onClick={clickRestaurant}
                                    onMouseEnter={event => {
                                        setPlaceType("Restaurants");
                                        handlePopoverOpen(event)}} 

                                    onMouseLeave={handlePopoverClose}>
                                    <Restaurant />
                                </IconButton>

                                <IconButton color="secondary" sx={{color: shopClicked ? '#449DD1': '#696969'}} size="large" onClick={clickShop}
                                    onMouseEnter={event => {
                                        setPlaceType("Shops");
                                        handlePopoverOpen(event)}} 

                                    onMouseLeave={handlePopoverClose}>
                                    <ShoppingBag />
                                </IconButton>

                                <IconButton color="secondary" sx={{color: clubClicked ? '#25283D': '#696969'}} size="large" onClick={clickClub}
                                    onMouseEnter={event => {
                                        setPlaceType("Clubs");
                                        handlePopoverOpen(event)}} 
    
                                    onMouseLeave={handlePopoverClose}>
                                    <LocalBar />
                                </IconButton>

                                { add &&
                                    <IconButton color="secondary" sx={{color: publicPlaceClicked ? '#F28F3B' : '#696969' }} size="large" onClick={clickPublicPlace}
                                        onMouseEnter={event => {
                                            setPlaceType("Public Places");
                                            handlePopoverOpen(event)}} 
        
                                        onMouseLeave={handlePopoverClose}>
                                        <LocationCity />
                                    </IconButton>
                                }

                                <IconButton color="secondary" sx={{color: '#C8553D'}} size="large" 
                                onClick={() => {
                                    if(!add) {
                                        setAdd(true); 
                                        setAddClicked(true);
                                    }
                                }}>
                                    <AddCircle/>
                                </IconButton>

                                <Modal open={addClicked} onClose={()=> setAddClicked(false)}>
                                    <Box sx={style}>
                                        <CardContent align='left' >
                                            <Typography variant="h6" component="p">
                                                This is just a test of adding a new location type to filter
                                            </Typography>

                                            <Typography variant="body" component="p">
                                                In this case, the new place will be 'Public Places'
                                            </Typography>
                                        </CardContent>

                                        <CardActions >
                                            <Button size="small" onClick={()=> setAddClicked(false)}>Close</Button>
                                        </CardActions>
                                    </Box>
                                </Modal>

                                <Popover
                                    id="mouse-over-popover"
                                    sx={{
                                        pointerEvents: 'none',
                                    }}
                                    open={open}
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'center',
                                    }}
                                    transformOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'center',
                                    }}
                                    onClose={handlePopoverClose}
                                    disableRestoreFocus
                                >
                                    <Box sx={{transitionDuration: '0.3s' ,backgroundColor: 'transparent', border: `2px solid ${currentColor}`}}>
                                        <Typography sx={{ p: 1 , transitionDuration: '0.3s' ,color: currentColor, fontWeight: 'Bold', fontFamily:"Poppins"}}>{placeType}</Typography>
                                    </Box>
                                </Popover>
                            </div>
                        </div>
                    </Fade>}
            </div>
        </ThemeProvider>
    );
}
  
export default LocalGuide;
  


