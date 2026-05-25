import React from 'react'
function Team() {
    return ( 
        <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/anish.jpeg" alt="anish"
            style={{ borderRadius: "100%", width: "50%", height: "40%" }}
          />
          <h4 className="mt-5">Anish Raj</h4>
          <h6>Developer & Entrepreneur</h6>
        </div>
        <div className="col-6 p-3">
        <p>

  Anish is a visionary tech enthusiast,

  strategic thinker, and developer

  driven by innovation, entrepreneurship,

  and building impactful digital ecosystems.

</p>
        <p>

  Passionate about modern technologies,

  scalable systems, and ambitious ideas,

  he is currently exploring the intersection

  of AI and software engineering at

  IIT Gandhinagar.

</p>
          
          <p>
            Connect on <a href="/"><i class="fa-solid fa-user"></i></a> / <a href="https://www.linkedin.com/in/anish-raj-94a30b370?utm_source=share_via&utm_content=profile&utm_medium=member_android"><i class="fa-brands fa-square-linkedin"></i></a> /{" "}
            <a href="https://github.com/imVynor"><i class="fa-brands fa-square-github"></i></a>/{" "}
            <a href="https://www.instagram.com/_.anish.raj/"><i class="fa-brands fa-square-instagram"></i></a>
          </p>
        </div>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
       
        <div className="col-6 p-3">
          <p>

  Raj is a full stack developer,

  tech enthusiast, and curious builder

  passionate about creating meaningful

  digital products and solving real-world

  problems through technology.

</p>
          <p>

  Currently exploring AI systems,

  web technologies, and entrepreneurship

  while studying at IIT Gandhinagar.

</p>
          
          <p>
            Connect on <a href="/"><i class="fa-solid fa-user"></i></a> / <a href="/"><i class="fa-brands fa-square-linkedin"></i></a> /{" "}
            <a href="https://github.com/OptiSolvD/"><i class="fa-brands fa-square-github"></i></a> /{" "}
            <a href="https://www.instagram.com/raj720674/"><i class="fa-brands fa-square-instagram"></i></a>
          </p>
        </div>
         <div className="col-6 p-3 text-center">
          <img
            src="media/images/raj.jpeg" alt="raj"
            style={{ borderRadius: "100%", width: "50%", height: "60%" }}
          />
          <h4 className="mt-5">Raj </h4>
          <h6>Developer & Entrepreneur</h6>
        </div>
      </div>
       

    </div>
     );
}

export default Team;