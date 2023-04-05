import './localguide.css';
import { useState } from 'react';
import statusBar from './Status Bar.png';
import { Button, IconButton } from '@mui/material';
import {Wifi1Bar, Wifi2Bar, Wifi, Restaurant, AddCircle, Hotel, Park, FmdGood  } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';

function LocalGuide() {
    const [showLanding, setShowLanding] = useState(false);
    const [showHome, setShowHome] = useState(true); {/* TODO: REVERSE THESE */}
    const [restaurantClicked, setRestaurantClicked] = useState(false);
    const [hotelClicked, setHotelClicked] = useState(false);
    const [add, setAdd] = useState(false);
    const [parkClicked, setParkClicked] = useState(false);
    const [pinClicked, setPinClicked] = useState(false);
    const [currentData, setCurrentData] = useState({});

    const data = [{name: 'restaurant'}, {name: 'wrong-staurant'}];

    {/* TODO: change bottombar border based on what is clicked */}
        {/* TODO: Align Card from Bottom */}


    const clickPin = (id) => {
        if(pinClicked) {
            setPinClicked(false);
        }
        else {
            setPinClicked(true);
            setCurrentData(data[id]);

        }
    }
    
    const theme = useTheme();



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
                
                } onClick={increaseSize}>{scanSize}</Button>
                
                {/* SCAN RADIUS */}
                {scanSize === "Small" &&
                    <div>
                        <div className='Circle1' style={{width: '100px', height: '100px'}}></div>
                        <div className='Circle2' style={{width: '105px', height: '105px'}}></div>
                    </div>
                }

                {scanSize === "Medium" && 
                    <div>
                        <div className='Circle1' style={{width: '200px', height: '200px'}}></div>
                        <div className='Circle2' style={{width: '205px', height: '205px'}}></div>
                    </div>
                }

                {scanSize === "Large" && 
                    <div>
                        <div className='Circle1' style={{width: '285px', height: '285px'}}></div>
                        <div className='Circle2' style={{width: '290px', height: '290px'}}></div>
                    </div>
                }

                {/* PINS */}
                {/* RESTAURANTS */}
                {restaurantClicked && 
                    <IconButton color="secondary" sx={{color: '#064789',position: 'absolute', bottom: '355px', left: '125px'}} size="large" 
                        onClick={() => clickPin(0)}
                    >
                        <FmdGood />
                    </IconButton>                
                }

                {restaurantClicked && scanSize !== 'Small' &&
                    <IconButton color="secondary" sx={{color: '#064789',position: 'absolute', bottom: '260px', left: '190px'}} size="large" 
                    onClick={() => clickPin(1)}>
                        <FmdGood />
                    </IconButton>
                }

                {restaurantClicked && scanSize === 'Large' &&
                    <IconButton color="secondary" sx={{color: '#064789',position: 'absolute', bottom: '450px', left: '65px'}} size="large" >
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

                {/* INFO POPUP TODO MAKE THIS A MODAL*/}
                {pinClicked &&
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image="/static/images/cards/contemplative-reptile.jpg"
                        />

                        <CardContent align='left' >
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>

                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>

                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                }

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
  


