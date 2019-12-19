import React, { Component } from 'react';
import PostData from './data.json';



class PostList extends Component {
  render () {
    return (
      <div>

        {PostData.map((postDetail, index) =>{
          return (
        <div>
        <h1>{postDetail.title}</h1>
        <p>{postDetail.content}</p>
        <img src={postDetail.pic} alt="Smiley face" height="42" width="42"/>
        </div>
          );
        })}
      </div>
    );
  };
}

export default PostList