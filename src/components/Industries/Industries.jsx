import React from "react";
import "./Industries.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Industries() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="industries-wrapper">
      <h1>
        Industries We <span className="bg-color">Serve</span>
      </h1>
      <p>
        Over the past 16 years that we have been serving our clients, we have to
        build a strong clientele across 66 countries and across 15 myriad
        industries verticals. We have been projecting stellar performance in
        delivering some of the par excellence and cutting edge digital solutions
        to our clients.
      </p>
      <div className="images-grid-wrappper">
        <div className="column1">
          <img
            src="https://media.discordapp.net/attachments/1134172030699323465/1185166886737035345/image.png?ex=658e9fad&is=657c2aad&hm=2b54b77efae3c8b9d4416e52752b1e453d8f9dd5b928c8666960da8a3b294c7c&=&format=webp&quality=lossless&width=1596&height=1056"
            alt=""
            style={{ height: "100%" }}
          />
        </div>

        <div className="column2">
          <img
            src="https://media.discordapp.net/attachments/1134172030699323465/1185167101556703232/image.png?ex=658e9fe0&is=657c2ae0&hm=6c975dbd597a4428943c5356342ac9a3f383f51ba0e43f53dccc6bbca0830335&=&format=webp&quality=lossless&width=1860&height=736"
            alt=""
          />
          <img
            src="https://media.discordapp.net/attachments/1134172030699323465/1185167204870795285/image.png?ex=658e9ff8&is=657c2af8&hm=f5320ff1f4efbfa1eb527599132ed8daf8b93e35933e788f920abe174b85cb24&=&format=webp&quality=lossless&width=1860&height=764"
            alt=""
          />
        </div>
        <div className="column3">
          <img
            src="https://media.discordapp.net/attachments/1134172030699323465/1185167296084332614/image.png?ex=658ea00e&is=657c2b0e&hm=c1f6c1c1e3789e541cb32fee318b7f405cfc04053aebc6ddbccebdf98e0e1b90&=&format=webp&quality=lossless&width=840&height=1054"
            alt=""
          />
        </div>
      </div>
      <Link to="/industries">
        <button className="read-more">Read more</button>
      </Link>
    </div>
  );
}
