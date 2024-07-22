import Post from "./Post";
import classes from "./PostList.module.css";

function PostList(props) {
  return (
    <ul className={classes.posts}>
      <Post author="Sungmo" body="React.js is awesome!" />
      <Post author="Sam" body="Check out!" />
    </ul>
  );
}

export default PostList;
