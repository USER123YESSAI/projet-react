import React from "react";
import Collapse from "../components/Collapse.jsx";
import aboutHero from "../assets/assets/image_apropos.png";
import aboutData from "../../a-propos.json";



const About = () => {
  return (
    <main className="main-about">
      <div className="banner">
        <img
          src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/bg-about.png"
          alt="bannière à propos"
          onError={(e) => {
            e.target.src = aboutHero;
          }}
          onClick={(e) => {
            const img = e.currentTarget;
            const overlay = document.createElement("div");
            overlay.className = "modal-overlay";

            const content = document.createElement("div");
            content.className = "modal-content";

            const closeBtn = document.createElement("button");
            closeBtn.className = "modal-close";
            closeBtn.textContent = "×";

            const bigImg = document.createElement("img");
            bigImg.src = img.src;
            bigImg.alt = img.alt;
            bigImg.style.width = "100%";
            bigImg.style.height = "auto";
            bigImg.style.borderRadius = "25px";
            bigImg.style.display = "block";

            const close = () => overlay.remove();
            closeBtn.onclick = close;
            overlay.onclick = close;
            content.onclick = (ev) => ev.stopPropagation();

            content.appendChild(closeBtn);
            content.appendChild(bigImg);
            overlay.appendChild(content);
            document.body.appendChild(overlay);
          }}
        />
      </div>
      <div className="collapse-about">
        <div className="collapse-group">
          {aboutData.map((item, index) => (
<Collapse key={index} title={item.title} content={item.content} className="small-collapse" />
          ))}
        </div>
      </div>
    </main>
  );
};

export default About;
