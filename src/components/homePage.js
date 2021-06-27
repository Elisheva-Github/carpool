import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";


const HomePage = () => {
    let history = useHistory();

    const instructions = () => {
        history.replace("/instructions");
    }
    const newDrive = () => {
        history.replace("/newDrive");
    }
    const viewTravel = () => {
        history.replace("/viewTravel");
    }
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    {/* <Actions actions={getHeaderActions()} /> */}
                    <Typography variant="h6" className="list-title">
                        {/* {title} */}
                        <Button onClick={instructions()}>הוראות</Button>
                        <Button onClick={newDrive()}>צפיה בנסיעות</Button>
                        <Button onClick={viewTravel()}>נסיעה חדשה</Button>

                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )


}
export default HomePage;






