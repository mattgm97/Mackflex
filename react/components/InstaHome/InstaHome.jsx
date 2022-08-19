import React from "react";
import styles from "./styles.css";
import { InstagramApi } from "../../mock/InstagramApi";
import { SliderLayout } from "vtex.slider-layout";

const InstaHome = () => {
  const slyderConfig = {
    showNavigationArrows: "always",
    showPaginationDots: "never",
    centerMode: "center",
    infinite: false,
    itemsPerPage: {
      desktop: 3,
      tablet: 3,
      phone: 2,
    },
  };

  return (
    <div className={styles.cardInstagram}>
      {/* <div className={styles.containerFollowUs}>
        <p className={styles.tittleFollowUs}>SIGA-NOS</p>
      </div>
      <div className={styles.cardInstagram}>

          {InstagramApi.map(({ img }, index) => (
            <img src={img} key={index} />
          ))}

      </div> */}
      {/* <!-- SnapWidget --> */}
      <script src="https://snapwidget.com/js/snapwidget.js"></script>
      <SliderLayout {...slyderConfig}>
        <iframe
          src="https://snapwidget.com/embed/1006245"
          className="snapwidget-widget"
          allowtransparency="true"
          frameborder="0"
          scrolling="no"
          style={{
            border: "none",
            overflow: "hidden",
            width: "100%",
            height: "14vh",
          }}
        ></iframe>
      </SliderLayout>
    </div>
  );
};

export default InstaHome;
