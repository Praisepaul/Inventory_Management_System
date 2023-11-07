import { iconsImgs } from "../../utils/images";
import "./ContentTop.css";


const ContentTop = () => {
  return (
    <div className="main-content-top">
        <div className="content-top-left">
          <h3 className="content-top-title">DASHBOARD</h3>
        </div>
        <div className="content-top-btns">
            <button className="notification-btn content-top-btn">
                <img src={ iconsImgs.bell } />
                <span className="notification-btn-dot"></span>
            </button>
        </div>
    </div>
  )
}

export default ContentTop
