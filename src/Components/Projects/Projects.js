import './Projects.css'

import React, {useState, useEffect, useRef} from 'react';

export function Projects() {

  const [open, setOpen] = useState(false);

  const [dropdown, setDropdown] = useState(process.env.PUBLIC_URL + '/drop_down_icon.png')

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        setDropdown(process.env.PUBLIC_URL + '/drop_down_icon.png');
        console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);


    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });


  /*
  Function used to toggle the drop down
  */
  const toggleDropDown = () => {
    setDropdown(prevState => {
      return prevState === process.env.PUBLIC_URL + '/drop_down_icon.png' ? process.env.PUBLIC_URL + '/img/close icon.webp' : process.env.PUBLIC_URL + '/drop_down_icon.png';
    })
  }

  const handleClick = () => {
    toggleDropDown();
    setOpen(!open);
  }


  return (
    <div className="App">

      <p className="projects-title">Projects</p>

      <div class="grid-container">
        <div class="grid-item">
          <a href="https://github.com/davin-win-kyi/real-time-sidewalk-test">
            <p>Side Walk Veering</p>
            <img className="project-img" src={process.env.PUBLIC_URL + "/img/pedestrian traffic signal.png"}></img>
          </a>
        </div>
        <div class="grid-item">
          <a href="https://github.com/davin-win-kyi/real-time-bus-detection">
            <p>Bus stop assistance</p>
            <img className="project-img" src={process.env.PUBLIC_URL + "/img/bus stop.jpeg"}></img>
          </a>
        </div>
        <div class="grid-item">
          <a href="https://github.com/davin-win-kyi/real-world-alt-text">
          <p>VQA for blind and low vision individuals</p>
            <img className="project-img" src={process.env.PUBLIC_URL + "/img/VQA.png"}></img>
          </a>
        </div>
        <div class="grid-item">Coming soon!</div>
        <div class="grid-item">Coming soon!</div>
        <div class="grid-item">Coming soon!</div>
      </div>



      <div className='menu-container' ref={menuRef}>
        <div className='menu-trigger' onClick={handleClick}>
          <img src={dropdown}></img>
        </div>

        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
          <h3>Davin Win Kyi<br/><span>Undergraduate Research Assistant</span></h3>
          <ul>
            <DropDownItem img={process.env.PUBLIC_URL + "/img/home.png"} text={"Home"} website={"/website/"} />
            <DropDownItem img={process.env.PUBLIC_URL + "/img/resume.jpeg"} text={"CV"} website={"https://drive.google.com/file/d/173AAasbF66ZX1EUa88uzUN6o-4kdKU4C/view?usp=sharing"}/>
            <DropDownItem img={process.env.PUBLIC_URL + "/img/contact.jpeg"} text={"Contact"} website={"/website/Contact"}/>
            <DropDownItem img={process.env.PUBLIC_URL + "/img/projects.png"} text={"Projects"} website={"/website/Projects"}/>
            <DropDownItem img={process.env.PUBLIC_URL + "/img/about me.png"} text={"About me"} website={"/website/About"}/>
            <DropDownItem img={process.env.PUBLIC_URL + "/img/teaching icon.jpeg"} text={"Teaching"} website={"/website/Teaching"}/>
          </ul>
        </div>
      </div>

      <div className="background"></div>

    </div>
  );
}

function DropDownItem(props) {
  return(
    <li className = 'dropdownItem'>
      <img src={props.img}></img>
      <a href={props.website}> {props.text} </a>
    </li>
  );
}