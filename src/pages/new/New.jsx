import NavBar from "../../components/navBar/NavBar"
import Sidebar from "../../components/sideBar/Sidebar"
import "./new.scss"

const New = ({inputs, title}) => {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
      <NavBar />
      <div className="top">
        <h1>{title}</h1>
      </div>
      <div className="buttom">
        <div className="left">
          <img src="" alt="" />
        </div>
        <div className="right">
          <form>
            {inputs.map((input) => (
              <div className="formInput" key={input.id}>
              <label>{input.label}</label>
              <input type={input.type} name="" id="" placeholder={input.placeholder} />
            </div>
            ))}
            <button>Send</button>
          </form>
        </div>
      </div>
      </div>
    </div>
  )
}

export default New
