import React from "react";
import PropTypes from "prop-types";

const Profile = (props) => {
    const style1 ={
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: '50px',
        flexWrap: 'wrap',
        
      }
    const style2 = { 
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: '85%',
        marginTop: '5%',
        padding: '80px',
      }
      
    return (
        <div className="container" style={style2}>
            <div style={style1} >
            <h4>Full Name: {props.fullName}</h4>
            <h4>Profession: {props.profession}</h4>
            <h4>Bio: {props.bio}</h4>
            
            <button onClick={() => props.handleName(props.fullName)} style={{width:"100px",height:'40px',backgroundColor:"grey",color: 'white',marginTop:'10px' }} >Your Name</button>
            </div>
            < img src="./download.jpg" alt ="Motivation" style={{width:"400px"}}>{props.children}</img>
        </div>
    )
}
Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    handleName: PropTypes.func
}

Profile.defaultProps = {
    fullName: "Name",
    bio: "bio",
    profession:"profession",
}



export default Profile;