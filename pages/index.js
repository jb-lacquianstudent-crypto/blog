import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <h1></h1>

        <p>
          I'm a passionate technology enthusiast who enjoys learning new
          things, creating projects, and exploring how technology can make
          everyday life easier. In my free time, I enjoy building websites
          and applications, playing games, listening to music, and exploring
          new places through photography and outdoor adventures. My favorite
          music includes indie rock, chill lofi beats, and classic 80s
          synth-pop. When it comes to food, I especially enjoy authentic
          street tacos and a warm bowl of handmade ramen. In five years, I
          see myself growing into a skilled and successful developer, working
          on meaningful digital projects, collaborating with talented people,
          and creating accessible and useful technology that can make a
          positive impact.
        </p>

        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">
            our Next.js tutorial
          </a>
          .)
        </p>
      </section>
    </Layout>
  );
}
