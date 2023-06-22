import React, { Component } from "react";
import ReactModal from "react-modal";

import BlogForm from "./blog-from";

//ReactModal.setAppElement(".app-wrapper");//

export default class BlogModal extends Component {
    constructor(props) {
        super(props);

        this.customStyles = {
            content: {
                top:"50%",
                left: "50%",
                right: "auto",
                marginRight: "-50%",
                transform: "translate(-50%, -50%",
                width: "800px"
            },
            overlay: {
                backgroundColor: "rgba(1, 1, 1, 0.75)"
            }
        };


        this.handleSuccessfullFormSubmission = this.handleSuccessfullFormSubmission.bind(
          this
        );
      }

    handlesuccessFullFormSubmission(blog) {
      console.log ("blog from blog from", blog);
    }

    render() {
        return (
          <ReactModal
          style={this.customStyles}
            onRequestClose={() => {
              this.props.handleModalClose();
            }}
            isOpen={this.props.modalIsOpen}
          >
            <BlogForm handlesuccessFullFormSubmission={this.handlesuccessFullFormSubmission}/>
          </ReactModal>
        );
      }
    }