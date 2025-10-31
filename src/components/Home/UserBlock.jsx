import user from "../../assets/User.png";
import side from "./Sidebar.module.css";

function UserBlock(){
  return(
    <section className={side.UserBlockCont}>
      <img src={user}></img>
      <div className={side.userInfoCont}>
        <h2>Username</h2>
        <p>Profession</p>
      </div>
    </section>
  )
}

export default UserBlock;