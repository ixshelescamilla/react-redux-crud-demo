import React, { Component } from 'react'
import { connect } from 'react-redux';

class PostForm extends Component {
    // Element actions
    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const message = this.getMessage.value;
        const data = {
            id: new Date(),
            title,
            message
        }
        console.log('Post Data:: ', data);
        // Dispatch component since we have connect
        this.props.dispatch({
            type: 'ADD_POST',
            data,
            editing: false
        });
        this.getTitle.value = '';
        this.getMessage.value = '';
    }

    // Render element HTML
    render() {
        return (
            <div className='post-container' >
                <div className='post'>
                <h1 className='post_heading'>Create Post</h1>
                <form className='form' onSubmit={this.handleSubmit}>
                    <input required type='text'
                        placeholder='Enter post title'
                        ref={(input) => this.getTitle = input} />
                    <br /> <br />
                    <textarea required placeholder='Enter post'
                        cols="5" rows="24"
                        ref={(input) => this.getMessage = input} />
                    <br /> <br />
                    <button>Post</button>
                </form>
            </div>
            </div>
        );
    }
}

export default connect()(PostForm);
