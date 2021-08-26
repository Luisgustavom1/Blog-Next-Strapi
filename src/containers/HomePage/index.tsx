import { HomePageStyle } from './styles';
import { PostData } from '../../domain/posts/post';
import PostCard from '../../components/PostCard';
import MainContainer from '../../components/MainContainer';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

type HomePageProps = {
  posts: PostData[];
};

export default function HomePage({ posts }: HomePageProps) {
  return (
    <>
      <Header />
      <MainContainer>
        <HomePageStyle>
          {posts.map((post: PostData) => (
            <>
              <PostCard
                key={post.slug}
                title={post.title}
                slug={post.slug}
                cover={post.cover.formats.medium.url}
              />
            </>
          ))}
        </HomePageStyle>
      </MainContainer>
      <Footer />
    </>
  );
}
