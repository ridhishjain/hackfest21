import React from "react";
import { storage } from "../firebase";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import CircularProgress from "@material-ui/core/CircularProgress";

// @material-ui/icons
import AssignmentIcon from "@material-ui/icons/Assignment";
import ImageIcon from "@material-ui/icons/Image";
import LinkIcon from "@material-ui/icons/Link";
import DescriptionIcon from "@material-ui/icons/Description";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import NavPills from "components/NavPills/NavPills.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";

const useStyles = makeStyles(styles);

let image = null;
let imageURL = null;
let result = null;

const storeUrl = async function(e) {
  imageURL = e.target.value;
};

const store = async function(e) {
  image = e.target.files[0];
  const uploadTask = storage.ref(`skin/${image.name}`).put(image);
  uploadTask.on(
    "state_changed",
    () => {
      console.log("uploading...");
      document.getElementById("uploadingSkin").style.display = "inline";
    },
    error => {
      console.log(error);
    },
    async () => {
      await storage
        .ref("skin")
        .child(image.name)
        .getDownloadURL()
        .then(url => {
          imageURL = url;
          console.log(imageURL);
          document.getElementById("uploadingSkin").style.display = "none";
          document.getElementById("resultButtonSkin").style.display = "inline";
          document.getElementById("uploadedImageDivisionSkin").style.display =
            "flex";
          document.getElementById("uploadedImageSkin").src = imageURL;
        });
    }
  );
};

const getResultByURL = function(e) {
  console.log("getting results");
  imageURL = document.getElementById("materialUrlSkin").value;
  var request = require("request");
  const bodyF = `{\n"url": "${imageURL}"\n}`;

  var options = {
    method: "POST",
    url: "http://10.42.0.1:5000/aptos/",
    headers: {
      Host: "10.42.0.1:5000",
      Accept: "application/json",
      "Content-Type": "application/json,application/json"
    },
    body: bodyF
  };

  request(options, function(error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
    result = body.slice(14, body.length - 2);
    console.log(result);
    document.getElementById("resultSkin").innerHTML = result;
  });
};

const getResult = function(e) {
  console.log("getting results");
  var request = require("request");
  const bodyF = `{\n"url": "${imageURL}"\n}`;

  var options = {
    method: "POST",
    url: "http://10.42.0.1:5000/aptos/",
    headers: {
      Host: "10.42.0.1:5000",
      Accept: "application/json",
      "Content-Type": "application/json,application/json"
    },
    body: bodyF
  };

  request(options, function(error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
    result = body.slice(14, body.length - 2);
    console.log(result);
    document.getElementById("resultSkin").innerHTML = result;
    document.getElementById("heatimageSkin").style.display = "flex";
  });
};

const heading = {
  display: "flex",
  justifyContent: "center",
  marginBottom: "3%"
};

export default function SectionTabs() {
  const classes = useStyles();
  let img = null;
  return (
    <div className={classes.section} style={{ padding: 0, margin: 0 }}>
      <div style={heading}>
        <h2> Skin Cancer Test </h2>
      </div>
      <div className={classes.container}>
        <div id="nav-tabs">
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <CustomTabs
                headerColor="primary"
                tabs={[
                  {
                    tabName: "Upload Image",
                    tabIcon: ImageIcon,
                    tabContent: (
                      <div>
                        <p className={classes.textCenter}>
                          <input
                            type="file"
                            alt="upload file image"
                            onChange={store}
                          />
                          <div id="uploadingSkin" style={{ display: "none" }}>
                            {" "}
                            <CircularProgress />{" "}
                          </div>
                          <Button
                            id="resultButtonSkin"
                            color="primary"
                            onClick={getResult}
                            style={{ display: "none" }}
                          >
                            Get Results
                          </Button>
                        </p>
                        <div
                          style={{ display: "none", justifyContent: "center" }}
                          id="uploadedImageDivisionSkin"
                        >
                          <img
                            src="#"
                            id="uploadedImageSkin"
                            height="300px"
                            width="300px"
                          />
                        </div>
                      </div>
                    )
                  },
                  {
                    tabName: "Upload Image Url",
                    tabIcon: LinkIcon,
                    tabContent: (
                      <p className={classes.textCenter}>
                        <CustomInput
                          labelText="Upload url here"
                          id="materialUrlSkin"
                          type="text"
                          onChange={storeUrl}
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <LinkIcon />
                              </InputAdornment>
                            )
                          }}
                        />
                        <Button onClick={getResultByURL} color="primary">
                          Get Results
                        </Button>
                      </p>
                    )
                  }
                ]}
              />
            </GridItem>
            <GridItem
              xs={12}
              sm={12}
              md={8}
              lg={6}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <NavPills
                color="primary"
                tabs={[
                  {
                    tabButton: "Results",
                    tabIcon: LinkIcon,
                    tabContent: (
                      <span>
                        <p>
                          <h2>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center"
                              }}
                              id="resultSkin"
                            >
                              {" "}
                            </div>
                          </h2>
                        </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Description",
                    tabIcon: DescriptionIcon,
                    tabContent: (
                      <span>
                        <p>
                          <img
                            src="#"
                            id="heatimageSkin"
                            style={{ display: "none" }}
                          />
                        </p>
                      </span>
                    )
                  }
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
