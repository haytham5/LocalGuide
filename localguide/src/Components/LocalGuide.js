import './localguide.css';
import { useState } from 'react';
import statusBar from './Status Bar.png';
import { Button, IconButton, Modal, Box } from '@mui/material';
import {Wifi1Bar, Wifi2Bar, Wifi, Restaurant, AddCircle, Hotel, Park, FmdGood  } from '@mui/icons-material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Rating from '@mui/material/Rating';
import Grow from '@mui/material/Grow';
import Fade from '@mui/material/Fade';




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
    const [hotelClicked, setHotelClicked] = useState(false);
    const [add, setAdd] = useState(false);
    const [parkClicked, setParkClicked] = useState(false);
    const [pinClicked, setPinClicked] = useState(false);
    const [currentData, setCurrentData] = useState({});
    const [currentColor, setCurrentColor] = useState('#696969');

    const data = [
        {
            image: '',
            name: 'Pastramis',
            type: "Restaurant",
            addTypeInfo: 'Italian Restaurant',
            address: '8302, Italian street',
            rating: 4,
            review: 'This is a pretty sweet spot',
            distance: '5km',
        }, 
        {
            image: '',
            name: 'Chez Ping',
            type: "Restaurant",
            addTypeInfo: 'Asian Restaurant',
            address: '8302, Asian street',
            rating: 5,
            review: 'This is a pretty great place',
            distance: '1km',
        }, 
        {
            image: '',
            name: 'Box',
            type: "Restaurant",
            addTypeInfo: 'Not a Restaurant',
            address: '8302, side of road',
            rating: 1,
            review: 'sucks',
            distance: '100m',
        }, 
    ];

    const clickPin = (id) => {
        if(pinClicked) {
            setPinClicked(false);
        }
        else {
            setPinClicked(true);
            setCurrentData(data[id]);

        }
    }

    const clickR = () => {
        if(restaurantClicked) {
            setRestaurantClicked(false);
            setCurrentColor('#696969');
        }
        else {
            setRestaurantClicked(true);
            setCurrentColor('#064789');
        }

        if(hotelClicked) setHotelClicked(false);
        if(parkClicked) setParkClicked(false);

    }

    const clickH = () => {
        if(hotelClicked) {
            setHotelClicked(false);
            setCurrentColor('#696969');
        }
        else {
            setHotelClicked(true);
            setCurrentColor('#449DD1');
        }

        if(restaurantClicked) setRestaurantClicked(false);
        if(parkClicked) setParkClicked(false);

    }

    const clickP = () => {
        if(parkClicked) {
            setParkClicked(false);
            setCurrentColor('#696969');
        }
        else {
            setParkClicked(true);
            setCurrentColor('#F28F3B');
        }

        if(hotelClicked) setHotelClicked(false);
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

    const homeToLanding = () => {
        setShowLanding(true);
        setShowHome(false);
    }

    return (
        <div className="Phone">
            { showLanding &&
            <div className="LandingPage">
                <img src={statusBar} className="StatusBar" alt="Status Bar"/>

                <img src="" className="logo" alt="logo"/>
            
                <Button variant="contained" className="ShareLocation" 
                        sx={{bgcolor:  "#449DD1", boxShadow: 0, borderRadius: '50px ! important', "&:hover": {bgcolor: "#449DD1"}}}
                        onClick={landingToHome}
                >Share Location to Use App</Button>
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

                        {restaurantClicked && scanSize === 'Large' &&
                            <Grow
                            in={restaurantClicked && scanSize === 'Large'}
                            {...(restaurantClicked && scanSize === 'Large' ? { timeout: 700 } : { })}
                            >
                                <IconButton color="secondary" sx={{color: '#064789',position: 'absolute', bottom: '450px', left: '65px'}} size="large" 
                                onClick={() => clickPin(2)}>
                                    <FmdGood />
                                </IconButton>
                            </Grow>
                        }

                        {/* HOTELS */}
                        { hotelClicked &&
                            <Grow
                            in={hotelClicked}
                            {...(hotelClicked ? { timeout: 700 } : { })}
                            >
                                <IconButton color="secondary" sx={{color: '#449DD1',position: 'absolute', bottom: '320px', left: '90px'}} size="large" >
                                    <FmdGood />
                                </IconButton>
                            </Grow>
                        }

                        { hotelClicked && scanSize === 'Large' && 
                            <Grow
                            in={hotelClicked && scanSize === 'Large'}
                            {...(hotelClicked && scanSize === 'Large' ? { timeout: 700 } : { })}
                            >
                                <IconButton color="secondary" sx={{color: '#449DD1',position: 'absolute', bottom: '275px', left: '20px'}} size="large" >
                                    <FmdGood />
                                </IconButton>
                            </Grow>
                        }

                        {/* PARKS */}
                        {parkClicked && scanSize === 'Large' &&
                            <Grow
                            in={parkClicked && scanSize === 'Large'}
                            {...(parkClicked && scanSize === 'Large' ? { timeout: 700 } : { })}
                            >
                                <IconButton color="secondary" sx={{color: '#F28F3B',position: 'absolute', bottom: '210px', left: '40px'}} size="large" >
                                    <FmdGood />
                                </IconButton>
                            </Grow>
                        }

                        <Modal open={pinClicked} onClose={()=> setPinClicked(false)}>
                            <Box sx={style}>
                                <CardMedia
                                    component="img"
                                    alt=""
                                    height="90"
                                    image=""
                                />

                                <CardContent align='left' >
                                    <Typography variant="h5" component="p">
                                        {currentData.name}
                                    </Typography>

                                    <Typography variant="h6" component="p">
                                        {currentData.addTypeInfo}
                                    </Typography>

                                    <Typography gutterBottom variant="subtitle1" color="text.secondary">
                                        <strong>{currentData.address}</strong>, <em>{currentData.distance}</em>
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
                            <IconButton color="secondary" sx={{color: restaurantClicked ? '#064789' : '#696969' }} size="large" onClick={clickR}>
                                <Restaurant />
                            </IconButton>

                            <IconButton color="secondary" sx={{color: hotelClicked ? '#449DD1': '#696969'}} size="large" onClick={clickH}>
                                <Hotel />
                            </IconButton>

                            { add &&
                                <IconButton color="secondary" sx={{color: parkClicked ? '#F28F3B' : '#696969' }} size="large" onClick={clickP}>
                                    <Park />
                                </IconButton>
                            }

                            <IconButton color="secondary" sx={{color: '#C8553D'}} size="large" onClick={() => {setAdd(true)}}>
                                <AddCircle/>
                            </IconButton>
                        </div>
                    </div>
                </Fade>}
        </div>
    );
}
  
export default LocalGuide;
  


