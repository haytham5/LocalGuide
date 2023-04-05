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
import Zoom from '@mui/material/Zoom';



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
    const [showLanding, setShowLanding] = useState(false);
    const [showHome, setShowHome] = useState(true); {/* TODO: REVERSE THESE */}
    const [restaurantClicked, setRestaurantClicked] = useState(false);
    const [hotelClicked, setHotelClicked] = useState(false);
    const [add, setAdd] = useState(false);
    const [parkClicked, setParkClicked] = useState(false);
    const [pinClicked, setPinClicked] = useState(false);
    const [currentData, setCurrentData] = useState({});

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

    {/* TODO: change bottombar border based on what is clicked */}


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
        if(restaurantClicked) setRestaurantClicked(false);
        else setRestaurantClicked(true);

        if(hotelClicked) setHotelClicked(false);
        if(parkClicked) setParkClicked(false);
    }

    const clickH = () => {
        if(hotelClicked) setHotelClicked(false);
        else setHotelClicked(true);

        if(restaurantClicked) setRestaurantClicked(false);
        if(parkClicked) setParkClicked(false);
    }

    const clickP = () => {
        if(parkClicked) setParkClicked(false);
        else setParkClicked(true);

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

                <img src="" className="logo" alt="Status Bar"/>
            
                <Button variant="contained" className="ShareLocation" disableElevation
                        sx={{bgcolor:  "#449DD1", "&:hover": {bgcolor: "#064789"}}}
                        onClick={landingToHome}
                >Share Location to Use App</Button>
            </div>}

            { showHome &&
            <div className="MainPage">
                <img src={statusBar} className="StatusBar" alt="Status Bar"/>

                {/* INCREASE RADIUS BUTTON */}
                <Button variant="contained" endIcon={
                    scanSize === "Small" ? <Wifi1Bar /> : scanSize === "Medium" ? <Wifi2Bar /> : <Wifi /> 
                
                } onClick={increaseSize} sx={{marginTop: '10px'}}>{scanSize}</Button>
                
                {/* SCAN RADIUS */}
                {scanSize === "Small" &&
                    <Box sx={{ display: 'flex' }}>
                        <Grow
                        in={scanSize === "Small"}
                        sx={{transformOrigin: 'bottom'}}
                        {...(scanSize === "Small" ? { timeout: 700 } : {})}
                        >
                            <div style={scanDiv}>
                                <div className='Circle1' style={{width: '100px', height: '100px'}}></div>
                                <div className='Circle2' style={{width: '105px', height: '105px'}}></div>
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
                                <div className='Circle1' style={{width: '200px', height: '200px'}}></div>
                                <div className='Circle2' style={{width: '205px', height: '205px'}}></div>
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
                                <div className='Circle1' style={{width: '285px', height: '285px'}}></div>
                                <div className='Circle2' style={{width: '290px', height: '290px'}}></div>
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
                    <IconButton color="secondary" sx={{color: '#064789',position: 'absolute', bottom: '450px', left: '65px'}} size="large" 
                    onClick={() => clickPin(2)}>
                        <FmdGood />
                    </IconButton>
                }

                {/* HOTELS */}
                { hotelClicked &&
                    <IconButton color="secondary" sx={{color: '#449DD1',position: 'absolute', bottom: '320px', left: '90px'}} size="large" >
                        <FmdGood />
                    </IconButton>
                }

                { hotelClicked && scanSize === 'Large'&& 
                    <IconButton color="secondary" sx={{color: '#449DD1',position: 'absolute', bottom: '275px', left: '20px'}} size="large" >
                        <FmdGood />
                    </IconButton>
                }

                {/* PARKS */}
                {parkClicked && scanSize === 'Large' &&
                    <IconButton color="secondary" sx={{color: '#F28F3B',position: 'absolute', bottom: '210px', left: '40px'}} size="large" >
                        <FmdGood />
                    </IconButton>
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
                <div className="bottomBar">
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
            </div>}
        </div>
    );
}
  
export default LocalGuide;
  


