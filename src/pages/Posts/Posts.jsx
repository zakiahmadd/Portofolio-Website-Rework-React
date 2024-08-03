import Header from "../../components/Header/Header.jsx";
import Separator from "../../components/Separator.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import postData from "../../data/post-data.jsx";
import PostCard from "./PostCard.jsx";
import "./Posts.css";

const postDataReversed = postData.reverse();

function PostsPage() {
  return (
    <>
      <Header />
      <div className="container">
        <Separator title="Posts" fontSize="25px" />
        {postDataReversed.map((post, index) => {
            return(
                <PostCard 
                title={post.title}
                date={post.date}
                type={post.postType}
                description={post.description}
                />
            )
        })}
      </div>
      <Footer />
    </>
  );
}

export default PostsPage;
