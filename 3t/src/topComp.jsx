import './topComp.css'
export default function TopComp(props){
    return(
        <div className="top-bar">
        <div className="profile">
          <img src="./src/assets/check-profile.png" alt="Profile Photo" className="profile-photo" />
        </div>
        <p>{props.name}</p>
        <div className="balance">
          <p>Balance</p>
          <p>{props.balance}</p>
          <p>INR</p>
          <p>+</p>
          <p></p>
        </div>
      </div>
    );
    
}