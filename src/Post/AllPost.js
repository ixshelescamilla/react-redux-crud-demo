import React, { Component } from 'react'
import { connect } from 'react-redux';

// Components
import Post from './Post';
import EditComponent from './EditPost';

class AllPost extends Component {
    render() {
        return (
            <div className='post-container'>
                <div className='post'>
                    <h1 className='post_heading'>All Post</h1>
                    {this.props.posts.map((post) =>
                        <div key={post.id}>
                            {post.editing ?
                                <EditComponent post={post} key={post.id} /> :
                                <Post key={postMessage.id} post={post} />}
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('State:: ', state);

    return {
        posts: state
    }
}

export default connect(mapStateToProps)(AllPost);