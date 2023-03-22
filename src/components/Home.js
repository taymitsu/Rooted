import Navbar from "./Navbar";
import SignInConfirmation from "./SignInConfirmation";
import SignOutButton from "./auth/SignOut";

function Home() {
  console.log('home rendered')
  return(
    <div>
      <SignInConfirmation />
      <SignOutButton />
      <Navbar />
    </div>
  );
}

export default Home;
