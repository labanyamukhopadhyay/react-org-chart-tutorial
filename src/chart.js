import React, { Fragment } from "react";
//import randomcolor from "randomcolor";
//import faker from "faker";
//import randomColor from "randomcolor";

import data from "./data.json";

const Card = (props) => {
<<<<<<< HEAD
  //const levelColor = randomcolor();
=======
  const levelColor = randomcolor();
>>>>>>> 07b789fc2826942bef5e819b3178c9912369a10c

  return (
    <ul>
      {props.data.map((item) => (
        <Fragment key={item.name}>
          <li>
            <div className="card">
<<<<<<< HEAD
              {/* <div className="image">
                <img
                  //src={faker.image.avatar()}
                  alt="Profile"
                  style={{ borderColor: "green" }}
                />
              </div> */}
              <div className="card-body">
                <h4>{item.name}</h4>
              </div>
              {/* <div className="card-footer" style={{ 
                //background: levelColor 
                }}>
=======
              <div className="image">
                <img
                  src={faker.image.avatar()}
                  alt="Profile"
                  style={{ borderColor: levelColor }}
                />
              </div>
              <div className="card-body">
                <h4>{faker.name.findName()}</h4>
                <p>{faker.name.jobTitle()}</p>
              </div>
              <div className="card-footer" style={{ background: levelColor }}>
>>>>>>> 07b789fc2826942bef5e819b3178c9912369a10c
                <img
                  src="https://www.flaticon.com/svg/static/icons/svg/2950/2950657.svg"
                  alt="Chat"
                />
                <img
                  src="https://www.flaticon.com/svg/static/icons/svg/1034/1034131.svg"
                  alt="Call"
                />
                <img
                  src="https://www.flaticon.com/svg/static/icons/svg/570/570387.svg"
                  alt="Video"
                />
<<<<<<< HEAD
              </div> */}
=======
              </div>
>>>>>>> 07b789fc2826942bef5e819b3178c9912369a10c
              <div></div>
            </div>
            {item.children?.length && <Card data={item.children} />}
          </li>
        </Fragment>
      ))}
    </ul>
  );
};

const Chart = () => {
  return (
    <div className="org-tree">
      <Card data={data} />
    </div>
  );
};

<<<<<<< HEAD
export default Chart;
=======
export default Chart;
>>>>>>> 07b789fc2826942bef5e819b3178c9912369a10c
