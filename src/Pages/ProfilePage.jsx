import { connect } from "react-redux";
import { useState } from 'react';

const ProfilePage = ({user}) => {

    const[music, setMusic] = useState("");

    return (
        <>
           <div>
               <div>
                   <label>Search Music..</label>
                   <input type="text" onChange={(event)=>{
                       setMusic(event.target.value);
                   }} 
                   />
                   <button>Search Music</button>
               </div>
           </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    user: state.auth.user,
});

export default connect(mapStateToProps)(ProfilePage);
