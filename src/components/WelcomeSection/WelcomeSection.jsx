import Logo from "../Logo/Logo";

const WelcomeSection = () => (
  <section>
    <Logo />
    <h2>Welcome to Tracker App</h2>
    <h1>Track your water intake easily!</h1>
    <div>
      <a href="/signup">Try Tracker</a>
      <a href="/signin">Sign In</a>
    </div>
  </section>
);

export default WelcomeSection;
