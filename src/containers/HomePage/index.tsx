import { Category, HomePageStyle } from './styles';
import { PostData } from '../../domain/posts/post';
import PostCard from '../../components/PostCard';
import MainContainer from '../../components/MainContainer';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Head from 'next/head';
import { SITE_NAME } from '../../config/app-config';

type HomePageProps = {
  posts: PostData[];
  category?: any;
};

export default function HomePage({ posts, category }: HomePageProps) {
  console.log(posts);
  return (
    <>
      <Head>
        <title>{SITE_NAME}</title>
        <meta
          name="description"
          content="Meu primeiro blog de tecnologia usando next, strapi, postgres e um docker"
        />
      </Head>
      <Header />
      {category && <Category>Category: {category}</Category>}
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
