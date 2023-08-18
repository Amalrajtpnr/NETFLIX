import { useState } from "react";
import "./App.css";
import screen from "./assets/tv.png";
import Faq from "./components/FAQ/faq";
import image from "./assets/Netflix-logo-red-black-png-removebg-preview.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="home">
        <div className="navigation">
          <img src={image} alt="" className="netflix" />
          <div className="user">
            <button className="lingual">English</button>
            <button className="signin">Sign In</button>
          </div>
        </div>

        <div className="brief">
          <h1 className="shows">Unlimited movies, TV shows and more.</h1>
          <h1 className="watch">Watch anywhere. Cancel anytime.</h1>
          <h1 className="membership">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h1>
        </div>
        <div className="search">
          <input type="text" className="input1" />
          <button className="create1">Get Started</button>
        </div>
      </div>
      <div className="section2">
        <div className="text">
          <h1 className="head">Enjoy on your TV.</h1>
          <h1 className="description">
            Watch on smart TVs, Playstation,Xbox, Chromecast,Apple TV, Blu-ray
            players and more.
          </h1>
        </div>
        <div className="tv">
          <video
            autoPlay
            loop
            style={{
              height: "100%",
              width: "72%",
              marginTop: -20,
              marginRight: 1,
            }}
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
          ></video>
        </div>
      </div>
      <div className="section3">
        <div className="tv3">
          <video
            loop
            autoPlay
            style={{
              height: "100%",
              width: "72%",
              marginTop: -20,
              marginRight: 1,
            }}
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
          ></video>
        </div>
        <div className="text3">
          <h1 className="head3">Download your shows to watch offline.</h1>
          <h1 className="description3">
            Save your favourites easily and always have something to watch.
          </h1>
        </div>
      </div>
      <div className="section4">
        <div className="text4">
          <h1 className="head4">Watch everywhere.</h1>
          <h1 className="description4">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </h1>
        </div>
        <div className="tv4">
          <video
            autoPlay
            loop
            style={{
              height: "100%",
              width: "72%",
              marginTop: -20,
              marginRight: 1,
            }}
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
          ></video>
        </div>
      </div>
      <div className="section5">
        <div className="text5">
          <h1 className="head5">Enjoy on your TV.</h1>
          <h1 className="description5">
            Watch on smart TVs, Playstation,Xbox, Chromecast,Apple TV, Blu-ray
            players and more.
          </h1>
        </div>
        <div className="tv5">
          <video
            autoPlay={true}
            loop
            style={{
              height: "100%",
              width: "72%",
              marginTop: -20,
              marginRight: 1,
            }}
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
          ></video>
        </div>
      </div>
      <div className="section6">
        <h1 className="head6">Frequently Asked Questions</h1>
        <Faq
          tag="What is Netflix"
          paragraph1="Netflix is a streaming service that offers a wide variety of
          award-winning TV shows, movies, anime, documentaries and more – on
          thousands of internet-connected devices. "
          paragraph2="You can watch as much as you want, whenever you want, without a
          single ad – all for one low monthly price. There's always
          something new to discover, and new TV shows and movies are added
          every week!"
        />
        <Faq
          tag="What is Netflix"
          paragraph1="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
          streaming device, all for one fixed monthly fee. Plans range from
          ₹ 149 to ₹ 649 a month. No extra costs, no contracts"
        />
        <Faq
          tag="What is Netflix"
          paragraph1="Watch anywhere, anytime. Sign in with your Netflix account to
          watch instantly on the web at netflix.com from your personal
          computer or on any internet-connected device that offers the
          Netflix app, including smart TVs, smartphones, tablets, streaming
          media players and game consoles."
          paragraph2="       You can also download your favourite shows with the iOS, Android,
          or Windows 10 app. Use downloads to watch while you're on the go
          and without an internet connection. Take Netflix with you
          anywhere"
        />
        <Faq
          tag="What is Netflix"
          paragraph1=" Netflix is flexible. There are no annoying contracts and no
          commitments. You can easily cancel your account online in two
          clicks. There are no cancellation fees – start or stop your
          account anytime."
        />
        <Faq
          tag="What is Netflix"
          paragraph1="    Netflix has an extensive library of feature films, documentaries,
          TV shows, anime, award-winning Netflix originals, and more. Watch
          as much as you want, anytime you want."
        />
        <Faq
          tag="What is Netflix"
          paragraph1="   The Netflix Kids experience is included in your membership to give
          parents control while kids enjoy family-friendly TV shows and
          films in their own space."
          paragraph2="  Kids profiles come with PIN-protected parental controls that let
          you restrict the maturity rating of content kids can watch and
          block specific titles you don’t want kids to see."
        />
        <h1 className="mail">
          Ready to watch?.Enter your email to create or restart your membership.
        </h1>
        <div className="account">
          <input type="text" className="input" />
          <button className="create">Get Started</button>
        </div>
      </div>
      <footer className="footer">
        <div className="title">
          <h1 className="style">Questions ? Call 000-800-040-1843</h1>
        </div>
        <div className="footer-description">
          <div className="initial">
            <h1 className="style">FAQ</h1>
            <h1 className="style">Investor relationship</h1>
            <h1 className="style">Privacy</h1>
            <h1 className="style">Speed test</h1>
          </div>
          <div className="initial2">
            <h1 className="style2">Help Centre</h1>
            <h1 className="style2">Jobs</h1>
            <h1 className="style2">Cookie Preferences</h1>
            <h1 className="style2">Legal Notices</h1>
          </div>{" "}
          <div className="initial3">
            <h1 className="style3">Account</h1>
            <h1 className="style3">Ways to Watch</h1>
            <h1 className="style3">Corporate Information</h1>
            <h1 className="style3">Only on Netflix</h1>
          </div>
          <div className="initial4">
            <h1 className="style4">Media Centre</h1>
            <h1 className="style4">Terms of Use</h1>
            <h1 className="style4">Contact Us</h1>
          </div>
        </div>
        <button className="language">English</button>
      </footer>
    </div>
  );
}

export default App;
