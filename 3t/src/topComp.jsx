import './topComp.css'
export default function TopComp(){
    return(
        <div className="top-bar">
        <div className="profile">
          <img src="./src/assets/check-profile.png" alt="Profile Photo" className="profile-photo" />
        </div>
        <p>Hello john doe</p>
        <div className="balance">
          <p>Balance</p>
          <p>1000</p>
          <p>INR</p>
          <p>+</p>
          <p>1000</p>
        </div>
      </div>
    );
    
}