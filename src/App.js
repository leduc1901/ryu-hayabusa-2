import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(20deg,rgba(222,184,33,.7),#76adb0 98%)",
      }}
    >
      <div
        style={{
          background:
            "linear-gradient(20deg,#e7ab17 3%,#d3b72c 40%,#81af76 77%)",
          position: "relative",
          overflow: "hidden",
          width: "1311px",
          display: "flex",
          height: "818px",
        }}
      >
        <div className="menu-bar">
          <div className="menu-item menu-item-1" style={{ animationDelay: "0ms" }}>
            STORIES
          </div>
          <div
            className="menu-item menu-item-2"
            style={{ animationDelay: "200ms", marginTop: "43px" }}
          >
            SERVICE
          </div>
          <div
            className="menu-item menu-item-3"
            style={{ animationDelay: "400ms", marginTop: "50px" }}
          >
            SUPPORT
          </div>
        </div>
        <div className="toolbar">
          <div className="toolbar-line"></div>
          <div className="toolbar-line"></div>
        </div>
        <div className="scroll">
          <div className="scroll-item"></div>
        </div>
        <div className="float-text">
          <p>
            As the son of renowned ninja Joe Hayabusa,[note 1] Ryu Hayabusa
            (whose first and last names, respectively, translate literally to
            dragon and peregrine falcon) is the wielder of the legendary
            Dragon Sword.[5] Although he appears as a normal human, he is
            actually a demon-human hybrid whose ancestors drew their blood from
            the same evil deities such as the Holy Vigoor Emperor, the first
            games main antagonist. In the Dead or Alive series, Ryu has
            befriended fellow ninja Hayate, and joins forces with him along with
            Kasumi and Ayane, with whom he works to take down the corrupt
            tournament organizer Victor Donovan.
          </p>
        </div>
        <div className="car-image">
          <img alt="" src="https://i.ibb.co/L6n8NyF/23a106bcde9f07bac8d868e8e4eba5c6.png" />
        </div>
        <div className="camp-image">
          <img alt="" src="https://i.ibb.co/tckLGz1/house-PNG50.png" />
        </div>
        <div className="fking-scroll">
          <div className="section-one" style={{ height: "818px" }}>
            <div className="title-section">
              <div className="title1">
                <p>Electric</p>
              </div>
              <div className="title2">
                <p>Adventure</p>
              </div>
            </div>
            <div className="action">
              <div className="explore">
                <p className="explore-text">KEEP THE WORLD ADVENTUROUS FOREVER</p>
                <div className=" button">EXPLORE</div>
              </div>
              <div className="action-btn">
                <div className=" btn">
                  <i className="fa fa-home" style={{ fontSize: "20px" }}></i>
                </div>
                <div className=" btn">
                  <i className="fa fa-power-off" style={{ fontSize: "20px" }}></i>
                </div>
                <div className=" btn">
                  <i className="fa fa-codiepie" style={{ fontSize: "20px" }}></i>
                </div>
              </div>
              <div className="drawing">
                <img alt="" src="https://cdn.carbuzz.com/gallery-images/2021-mercedes-amg-g63-dashboard-carbuzz-410020.jpg" />
              </div>
            </div>
          </div>
        </div>
        {/* <div class="section-two">
          <div class="title">
            <div class="title-box">
              <p class="react-reveal"
                style="animation-fill-mode: both; animation-duration: 600ms; animation-delay: 0ms; animation-iteration-count: 1; opacity: 1; animation-name: react-reveal-745702567171635-1;">
                Explore the</p>
            </div>
            <div class="title-box">
              <p class="react-reveal"
                style="animation-fill-mode: both; animation-duration: 600ms; animation-delay: 200ms; animation-iteration-count: 1; opacity: 1; animation-name: react-reveal-745702567171635-1;">
                places you love</p>
            </div>
          </div>
        </div>
        <div class="section-three"></div> */}
      </div>
    </div>
  );
}

export default App;
