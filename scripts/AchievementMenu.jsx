import React, {useState} from 'react'; 
import {Socket} from './Socket.jsx';

const h1={
    textAlign: 'center',
    padding: 50,
    margin: 50,
    fontWeight: 'bold',
    fontStyle: 'italic',
    borderWidth: 5,
    background: 'linear-gradient(darkviolet,darkblue)',
    borderRadius:10,
};


function Achievements(){
    const[title, setTitle] = useState('Click an Achievement to view your progress'); 
    const[progress, setProgress] = useState(''); 
    function handleClick(event,id){
        event.preventDefault();
        let achievement_id = {
            id : id
        };
        console.log(achievement_id);
        console.log(id);
        Socket.emit('get achievement', achievement_id);
        
    }
    
    return(
        <div>
            <h1 style={h1}>Achievement Menu</h1>
            <h2> { title } </h2>
            <h3> { progress } </h3>
            <br></br>
            <button id='money' onClick={handleClick(this.id)}>heist</button>
            <br></br>
            <button id='health' onClick={handleClick(this.id)}>surgeon</button>
            <br></br>
            <button id='wins' onClick={handleClick(this.id)}>winnning streak</button>
            <br></br>
            <button id='damage' onClick={handleClick(this.id)}>soul seeker</button>
            <br></br>
            <button id='items' onClick={handleClick(this.id)}>swagger</button>
        </div>
    );
}
export function AchievemntMenuUI(){
    return(
        <Achievements /> 
    ); 
}