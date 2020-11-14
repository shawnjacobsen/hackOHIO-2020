import React, { useState, useEffect } from "react";
import Axios from 'axios';
import "./App.css";
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import DepartLabor from './DepartLabor.png';
import Logo from './sinclair_college.jpg';
import NYC from './nyc.png';

const images = [
  {
    url: DepartLabor,
    title: 'Department of Labor',
    width: '34%',
    link: 'https://www.dol.gov/general/topic/training/dislocatedworkers',
  },
  {
    url: Logo,
    title: 'Sinclair College',
    width: '33%',
    link: 'https://sinclair.edu/services/graduation-career/displaced-worker-services/financial-assistance/#:~:text=TAA%20is%20a%20federally%20funded%2C%20state%20administered%20program,via%20employer%20petition%20to%20the%20Department%20of%20Labor',
  },
  {
    url: NYC,
    title: 'New York City',
    width: '33%',
    link: 'https://www1.nyc.gov/site/dca/about/displaced-building-service-workers-protection-act.page#:~:text=Displaced%20Building%20Service%20Workers%20Protection%20Act.%20New%20York,employees%20are%20required%20to%20perform%20building%20service%20work',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

function Resource() {
  
  const classes = useStyles();
    return( 
        <div className="App"> 
        {images.map((image) => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
          onClick={() => {window.open(image.link)}}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
        </div>
  )

  


}

export default Resource;
