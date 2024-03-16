import logo from './bowling.png'

function Header() {
    return (
      <div>
        <header className='row navbar navbar-dark bg-white'>
            <div className='col-3'>
            <img src={logo} className='logo' alt='logo' style={{ width: '100px' }} /> 
            </div>
            <div className='col-9 subtitle' >
                <h1 style={{ textAlign: 'right' }}>Bowler Crew Info</h1>
            </div>
        </header> 
      </div>
    );
  }

export default Header;