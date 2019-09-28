import React from "react";
import { Component } from 'react';
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

// sections for this page
// import SectionBasics from "./Sections/SectionBasics.js";
// import SectionNavbars from "./Sections/SectionNavbars.js";
// import SectionTabs from "./Sections/SectionTabs.js";
// import SectionPills from "./Sections/SectionPills.js";
// import SectionNotifications from "./Sections/SectionNotifications.js";
// import SectionTypography from "./Sections/SectionTypography.js";
// import SectionJavascript from "./Sections/SectionJavascript.js";
// import SectionCarousel from "./Sections/SectionCarousel.js";
// import SectionCompletedExamples from "./Sections/SectionCompletedExamples.js";
// import SectionLogin from "./Sections/SectionLogin.js";
// import SectionExamples from "./Sections/SectionExamples.js";
// import SectionDownload from "./Sections/SectionDownload.js";

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

async function postdata(e){
  console.log("aa gaya");
  /*const urlImage = "https://storage.googleapis.com/kagglesdsdata/comps%2F14774%2F536888%2Ftest_images%2F010d915e229a.png?GoogleAccessId=datasets-dataviewer@kaggle-161607.iam.gserviceaccount.com&Expires=1569753196&Signature=C%2BOQjWa0stodnJO49%2B6IPrZ0oYOOwDK53hUazUWsHCA0qnx2X%2BJDH6MfoqABVU98YmvRxzBZ0zF0XdHomzI2uwlwpTkFlrZzcbHYdD2xV0qVKvbigvqvcRFbltJarzLQLWN1Pab1ZW%2F1W3o%2FHRKw0wMivJuOdddQokFzeIuJGKoyHt2QGSVBF43zmHIlkymA8IMJMz1SOALk1tTK6qm58TashdE%2Fv3n%2BpiAL3401oTyDF0xCZVqJDvT3d7GCZtlvpLlJJd3xXsJ2IZvQKLfPWe6gqQOwLVzMVOhBN0kSVu4o95WwCSWaUqSJKgSRJAarZoj9l5cqa82ODUv2%2FpcGWg%3D%3D";

    try{
      await fetch("https://10.42.0.1:5000/",{
        method : "POST",
        headers : { "Content-type" : "application/json" },
        body : { "url": urlImage }
      }).then(
        (response) => console.log(response)
      );

    } catch(error) {
      console.log(error);
    }*/
    var data = JSON.stringify({
  "url": "https://storage.googleapis.com/kagglesdsdata/comps%2F14774%2F536888%2Ftest_images%2F010d915e229a.png?GoogleAccessId=datasets-dataviewer@kaggle-161607.iam.gserviceaccount.com&Expires=1569753196&Signature=C%2BOQjWa0stodnJO49%2B6IPrZ0oYOOwDK53hUazUWsHCA0qnx2X%2BJDH6MfoqABVU98YmvRxzBZ0zF0XdHomzI2uwlwpTkFlrZzcbHYdD2xV0qVKvbigvqvcRFbltJarzLQLWN1Pab1ZW%2F1W3o%2FHRKw0wMivJuOdddQokFzeIuJGKoyHt2QGSVBF43zmHIlkymA8IMJMz1SOALk1tTK6qm58TashdE%2Fv3n%2BpiAL3401oTyDF0xCZVqJDvT3d7GCZtlvpLlJJd3xXsJ2IZvQKLfPWe6gqQOwLVzMVOhBN0kSVu4o95WwCSWaUqSJKgSRJAarZoj9l5cqa82ODUv2%2FpcGWg%3D%3D"
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "http://10.42.0.1:5000/aptos/");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("User-Agent", "PostmanRuntime/7.15.0");
xhr.setRequestHeader("Accept", "*/*");
xhr.setRequestHeader("Cache-Control", "no-cache");
xhr.setRequestHeader("Postman-Token", "467f9cad-9a43-4eb5-a47c-28bbc8e9e579,b4dfe59c-74af-4702-9995-c6f5d7199f65");
xhr.setRequestHeader("Host", "10.42.0.1:5000");
xhr.setRequestHeader("accept-encoding", "gzip, deflate");
xhr.setRequestHeader("content-length", "584");
xhr.setRequestHeader("Connection", "keep-alive");
xhr.setRequestHeader("cache-control", "no-cache");

xhr.send(data);
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
      hii <br />
      hii <br />
      hii <br />
      hii <br />
      hii <br />
      hii <br />
      hii <br />
      hii <br />
      hii <br />
      hii <br />
      hii <br />
      hii <br />
      hii <br />
      hii <br />
      hii <br />
      hii <br />
      hii <br />
      hii <br />

       </div>
{/*
        <SectionBasics />
        <SectionNavbars />
        <SectionTabs />
        <SectionPills />
        <SectionTypography />
        <SectionJavascript />
        <SectionCarousel />
        <SectionCompletedExamples />
        <SectionLogin />
        <SectionExamples />
        <SectionDownload />
     */}

      <Footer />
    </div>
  );
}
