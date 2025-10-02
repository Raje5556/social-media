import { createContext, useReducer } from "react";

const DEFAULT_CONTEXT = {
  postList: [],
  addPost: () => { },
  deletePost: () => { },
};  
const PostList = createContext(DEFAULT_CONTEXT);
const postListReducer = (currPostList, action) => 
  {
    return currPostList;
  }

const PostListProvider = ({children}) => {
const [postList, dispatchPostlist] = useReducer(
  postListReducer, []
);

const addPost = () => {};

const deletePost = () => {};

 return 
 (
 <PostList.Provider value ={{
  postList, addPost, deletePost
 }}>{children}
 </PostList.Provider>
);

const DEFAULT_POST_LIST = [
  {
  id:'1',
  title : 'going to mumbai',
  body:'hi friends, i am going to mumbai for my vocations',
  reactions: 2,
  userId: 'user1',
  tags:['travel', 'mumbai', 'vacations'],
  },
  { 
  id:'2',
  title : 'going to mumbai',
  body:'hi friends, i am going to mumbai for my vocations',
  reactions: 2,
  userId: 'user1',
  tags:['travel', 'mumbai', 'vacations'],
  },
];
}

export default PostListProvider;