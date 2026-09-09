import Icon from './components/Icon';
import styles from './page.module.css';

const SOCIAL_LINKS = [
  { href: 'https://github.com/neutrou/', icon: 'github', label: 'GitHub' },
  {
    href: 'https://www.linkedin.com/in/victor-algranti',
    icon: 'linkedin',
    label: 'LinkedIn',
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <a href="/" className={styles.identity} aria-label="Victor Algranti home">
          Victor Algranti<span>Software Engineer</span>
        </a>
        <span className={styles.status}>
          <span className={styles.statusDot} aria-hidden="true" />
          Rebranding in progress
        </span>
      </header>

      <main className={styles.main}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>A little space to rethink.</p>
          <h1 className={styles.title}>
            Same curiosity.<br />
            <span>A new perspective.</span>
          </h1>
          <p className={styles.description}>
            My portfolio is currently being rebranded.<br className={styles.desktopBreak} />
            {' '}The website is temporarily unavailable while I work on what’s next.
          </p>
          <p className={styles.signoff}>Thanks for stopping by. See you soon.</p>
        </div>

        <div className={styles.artwork} aria-hidden="true">
          <div className={styles.frameBack} />
          <div className={styles.frameFront}>
            <span className={styles.crosshair} />
          </div>
          <span className={styles.artworkCaption}>A NEW PERSPECTIVE / IN THE MAKING</span>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>In the meantime, let’s stay connected.</p>
        <nav className={styles.socials} aria-label="Social links">
          {SOCIAL_LINKS.map(({ href, icon, label }) => (
            <a key={icon} href={href} target="_blank" rel="noopener noreferrer">
              <Icon url={icon} width={19} height={19} alt="" />
              {label}
              <span className={styles.arrow} aria-hidden="true">↗</span>
            </a>
          ))}
        </nav>
      </footer>
    </div>
  );
}
