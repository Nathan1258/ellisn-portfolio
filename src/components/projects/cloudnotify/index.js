import React from "react";
import styled from "styled-components";

const CloudNotifyWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  padding-top: 5%;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "CascadiaCode";
  font-size: 3rem;
`;

const Subtitle = styled.p`
  width: 70%;
  text-align: center;
  font-weight: bold;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "CascadiaCode";

  @media (max-width: 850px) {
    width: auto;
  }
`;

const Description = styled.p`
  width: 90%;
  text-align: center;
  margin: auto;
  display: flex;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
  font-family: "CascadiaCode";

  @media (max-width: 850px) {
    width: auto;
  }
`;

const Image = styled.img`
  display: flex;
  margin: auto;
  width: 240px;
  border-radius: 25px;
`;

const AppStoreImage = styled.img`
  display: flex;
  margin: auto;
  margin-bottom: 15px;
  width: 180px;
`;

export function CloudNotify(props) {
  const isDarkTheme = true;

  return (
    <CloudNotifyWrapper>
      <Image src="https://is3-ssl.mzstatic.com/image/thumb/Purple112/v4/06/ec/e7/06ece725-beac-612d-0ef1-8a12bbb998a2/AppIcon-0-1x_U007emarketing-0-5-0-85-220.png/460x0w.webp" />
      <Title>Cloud Notify</Title>
      <a href="https://apps.apple.com/gb/app/cloud-notify/id154995556">
        <AppStoreImage
          src={
            "https://static.ellisn.com/ellisn/images/Download_on_App_Store/Black_lockup/SVG/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
          }
        />
      </a>
      <Subtitle>
        Cloud Notify is an innovative application that I developed in response
        to a distinct personal challenge. Recognizing the need for a streamlined
        solution, I sought to create a user-friendly platform that would enable
        me to effortlessly receive timely notifications on my mobile device.
        This intuitive application serves the purpose of alerting me to
        significant events, including Docker builds, Portainer/Watchtower
        events, and updates regarding my home projects, which are actively
        running on devices such as my Raspberry Pi and servers.
      </Subtitle>

      <Description>
        Primarily developed as a personal endeavor to cater to my specific
        requirements, Cloud Notify came into existence when I realized the
        absence of viable alternatives to fulfill its intended functionality. In
        order to establish a robust backend architecture, I opted to leverage
        Google's Cloud Platform. By leveraging this platform, Cloud Notify
        seamlessly facilitates the delivery of notifications to users' mobile
        devices through a straightforward process. The application operates by
        executing a designated HTTP link for each notification. This link
        encompasses essential information such as the notification's title,
        message, and an optional hyperlink for users to follow upon interacting
        with the notification on their devices. To construct the notification
        link, the app incorporates a purpose-built link builder mechanism, which
        also integrates a unique secret token specific to each user, ensuring
        secure and personalized notification delivery.
        <br />
        <br />
        The inherent design of Cloud Notify offers seamless integration
        capabilities, encompassing a broad spectrum of integration
        possibilities, ranging from events intricately embedded within code to
        the utilization of webhooks derived from various platforms and services.
        Since its release on the Apple App Store (with the forthcoming
        availability on Google Play), Cloud Notify has witnessed an overwhelming
        response, garnering thousands of sign-ups. Notably, its impressive
        reception has extended beyond individual users, with notable
        institutions, such as a school, reaching out to explore potential
        enhancements and collaborative opportunities. To sustain the robust
        backend infrastructure and support future endeavors, Cloud Notify
        incorporates a one-time in-app service priced at £4.99. This premium
        feature empowers users with unlimited notification capabilities,
        effectively countering spam concerns while also providing a means to
        financially support the continued development of the backend
        infrastructure and other ongoing projects. This unique approach not only
        ensures a seamless user experience but also enables the sustainable
        growth and evolution of Cloud Notify, fostering its ability to deliver
        value-added features and improvements in the future. By offering a
        comprehensive solution that balances user convenience, spam prevention,
        and backend funding, Cloud Notify solidifies its position as a dynamic
        platform that caters to user needs while facilitating ongoing innovation
        and development.
      </Description>
    </CloudNotifyWrapper>
  );
}
