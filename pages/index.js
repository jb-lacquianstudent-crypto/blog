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
        <p>I'm an enthusiastic tech enthusiast and creative builder who loves solving problems and learning new skills. Outside of my work, I spend my free time building web applications, hiking local trails, and practicing photography. My playlist stays on heavy rotation with a mix of indie rock, chill lofi beats, and classic 80s synth-pop. When it comes to food, nothing beats a plate of authentic street tacos or a steaming bowl of fresh, handmade ramen. In five years, I see myself leading impactful digital projects, collaborating with inspiring teams, and building accessible tools that improve everyday online experiences.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}