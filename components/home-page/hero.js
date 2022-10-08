import Image from "next/image";
import classes from "./hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/sites/profile.jpg"
          alt="An image showing profile"
          width={300}
          height={300}
          placeholder="blur"
        />
      </div>
      <h1>Hi, I'm Unknown</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        React, Next
      </p>
    </section>
  );
};

export default Hero;
