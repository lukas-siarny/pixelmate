import React from "react";
import Button from "../../components/Button";
import "./style.scss";
import aboutUsImg from "./images/about-us.png";
import { useHistory } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const AboutUs: React.FC = () => {
  const history = useHistory();

  const options = {
    triggerOnce: true,
    rootMargin: "-100px 0px",
  };

  const [subtitleRef, subtitleInView] = useInView(options);
  const [titleRef, titleInView] = useInView(options);
  const [textLeftRef, textLeftInView] = useInView(options);
  const [textRightRef, textRightInView] = useInView(options);
  const [buttonRef, buttonInView] = useInView(options);
  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    rootMargin: "-200px 0px",
  });

  return (
    <section className="aboutus">
      <div className="aboutus__wrapper container">
        <div
          ref={imageRef}
          className={`aboutus__image ${imageInView ? "in-view" : ""}`}
        >
          <img src={aboutUsImg} />
        </div>
        <div className="row">
          <div className="col col-12 col-6-md">
            <span
              ref={subtitleRef}
              className={`aboutus__subtitle ${subtitleInView ? "in-view" : ""}`}
            >
              Poznejte Pixelmate tým
            </span>
            <h2
              ref={titleRef}
              className={`aboutus__title ${titleInView ? "in-view" : ""}`}
            >
              Jsme mladí a hraví, startupy nás baví
            </h2>
          </div>
        </div>
        <div className="row aboutus__text">
          <div className="col col-12 col-6-md">
            <p
              ref={textLeftRef}
              className={`aboutus__text-left ${
                textLeftInView ? "in-view" : ""
              }`}
            >
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Pellentesque arcu. Ut tempus
              purus at lorem. Nam quis nulla. Aenean placerat. Mauris suscipit,
              ligula sit amet pharetra semper, nibh ante cursus purus, vel
              sagittis velit mauris vel metus. Fusce tellus. Praesent id justo
              in neque elementum ultrices. Sed ut perspiciatis unde omnis iste
              natus error sit voluptatem accusantium doloremque laudantium,
              totam.
            </p>
          </div>
          <div className="col col-12 col-6-md">
            <p
              ref={textRightRef}
              className={`aboutus__text-right ${
                textRightInView ? "in-view" : ""
              }`}
            >
              architecto beatae vitae dicta sunt explicabo. Nulla est. Curabitur
              bibendum justo non orci. Aenean placerat. Praesent in mauris eu
              tortor porttitor accumsan. Maecenas libero. Phasellus enim erat,
              vestibulum vel, aliquam a, posuere eu, velit. Etiam commodo dui
              eget wisi. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat
              eu, orci. Nemo enim ipsam voluptatem.
            </p>
          </div>
        </div>
        <div
          ref={buttonRef}
          className={`row row--center aboutus__btn-wrapper ${
            buttonInView ? "in-view" : ""
          }`}
        >
          <Button
            onBtnClick={() => history.push("/designers")}
            text="Co dalšího se šušká"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
