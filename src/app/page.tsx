"use client";

import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navigation/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import PatternTokenomics from '@/components/sections/layouts/tokenomics/PatternTokenomics';
import FooterLogoEmphasisBackgroundGradient from '@/components/footer/FooterLogoEmphasisBackgroundGradient';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 1, textAnimation: "slide" }}>
      <NavbarLayoutFloatingOverlay
        logoSrc="/images/logo.svg"
        logoWidth={150}
        logoHeight={50}
        navItems={[{ name: "Hero", id: "hero" }, { name: "About", id: "about" }, { name: "How to Buy", id: "how-to-buy" }, { name: "Tokenomics", id: "tokenomics" }, { name: "Footer", id: "footer"}]}
        buttonText="Buy Giggle"
        onButtonClick={() => { /* Handle click */ }}
      />
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <BillboardHero title="Welcome to GiggleCoin" subtitle="The playful cryptocurrency that brings joy!" />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <CtaAbout title="About GiggleCoin" descriptions={["GiggleCoin is a light-hearted, cryptocurrency designed to spread joy and laughter.", "Join our community and be part of the giggles!"]} />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D title="How to Buy GiggleCoin" steps={[{title: "Step 1", description: "Create a wallet", image: "/images/placeholder1.avif", position: "left", isCenter: false}, {title: "Step 2", description: "Purchase GiggleCoin", image: "/images/placeholder2.avif", position: "center", isCenter: true}, {title: "Step 3", description: "Start giggling!", image: "/images/placeholder3.avif", position: "right", isCenter: false}]} />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <PatternTokenomics title="GiggleCoin Tokenomics" description="Our tokenomics are designed to be user-friendly and transparent!" kpiItems={[{ value: "1M", description: "Total Supply", icon: LucideIcon }, { value: "600K", description: "Circulating Supply", icon: LucideIcon }]} />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasisBackgroundGradient logoSrc="/images/logo.svg" logoAlt="GiggleCoin Logo" logoText="GiggleCoin" items={[{ label: "Privacy Policy", onClick: () => { /* Handle click */ } }, { label: "Contact Us", onClick: () => { /* Handle click */ } }, { label: "About Us", onClick: () => { /* Handle click */ }}]} />
      </div>
    </SiteThemeProvider>
  );
}