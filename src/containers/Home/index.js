import React from "react";
import { Component } from 'react';
import classNames from "classnames";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import ImageUpload from './imageUpload.js';

import styles from "assets/jss/material-kit-react/views/components.js";
import SectionEye from './Sections/SectionEye.js';
import SectionTabs from './Sections/SectionTabs.js';
import SectionPills from './Sections/SectionPills.js';

const useStyles = makeStyles(styles);

// function for getting response on request url
async function postdata(e){
var request = require("request");

var options = { method: 'POST',
  url: 'http://10.42.0.1:5000/aptos/',
  headers: 
   { 'cache-control': 'no-cache',
     Connection: 'keep-alive',
     'Content-Length': '584',
     'Accept-Encoding': 'gzip, deflate',
     Host: '10.42.0.1:5000',
     'Postman-Token': '82074d2c-2925-45ad-8c21-402b67926060,53c96234-9f90-4c6d-9b57-e44fdd657ed6',
     'Cache-Control': 'no-cache',
     Accept: '*/*',
     'User-Agent': 'PostmanRuntime/7.17.1',
     'Content-Type': 'application/json,application/json' },
  body: '{\n    "url": "https://storage.googleapis.com/kagglesdsdata/comps%2F14774%2F536888%2Ftest_images%2F010d915e229a.png?GoogleAccessId=datasets-dataviewer@kaggle-161607.iam.gserviceaccount.com&Expires=1569753196&Signature=C%2BOQjWa0stodnJO49%2B6IPrZ0oYOOwDK53hUazUWsHCA0qnx2X%2BJDH6MfoqABVU98YmvRxzBZ0zF0XdHomzI2uwlwpTkFlrZzcbHYdD2xV0qVKvbigvqvcRFbltJarzLQLWN1Pab1ZW%2F1W3o%2FHRKw0wMivJuOdddQokFzeIuJGKoyHt2QGSVBF43zmHIlkymA8IMJMz1SOALk1tTK6qm58TashdE%2Fv3n%2BpiAL3401oTyDF0xCZVqJDvT3d7GCZtlvpLlJJd3xXsJ2IZvQKLfPWe6gqQOwLVzMVOhBN0kSVu4o95WwCSWaUqSJKgSRJAarZoj9l5cqa82ODUv2%2FpcGWg%3D%3D"\n}' };

request(options, function (error, response, body) {
  if (error){
    console.log(error);
  }

  console.log(body);
});
}

export default function Home(props) {
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div>
      <Header
        brand="MEDIDOC"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/bg4.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Medidoc</h1>
                <h3 className={classes.subtitle}>
                  Artificial Intelligence for medical Diagnosis and Prognosis
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <input id="inputURL" type="text">
        </input>
        <button onClick={postdata}> Click Me </button>
        <br /><br /><br /><br /><br />
        <ImageUpload />
        <SectionEye />
       </div>

       

      <Footer />
    </div>
  );
}
