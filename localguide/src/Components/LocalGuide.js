import './localguide.css';
import { useState } from 'react';
import statusBar from './Status Bar.png';
import { Button, IconButton } from '@mui/material';
import Wifi1BarIcon from '@mui/icons-material/Wifi1Bar';
import Wifi2BarIcon from '@mui/icons-material/Wifi2Bar';
import WifiIcon from '@mui/icons-material/Wifi';

function LocalGuide() {
    const [showLanding, setShowLanding] = useState(true);
    const [showHome, setShowHome] = useState(false);

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

                <Button variant="contained" endIcon={
                    scanSize === "Small" ? <Wifi1BarIcon /> : scanSize === "Medium" ? <Wifi2BarIcon /> : <WifiIcon /> 
                
                } onClick={increaseSize}>{scanSize}</Button>
                
                {scanSize == "Small" &&
                    <div>
                        <div className='Circle1' style={{width: '100px', height: '100px'}}></div>
                        <div className='Circle2' style={{width: '110px', height: '110px'}}></div>
                    </div>
                }

                {scanSize == "Medium" && 
                    <div>
                        <div className='Circle1' style={{width: '200px', height: '200px'}}></div>
                        <div className='Circle2' style={{width: '205px', height: '205px'}}></div>
                    </div>
                }

                {scanSize == "Large" && 
                    <div>
                        <div className='Circle1' style={{width: '285px', height: '285px'}}></div>
                        <div className='Circle2' style={{width: '290px', height: '290px'}}></div>
                    </div>
                }
            </div>}
        </div>
    );
}
  
export default LocalGuide;
  


