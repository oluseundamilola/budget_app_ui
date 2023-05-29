import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"
import "./featured.scss"

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Budget Spent</h1>
        <AddBusinessIcon fontSize = "small" />
      </div>
      <div className="buttom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={" 70%"} strokeWidth={5}/>
        </div>
        <p className="title">Total Budget amount spent</p>
        <p className="amount">$100,000,000</p>
        <p className="desc">Previous transaction processing. Last payment not included.</p>
      </div>
    </div>
  )
}

export default Featured
