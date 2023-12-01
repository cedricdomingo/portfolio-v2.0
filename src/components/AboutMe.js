import 'animate.css';
import aboutMeImage from '../assets/img/about-me.png'; // Import the image

export const AboutMe = () => {
  return (
    <section className="about-me" id="aboutme">
      <div className="about-me-header">

        <h2>About Me</h2>
      </div>

      <div className="container">
   
            <p>
              My journey began with childhood curiosity—messing around with <i>Rollercoaster Tycoon</i> and <i>Command & Conquer</i> game files in 'Notepad.exe' to grant myself unlimited resources (my youthful attempt at "hacking"). As I grew, so did my interest in code manipulation; from scripts and bots in games like <i>MapleStory</i> and <i>RuneScape</i>, to crafting personal websites on platforms like <i>Piczo</i> and customizing <i>Tumblr</i> templates.
            </p>
            <p>
              Fast forward to today, as a recent Bachelor of Technology graduate specializing in Web and Mobile Application Development, my passion for innovation and creation burns brighter than ever. While I've left manipulating game files in notepad.exe behind, that same curiosity to better understand and improve things still endures.
            </p>
            <p>
              I'm fueled by the excitement of bringing innovative ideas to life through impactful solutions, and I look forward to whatever the future holds for me.
            </p>

      </div>
    </section>
  );
};