import spaceBetween from '../images/spacebetween.png';
import fitnessaImage from '../images/fitnessaimg.png';
import liftMeUpImage from '../images/liftmeup.png';
import WASD from '../images/wasd.png';
import fitnessaWhite from '../images/fitnessa1.png';
import numinousOne from '../images/numinous1.png';

function Portfolio() {
  return (
    <>
      <hr />
      <h1 style={{ textAlign: 'center' }}>Projects</h1>
      <div class='card-group'>
        <div
          class='card m-5 border border-2 rounded-1'
          style={{
            backgroundColor: 'rgba(17, 17, 17, 1)',
          }}
        >
          <div class='card-body'>
            <h5 class='card-title'>Space Between 2</h5>
            <p class='card-text'>
              My game project, designed with vanilla Javascript. Example of DOM
              manipulation, using class constructors, pushing images into an
              array, using velocity, math random math floor, adjusted frames so
              each level it gets harder and also attached event listener to
              listen to our WASD press down
            </p>
          </div>
          <div class='card-footer'>
            <a
              href='https://juliangabrielrivera.github.io/SpaceBetween/'
              className='btn btn-light buttonStyles '
            >
              Click Me!
            </a>
          </div>
        </div>
        <hr />
        <div
          class='card  m-5 border border-2 rounded-1'
          style={{
            backgroundColor: 'rgba(17, 17, 17, 1)',
          }}
        >
          <div class='card-body'>
            <h5 class='card-title'>Fitnessa</h5>
            <p class='card-text'>
              Full-Stack web app made to make it easy to find other like-minded
              people in their area who are into fitness or trying to lead a more
              healthy lifestyle so that they could match to go to the gym and
              help each other on the journey. Each user has a profile with the
              ability to hit like and unlike other users profiles when they
              click the heart icons and post comments about them to tell them or
              everyone else what kind of person they were.
            </p>
          </div>
          <div class='card-footer'>
            <a
              href='https://fitnessaapp.herokuapp.com/home'
              className='btn btn-light buttonStyles'
            >
              Click Me!
            </a>
          </div>
        </div>
        <hr />
        <div
          class='card m-5 border border-2 rounded-1'
          style={{
            backgroundColor: 'rgba(17, 17, 17, 1)',
          }}
        >
          <div class='card-body'>
            <h5 class='card-title'>Numinous</h5>
            <p class='card-text'>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
          </div>
          <div class='card-footer'>
            <a
              href='https://fitnessaapp.herokuapp.com/home'
              className='btn btn-light buttonStyles'
            >
              Click Me!
            </a>
          </div>
        </div>
      </div>
      {/* <div className='card-group-container d-lg-flex'>
        <div
          className='card border border-2 m-5 '
          style={{
            width: '25rem',

            backgroundColor: '#4d1426',
          }}
        >
          <img src={WASD} className='card-img-top p-3' alt='...' />
          <div className='card-body'>
            <h5 className='card-title'>HTML, CSS & Javascript</h5>
            <p className='card-text'>
              My game project, designed with vanilla Javascript. Example of DOM
              manipulation, using class constructors, pushing images into an
              array, using velocity, math random math floor, adjusted frames so
              each level it gets harder and also attached event listener to
              listen to our WASD press down
            </p>

            <a
              href='https://juliangabrielrivera.github.io/SpaceBetween/'
              className='btn btn-light '
            >
              Click Me!
            </a>
          </div>
        </div>
        <hr />
        <div
          className='card border border-2 m-5 g-col-6 g-col-md-4
            '
          style={{
            width: '25rem',

            backgroundColor: '#4d1426',
          }}
        >
          <img src={fitnessaWhite} className='card-img-top p-3' alt='...' />
          <div className='card-body'>
            <h5 className='card-title'>
              HTML, CSS, Javascript, Mongoose, MongoDB, Axios, Bootstrap,
              Handlebars.js, Express.js, & Node.js
            </h5>
            <p className='card-text'>
              Full-Stack web app made to make it easy to find other like-minded
              people in their area who are into fitness or trying to lead a more
              healthy lifestyle so that they could match to go to the gym and
              help each other on the journey. Each user has a profile with the
              ability to hit like and unlike other users profiles when they
              click the heart icons and post comments about them to tell them or
              everyone else what kind of person they were.
            </p>

            <a
              href='https://fitnessaapp.herokuapp.com/home'
              className='btn btn-light'
            >
              Click Me!
            </a>
          </div>
        </div>
        <hr />

        <div
          className='card border border-2 m-5 g-col-6 g-col-md-4
            '
          style={{
            width: '25rem',

            backgroundColor: '#4d1426',
          }}
        >
          <img src={numinousOne} className='card-img-top p-3' alt='...' />
          <div className='card-body'>
            <h5 className='card-title'>
              HTML,CSS, Javascript , Mongoose, MongoDB, AXIOS, Bootstrap, React,
              Express.js, Node.js.
            </h5>
            <p className='card-text'>
              Has two roles, one admin and one guest. Only admins can create new
              places and only admins can delete places. If guests want more info
              they have to sign up in order to see more details. Each place has
              a like/dislike and you can post comments on the details page to
              tell everyone how you felt about it. Each user has option to edit
              their profile, and their profiles are pre-populated
            </p>
            <a
              href='https://scintillating-blancmange-d927b0.netlify.app/'
              className='btn btn-light'
            >
              Click Me!
            </a>
          </div>
        </div>
      </div> */}
      {/* <div className='firstContainer'>
        <h2 className='fullStack'>Full Stack Web Developer</h2>
        <hr />

        <img
          src={WASD}
          alt=''
          className='imageSize'
          style={{
            // borderRadius: '50%',
            marginLeft: '5px',
            marginRight: '5px',
            objectFit: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        />

        <h4>HTML, CSS & Javascript </h4>
        <p>
          My game project, designed with vanilla Javascript. Example of DOM
          manipulation, using class constructors, pushing images into an array,
          using velocity, math random math floor, adjusted frames so each level
          it gets harder and also attached event listener to listen to our WASD
          press down{' '}
        </p>
      </div>
      <div className='secondContainer'>
        <h2 className='fullStack'>Full Stack Web Developer</h2>
        <hr />

        <img
          src={fitnessaImage}
          alt=''
          className='imageSize'
          style={{
            marginLeft: '5px',
            marginRight: '5px',
            objectFit: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        />

        <h4>
          Fitnessa app made with HTML, CSS, Javascript, Mongoose, MongoDB,
          Axios, Bootstrap, Handlebars.js, Express.js, & Node.js{' '}
        </h4>
        <p>
          My game project, designed with vanilla Javascript. Example of DOM
          manipulation, using class constructors, pushing images into an array,
          using velocity, math random math floor, adjusted frames so each level
          it gets harder and also attached event listener to listen to our WASD
          press down{' '}
        </p>
      </div>
      <div class="card" style="width: 18rem;">
  */}
    </>
  );
}

export default Portfolio;
