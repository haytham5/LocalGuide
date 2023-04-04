import './localguide.css';
import { useState } from 'react';
import statusBar from './Status Bar.png';
import { Button } from '@mui/material';


function LocalGuide() {
    const [showLanding, setShowLanding] = useState(true);
    const [showHome, setShowHome] = useState(false);

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
            <div className="LandingPage">
                <img src={statusBar} className="StatusBar" alt="Status Bar"/>

                <p>This works</p>
            </div>}
        </div>
    );
}
  
export default LocalGuide;
  


