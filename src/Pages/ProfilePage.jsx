import { connect } from "react-redux";
//import { useState } from 'react';
import { result } from "../components/ApiItunes";
import "./ProfilePage.scss";


const ProfilePage = ({user}) => {

   console.log(result);
    
 

    return (
        <>
           <div>
               <div className="container">
                 {result.map((item)=>

                        <div className="card" >
                          <img className="card-header-img " src={item.artworkUrl100} alt="artWork" />
                          <div className="card-body" >
                          <p className="tag">{item.primaryGenreName}</p>
                        <h3>{item.artistName}</h3>
                        <h3>{item.trackName}</h3>
                          <p>{item.collectionCensoredName}</p>
                          <a href={item.previewUrl}>Preview</a>
                          <p>{item.collectionPrice} {item.currency}</p>
                          <img className="user-img" src="https://iconape.com/wp-content/png_logo_vector/apple-3d-logo.png" alt="" />
                         
                          </div>
                       
                        </div>
                 )}
                   
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
