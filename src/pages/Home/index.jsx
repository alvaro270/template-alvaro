import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { getData } from "../../service";
import "./index.css";

const Home = () => {
    const [user, setUser] = useState({});

    const [username, setUsername] = useState("");

    const getUserFromGitHub = async () => {
        const user = await getData(`/users/${username}`);
        setUsername("");
        setUser(user);
    };

    return (
        <div className="Rotomdex">
            <Box sx={{ display: "flex", flexDirection: "column" }} m={5}>
                <div>
                    <h1>Buscar usuario</h1>
                </div>
                <div className="container">
                    <TextField size="small" label="Escriba nombre de Usuario"
                        value={username} onChange={(e) => setUsername(e.target.value)} />
                    <br />
                    <br />
                    <Button variant="contained" color="success" onClick={getUserFromGitHub}>
                        Buscar
                    </Button>
                </div>
                <div className="container">
                    <h3>Data de usuario:</h3>
                     
                </div>
                <div className="container">
                    <h2>{user?.login}</h2>  
                </div>
                <div className="container">
                    <h3>Imagen del Usuario:</h3>              
                </div>
                <div className="container">
                    <img className="imagen" src={user?.avatar_url} alt="" />
                    
                </div>
               
                
            </Box>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />          
            <br />
        </div>
    );
};

export default Home;