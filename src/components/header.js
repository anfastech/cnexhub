import logo from '../logo.svg';
import Navbar from './navbar'

export default function Header() {
    return (
        <header className="App-header">
            <Navbar />
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              cNex Hub Template Home Page
            </p>
        </header>
    );
}