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

function postdata(e){
    e.preventDefault();
    alert("post started");
    let url = document.getElementById("imageURL").value;
    
    fetch("https://jsonplaceholder.typicode.com/posts",{
        method : "POST",
        headers : {
            "Accept" : "application/json, text/plain",
            "Content-type" : "application/json"
        },
        body : JSON.stringify({body:url})
    }).then(
        (response) => response.json()
    ).then(
        (data) => {
            alert("look for the console to see if the new enr=try is added");
            console.log(data);
            
        }
    )    

    
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
