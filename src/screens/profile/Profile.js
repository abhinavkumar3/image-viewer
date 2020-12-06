import React, { Component } from 'react';
import Header from "../../common/header/Header";
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import './Profile.css'
import Fab from '@material-ui/core/Fab';
import { Redirect } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';
import Modal from 'react-modal'
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from "@material-ui/core/InputLabel";
import Input from '@material-ui/core/Input';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import IconButton from '@material-ui/core/IconButton'



const TabContainer = function (props) {
    return (
        <Typography component="div" style={{ padding: 0, textAlign: "center" }}>{props.children}</Typography>
    );
}


class Profile extends Component {
    constructor() {
        super();
        this.state = {
            profilePicture: "",
            fullname: "",
            username: "",
            noOfPosts: 0,
            follows: 0,
            followedBy: 0,
            modalIsOpen: false,
            fullNameRequired: "dispNone"
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Header />
                <div className="profile-summary">
                    <img className="profile-image" src={this.state.profilePicture} alt={this.state.fullName} />
                </div>
                <div className="profile-summary-1">
                    <Typography variant="h5" component="h5">{this.state.username}</Typography><br />
                    <Typography>
                        <span> Posts: {this.state.noOfPosts} </span>
                        <span className="spacing" > Follows: {this.state.follows} </span>
                        <span className="spacing"> Followed By: {this.state.followedBy} </span>
                    </Typography>
                    <Typography variant="h6" component="h6">
                        <div className="top-spacing">{this.state.fullname}
                            <Fab color="secondary" aria-label="edit" className={classes.fab} >
                                <EditIcon onClick={this.openModalHandler} />
                            </Fab>
                        </div>
                    </Typography>
                    <Modal ariaHideApp={false} isOpen={this.state.modalIsOpen} contentLabel="Label" onRequestClose={this.closeModalHandler}>
                        <h2>Edit</h2><br />
                        <TabContainer>
                            <FormControl required>
                                <InputLabel htmlFor="fullname">Full Name</InputLabel>
                                <Input id="fullname" type="text" fullname={this.state.fullname} onChange={this.editFullNameHandler} />
                                <FormHelperText className={this.state.fullNameRequired}><span className="red">required</span></FormHelperText>
                            </FormControl><br /><br />
                        </TabContainer><br />
                        <Button variant="contained" color="primary" onClick={this.updateFullNameHandler}>UPDATE</Button>
                    </Modal>
                </div>
                <div className="bottom image-margins">
                    <GridList>
                        {
                            this.state.imagesData.map(image => (
                                <GridListTile onClick={() => this.imageClickHandler(image)} className="image-grid-item" key={"grid" + image.id}>
                                    <img src={image["images"]["standard_resolution"]["url"]} alt={image.id} />
                                </GridListTile>
                            ))}
                    </GridList>
                    <Modal isOpen={this.state.imageModalIsOpen} ariaHideApp={false} contentLabel="Label1" className="image-modal" onRequestClose={this.closeImageModalHandler} >
                        <div className={classes.modalStyle}>
                            <div className="modal-left">
                                <img className="clicked-image" src={this.state.currImage} alt={this.state.curImgName} />
                            </div>
                            <div className="modal-right">
                                <div className="right-top">
                                    <img className="modal-profile-icon" src={this.state.currProfilePicture} alt={this.state.fullname} />
                                    <span className="modal-username">{this.state.username}</span>
                                    <hr />
                                </div>
                                <div className="right-middle">
                                    <div >{this.state.currCaption}</div>
                                    <div className="image-hashtags">{this.state.currTags}</div>
                                    <div className="comments-block">
                                        {

                                            this.state.comments.map(comment => (
                                                this.state.currId === comment.imageId ?
                                                    <div className="comment-display" key={comment.id}>

                                                        <Typography variant="subtitle2" className={classes.commentUsername} gutterbottom="true" >
                                                            {comment.username}:
                                                                            </Typography>
                                                        <Typography variant="body1" className="comment-text" gutterbottom="true">
                                                            {comment.text}
                                                        </Typography>
                                                    </div> : null
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="right-botton">
                                    <IconButton className="like-button" aria-label="like-button" onClick={() => this.likeBtnHandler(this.state.currId)}>
                                        {this.state.currLikeStatus ? <FavoriteIcon className="image-liked-icon" fontSize="large" /> : <FavoriteBorderIcon className="image-like-icon" fontSize="large" />}
                                    </IconButton>
                                    {this.state.likeCounts === 1 ?
                                        <span>
                                            {this.state.likeCounts} like
                                                            </span>
                                        : <span>
                                            {this.state.likeCounts} likes
                                                              </span>
                                    }
                                    <FormControl className={classes.comment} fullWidth={true}>
                                        <InputLabel htmlFor="comment" >Add a comment</InputLabel>
                                        <Input id="comment" className="comment-text" name="commentText" onChange={(event) => this.onCommentTextChangeHandler(event, this.state.currId)} value={this.state.currId === this.state.commentText.id ? this.state.commentText.text : ""} />
                                        <Button variant="contained" color="primary" className={classes.addCommentBtn} onClick={() => this.onClickAddBtn(this.state.currId)}>
                                            ADD
                                                            </Button>
                                    </FormControl>
                                </div>
                            </div>
                        </div>

                    </Modal>
                </div>
            </div>
        )
    }
}

export default Profile;