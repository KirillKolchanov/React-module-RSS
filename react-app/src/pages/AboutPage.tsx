import Navigation from '../components/Navigation';

import '../styles/pages/About.css';

const AboutPage = () => {
  return (
    <>
      <Navigation />
      <div className="flex my-40 items-center justify-center">
        <h1 className="m-20">
          The project made by
          <span className="font-bold"> Kirill Kolchanov</span>
          <p className="mt-4 mb-4">
            My discord: <span className="italic">KirillKolchanov#2036</span>
          </p>
          <a href="https://github.com/KirillKolchanov/">My Github</a>
          <div className="mt-4">
            <a href="https://t.me/kirya_ko">My Telegram</a>
          </div>
        </h1>
        <div className="imgAbout bg-cover items-center rounded-full" />
      </div>
    </>
  );
};

export default AboutPage;
