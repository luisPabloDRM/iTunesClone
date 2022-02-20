import { connect } from "react-redux";
import { useState } from 'react';


const ProfilePage = ({user}) => {

    const[music, setMusic] = useState("");
    
    const searchMusic=() =>{
        fetch('../itunes/src/components/ApiItunes.json')
        .then(response => response.json())
        .then(data => console.log(data));
    }

    return (
        <>
           <div>
               <div>
                   <label>Search Music..</label>
                   <input type="text" onChange={(event)=>{
                       setMusic(event.target.value);
                   }} 
                   />
                   <button onClick={searchMusic} >Search Music</button>
               </div>
           </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    user: state.auth.user,
});

export default connect(mapStateToProps)(ProfilePage);
