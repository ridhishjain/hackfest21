import React from "react";
import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";

import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import styles from "assets/jss/material-kit-react/views/components.js";

import SectionEye from "./Sections/SectionEye.js";
import SectionBrain from "./Sections/SectionBrain.js";
import SectionSkin from "./Sections/SectionSkin.js";

const useStyles = makeStyles(styles);

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
        <SectionEye />
        <SectionBrain />
        <SectionSkin />
      </div>
      <Footer />
    </div>
  );
}
