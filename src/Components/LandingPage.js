import React from "react";
import {
  Hero,
  CallToAction,
  ScrollDownIndicator,
  Checklist,
  Flex,
  Feature,
  Phone,
  PricingTier,
} from "react-landing-page";
import "../App.css";
import {
  Zoom,
  Fade,
  Bounce,
  Reveal,
  Slide,
  Rotate,
  LightSpeed,
} from "react-reveal";
import { SmoothProvider } from "react-smooth-scrolling";

function LandingPage() {
  return (
    <SmoothProvider className="div" skew={true}>
      {/* Header */}
      <div className="nav-div">
        <ul className="navbar">
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
        </ul>
      </div>
      {/* Hero */}
      <Hero
        color="black"
        bg="white"
        backgroundImage="https://source.unsplash.com/jxaj-UrzQbc/1600x900"
      >
        <Slide left>
          <h1>App Name</h1>
        </Slide>
        <Slide right>
          <h2>Some more words about app</h2>
        </Slide>
        <CallToAction href="/getting-started" mt={3}>
          Get Started
        </CallToAction>
        <ScrollDownIndicator />
      </Hero>
      {/* Checklist */}
      <Checklist
        children={["Open Source", "React best practices", "Practical API"]}
      />
      {/* Hero */}
      <Hero
        color="white"
        bg="purple"
        backgroundImage="https://source.unsplash.com/CQB5J0hZC5U/1600x900"
      >
        <Flex flexWrap="wrap" alignItems="center">
          <Flex alignItems="flex-start" width={[1, 1 / 2]} p={3}>
            <Phone
              src="https://via.placeholder.com/187x406"
              notch
              style={{ transform: "translate(32px, 64px)" }}
            />
            <Phone
              src="https://via.placeholder.com/205x412"
              color="white"
              style={{ transform: "translate(-32px, 0px)" }}
            />
          </Flex>
          <Flex
            width={[1, 1 / 2]}
            alignItems="center"
            flexDirection="column"
            p={3}
          >
            <Zoom>
              <h1>Mobile App Hero</h1>
            </Zoom>
            <Fade left>
              <h4 fontSize={[2, 3]}>2 Screenshots & links</h4>
            </Fade>
            <Flex mt={3} flexWrap="wrap" justifyContent="center">
              <CallToAction bg="black" mb={2}>
                 App store
              </CallToAction>
              <CallToAction bg="black">Google Play</CallToAction>
            </Flex>
          </Flex>
        </Flex>
        <ScrollDownIndicator />
      </Hero>
      {/* Features */}
      <Flex flexWrap="wrap" justifyContent="center">
        <Feature icon="👋" description="What your users see first">
          Hero
        </Feature>
        <Feature icon="🔥" description="What your app can do">
          Features
        </Feature>
        <Feature icon="📩" description="How to keep in touch">
          Sign Up
        </Feature>
      </Flex>
      {/* Pricing */}
      <Flex
        justifyContent="space-around"
        flexDirection="column"
        alignItems="center"
      >
        <h1 textAlign="center">Pricing</h1>
        <PricingTier
          bg="silver"
          tierName="Basic"
          price="Free"
          billingType="forever"
          sellingPoints={["🔥 Full feature set", "📑 Comprehensive docs"]}
        >
          <CallToAction bg="black" width={0.8} mt="auto">
            Download
          </CallToAction>
        </PricingTier>

        <PricingTier
          bg="gold"
          tierName="Premium"
          price="$99"
          billingType="Yearly"
          sellingPoints={[
            "🔥 Full feature set",
            "📑 Comprehensive docs",
            "😌 Future updates",
            "👩‍⚖️ Commercial license",
          ]}
        >
          <CallToAction bg="black" width={0.8}>
            Buy now
          </CallToAction>
        </PricingTier>
      </Flex>
      {/* Footer */}
      <Flex is="footer" alignItems="center" p={3}>
        <a children="Link 1" href="#" />
        <a children="Link 2" href="#" />
        <span>© Brand, 2018</span>
      </Flex>
    </SmoothProvider>
  );
}

export default LandingPage;
