import React from 'react'
import v from "./../../img/in.mp4";
import "./Video.scss";
import w from "./../../img/w3.png";
import FreeApps from '../Free Apps/FreeApps';
import Essential from '../Essential/Essential';
import AppList from '../AppList/AppList';
import Home from '../../Home';
import Footer from '../../Footer';

const Video = () => {

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);

  return (
    <>
      <div className="vid">
        <video src={v} className="v" controls="True" />
      </div>

      <div className='main-bg-container'>

        <div className='intro-container'>
          <div className='intro-img-container'>
            <span className='intro-group reveal'>
              <div><img className='intro-img' src={w} /></div>
              <span className='intro-title'>Windows Universal Tool</span>
            </span>
          </div>
        </div>

        <div className='bg'>
          <FreeApps />
          <Essential

            bg="https://4kwallpapers.com/images/wallpapers/macos-monterey-wwdc-21-stock-dark-mode-5k-2560x1440-5585.jpg"

            c_img_1="https://store-images.s-microsoft.com/image/apps.4784.13634052595610511.c45457c9-b4af-46b0-8e61-8d7c0aec3f56.3d483847-81a6-4078-8f83-a35c5c38ee92"
            c_img_2="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/2048px-Facebook_Messenger_logo_2020.svg.png"
            c_img_3="https://iconarchive.com/download/i98455/dakirby309/simply-styled/VLC-Media-Player.ico"
            c_img_4="https://cdn-icons-png.flaticon.com/512/174/174872.png"

            title="Essential Apps"
            ess_text="Take your Windows experience to new heights with these must-have apps"

            n1="Tik Tok"
            n2="Messanger"
            n3="VLC Media Player"

            c1="Entertainment"
            c2="Social Media"
            c3="Movie & Music"
          />
          <AppList />
          <Essential

            bg="https://4kwallpapers.com/images/wallpapers/windows-11-pantone-dark-dark-background-stock-1440x900-7187.jpg"

            c_img_1="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/305c62116697567.6067188c792c1.png"

            c_img_2="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b5181b116697567.6067188c753b1.png"

            c_img_3="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a406e7116697567.6067188c77c2d.png"

            c_img_4="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1ef5d6116697567.6067188c73d8a.png"

            title="Microsoft 360"
            ess_text="Everything you need to achieve more in less time"

            n1="Tik Tok"
            n2="Messanger"
            n3="VLC Media Player"

            c1="Entertainment"
            c2="Social Media"
            c3="Movie & Music"

            w="110px"
          />
          <Home />
        </div>
        <Footer/>
      </div>
      
    </>
  )
}

export default Video