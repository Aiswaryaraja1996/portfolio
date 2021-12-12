import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import styles from "./TechStack.module.css";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.primary,
  "&:hover": {
    background: "#F8F8F8",
  },
  cursor: "pointer",
}));

export default function TechStack() {
  return (
    <Box style={{ width: "80%", margin: "50px auto", textAlign: "Center" }}>
      <p className={styles.head} id="skills">
        Tools <span style={{ color: "#545AA7" }}>and</span> Skills
      </p>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        className={styles.itemCont}
      >
        <Grid item xs={4} sm={2}>
          <Item>
            <img src="/react.png" alt="react"></img>
            <p>React</p>
          </Item>
        </Grid>
        <Grid item xs={4} sm={2}>
          <Item>
            <img src="/javascript.png" alt="javascript"></img>
            <p>JavaScript</p>
          </Item>
        </Grid>
        <Grid item xs={4} sm={2}>
          <Item>
            <img src="/html5.png" alt="html5"></img>
            <p>HTML5</p>
          </Item>
        </Grid>
        <Grid item xs={4} sm={2}>
          <Item>
            <img src="/css3.png" alt="css3"></img>
            <p>CSS3</p>
          </Item>
        </Grid>
        <Grid item xs={4} sm={2}>
          <Item>
            <img src="/redux.png" alt="redux"></img>
            <p>Redux</p>
          </Item>
        </Grid>
        <Grid item xs={4} sm={2}>
          <Item>
            <img src="/bootstrap.png" alt="bootstrap"></img>
            <p>Bootstrap</p>
          </Item>
        </Grid>

        <Grid item xs={4} sm={2}>
          <Item>
            <img src="/git.png" alt="git"></img>
            <p>Git</p>
          </Item>
        </Grid>

        <Grid item xs={4} sm={2}>
          <Item>
            <img src="/figma.png" alt="react"></img>
            <p>Figma</p>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
