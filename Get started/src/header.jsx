const Header = () => {
  return <h1>header component</h1>;
};
const Footer = () => {
  return <h1>header component</h1>;
};

const Hero = () => {
  return <span>header component</span>;
};
const Layout = () => {
  return (
    <div>
      <Header />
      <main>
           <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;