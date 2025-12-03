import logo from '../assets/logo.jpg'
import '../style/Header.css';

function Headers() {
  return (
    <div className='header'>
      <h1 className='header_title'>Student Dashboard</h1>
      <img src={logo} className="logo react" alt="React logo" width={104} height={104}/>
 </div>
  );
}

export default Headers;