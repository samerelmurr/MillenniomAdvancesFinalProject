import React from 'react';
import './SwipeOptions.css';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarIcon from '@material-ui/icons/Star';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';

function SwipeOption() {
    return (
        <div className="swipeBtns">
            <IconButton><ReplayIcon className="repeat" fontSize="medium"/></IconButton>
            <IconButton><CloseIcon className="left" fontSize="medium"/></IconButton>
            <IconButton><StarIcon className="star" fontSize="medium"/></IconButton>
            <IconButton><FavoriteIcon className="right" fontSize="medium"/></IconButton>
            <IconButton><FlashOnIcon className="lightning" fontSize="medium"/></IconButton>
        </div>
    )
}

export default SwipeOption
