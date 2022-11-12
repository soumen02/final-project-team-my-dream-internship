import React from 'react';
import { Link } from 'react-router-dom';
import "./Edit.css";
import SeeAll from './SeeAll'; 
import {
    Typography,
    IconButton,
    AppBar,
    Grid,
    Toolbar,
} from "@mui/material";
import { ArrowBack } from "@material-ui/icons";
import AddIcon from '@mui/icons-material/Add';


export default function Edit({view}) {

    const [workExp, setWorkExp] = React.useState([
        { title: 'Research Assistant', org: 'New York University', date:'Aug 2021 - Dec 2021', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
        { title: 'Research Assistant', org: 'New York University', date:'Aug 2021 - Dec 2021', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
        { title: 'Research Assistant', org: 'New York University', date:'Aug 2021 - Dec 2021', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
        { title: 'Research Assistant', org: 'New York University', date:'Aug 2021 - Dec 2021', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." }
    ]);

    const [proj, setProj] = React.useState([
        { title: 'Hello World', org: 'Python', date:'Aug 2021 - Dec 2021', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
        { title: 'Hello World', org: 'Python', date:'Aug 2021 - Dec 2021', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
        { title: 'Hello World', org: 'Python', date:'Aug 2021 - Dec 2021', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
        { title: 'Hello World', org: 'Python', date:'Aug 2021 - Dec 2021', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." }
    ]);
    
    const handleWorkExp = () => {
        // setWorkExp(workExp.push({ title: 'Title', org: 'Organization/Project', date:'Date', text: "Description" }));
        setWorkExp(workExp => [...workExp, { title: 'Title', org: 'Organization/Project', date:'Date', text: "Description" }]);
    };

    const handleProj = () => {
        // setWorkExp(workExp.push({ title: 'Title', org: 'Organization/Project', date:'Date', text: "Description" }));
        setProj(proj => [...proj, { title: 'Title', org: 'Organization/Project', date:'Date', text: "Description" }]);
    };

    const handleClick = () => {
        if (view) {
            handleWorkExp();
            // workExp.push({ title: 'Title', org: 'Organization/Project', date:'Date', text: "Description" });
        }
        else{
            handleProj();
            // proj.push({ title: 'Title', org: 'Organization/Project', date:'Date', text: "Description" });
        }
        console.log("clicked")
    };

    return (
        <>
            <AppBar position="relative">
                <Toolbar>
                    <Link to="/profile">
                        <IconButton>
                        <ArrowBack />
                        </IconButton>
                    </Link>
                    <Typography variant="h4">Edit</Typography>

                    <Grid container justifyContent="flex-end">
                        <div id = "iconDiv" onClick = {handleClick}>
                            <AddIcon fontSize = "large"/>
                        </div>
                    </Grid>

                </Toolbar>
            </AppBar>
            <div className = "editsCont"> 
                {view ?
                <SeeAll items = {workExp} state = {false} edit = {true}/>
                :
                <SeeAll items = {proj} state = {false} edit = {true}/>
                }
                
            </div>
        </>
    );
}

// <input type="text" id="word1" oninput="word1Function(this);" value="Hello"><br>