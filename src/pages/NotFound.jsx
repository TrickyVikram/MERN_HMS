import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <>
      <div style={styles.container}>
        <div style={styles.Img}></div>
        <div style={styles.content}>
          <h1 style={styles.H1}>404</h1>
          <h2 style={styles.H2}>Page Not Found ⚠️</h2>
          <p style={styles.p}>We couldn't find the page you are looking for.</p>
          <button onClick={handleBackClick} style={styles.button}>
            Back to Home
          </button>
        </div>
      </div>
    </>
  );
};

// Styles for the page
const styles = {
  container: {
    position: 'relative',
    height: '100vh',
    width: '100%',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Img: {
    position: 'absolute',
    top: '140px',
    left: '0',
    height: '80%', // Set image height to 500px
    width: '100%',  // Set image width to 500px
    backgroundImage: 'url(https://demos.themeselection.com/sneat-mui-nextjs-admin-template/demo-1/images/illustrations/characters-with-objects/13.png)', // Image as background
    backgroundPosition: 'center',
    backgroundSize: 'contain',  // Ensure the full image is shown without cutting off
    backgroundRepeat: 'no-repeat',
    justifyContent: 'center',
    zIndex: -1,
    animation: 'gradient 1s ease infinite', // Background gradient animation
  },

  H1: {
    position: 'relative',
    left: '80px',
    top: '-153px',
    fontSize: '100px',
    fontWeight: 'bold',
    color: 'black', // Black text for the header
  },
  H2: {
    position: 'relative',
    left: '119px',
    top: '-119px',
    color: 'red',
    zIndex: 1,
    justifyContent: 'center',
  },

  p: {
    position: 'relative',
    left: '13px',
    top: '-108px',
    fontSize: '18px',
    marginBottom: '200px',
    color: 'blue', // Blue text for the message
  },

  button: {
    position: 'relative',
    left: '112px',
    top: '-277px',
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: 'rgb(78 57 172)',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  },
};

export default NotFound;
