import Logo from '../Images/Logo.png';
import video from '../Images/video.png';
import mobile from '../Images/mobile.png';
import lantern from '../Images/lantern.png';
import Tasbeeh from '../Images/Tasbeeh.png';
import left from '../Images/left.png';
import sulwan from '../Images/Devices.svg';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
function ComponentName() {
  return (
    <div className=''>
  <header className='flex  items-center justify-between p-5 '>
    <img src={Logo}/>
    <div className='flex gap-10 justify-between  text-neutral500 font-thin'>
    <p className='font-thin'> DownloadExtension</p>
     <p  className='font-thin'>What we do</p>
     <p  className='font-thin'> Our up Coming App</p>
    </div>
  <button className='bg-primary text-white py-3 px-5 rounded-md '>Join our community</button>
    </header>


    <div className='flex items-center flex-col mt-20 '>
    <p className='text-sm text-paragraph'> A PLATFORM FOR OUR SPIRITUAL JOURNEY</p>
    <h1 className='text-6xl font-bold w-50' >inspiring a deeper <br /> connection with Allah</h1>
    <p className='text-sm text-paragraph'>Are you ready to elevate your browsing experience By earning reward as you go by you day</p>
   <div className=' flex mt-7 ' >
      <button  className='bg-extension text-white p-2 rounded-md w-189'>Download Extension</button>
      <button  className='border border-neutral300 text-black p-2 rounded-md  ml-5 flex'>join  App Waiting List
      <FavoriteBorderOutlinedIcon/>
      </button>
      </div>
  
  </div>
 
 <div className='h-579 bg-video mt-20 flex justify-center items-center'>
  <img src={video} />
</div>
    <div className='flex items-center flex-col mt-10 '>
   <h1 className='text-4xl'> Empowering your spiritual growth.</h1>
   <p  className=' text-neutral500 mt-5'>Sulwan is a unique platform that is specifically designed to help Muslims deepen their connection with Allah and enhance their spiritual practice. </p>
    

    <div className='flex items-center justify-between  p-10 gap-36'>
      <div className='flex items-center flex-col gap-3'> 
        <img src={mobile} />
        <h3 className='font-bold text-1xl'>mobile</h3>
        <p className=' w-250 text-neutral500'> Our App sends regular reminders and notifications throughout the day, so that you can keep your tongues moist with the remembrance of Allah.</p>
      </div>

      <div className='flex items-center flex-col gap-3'> 
        <img src={lantern} />
        <h3 className='font-bold text-1xl'>lantern</h3>
        <p className='w-250 text-neutral500'> Join a community of like-minded individuals who can offer support and encouragement along the way..</p>
      </div>
      
      <div className='flex items-center flex-col gap-3'>  
        <img src={Tasbeeh} />
        <h3 className='font-bold text-1xl'>Tasbeeh</h3>
        <p className='w-250 text-neutral500'>  A browser extension provides a new Dhikr reminder with each new tab that is opened..</p>
      </div>
    </div>



    <div className='flex items-center mt-20 justify-between gap-10'>
      <div>
      <h1 className='text-base font-medium'>“As a Creative Developer Sulwan’s extension has helped me keep my tongue moist and also earn hassanat while working.”</h1>
     <h3 className='text-xs font-medium'>Habib Hassan</h3>
     <p className='text-neutral500 text-xs'> Lead developer, Studio Infinitus</p>
     </div>
   
   <button className='bg-leftBtn p-4 rounded-full '> <img src={left} /></button>
    </div>
  
   </div>
   <div className=''>
   <div className='relative  h-700 '>
   
      <img src={sulwan}  className='absolute top-20 '/>
      <div className='absolute top-60  left-96 mt-20' > 
        <h1 className='text-3xl font-bold text-neutralbold w-856' >Introducing our <span className='text-extension'>revolionary</span> App-Redefining the <br /> Way you <span className='text-extension'> Connect</span>  With Your Phone </h1>
        <p className='text-base mt-3  text-neutral500'>With our mobile Application, you'll delve into a world of diverse and meaningful dhikr, fostering <br />a deeper connection with your Allah (S.W.T) and bringing tranquility to your heart and mind.</p>
        </div>
    </div>  
  
      <div className='flex items-centet, justify-evenly h-700'>
        <div className='w-523'>
        <h1 className='text-3xl font-bold text-neutralbold w-856'>Stay up to date with our <span className='text-extension'>newsletters</span></h1>
        <p className='text-base mt-3  text-neutral500'>Our newsletters are tailored to keep you connected with the latest advancements in the app, along with heartwarming stories of how Sulwan is transforming lives within the Muslim Ummah. Don't miss out on this golden opportunity to deepen your spiritual journey and stay in the loop with all things Sulwan.
        </p>
        </div>
 
     <form className='flex flex-col'>
     <div className='flex flex-col'>
        <label>Name</label>
        <input
  type="text"
  placeholder='Enter Your Full Name'
  className='border-b-2 border-neutral300 mt-1 py-3 w-523 '
/>
      </div>

      <div className='flex flex-col mt-5'>
        <label>Email</label>
        <input
  type="text"
  placeholder='example@email.com'
  className='border-b-2 border-neutral300 mt-1 py-3 w-523 '/>
      </div>
     <button className='w-523 rounded-lg p-1 bg-primary text-white mt-5'> submit</button>
     <p className='text-sm text-neutral500 text-center mt-2 '>Your data is in safe hands. <span className=' text-primary border-b-2'>Privacy policy</span></p>
     </form>      
    
      </div>
      
      <div className='flex items-center justify-center h-300 flex-col  '>
      <h1 className='text-neutralbold font-bold text-xl  mb-3'>Give us a follow on twitter</h1>
      <p className='text-neutral500 text-sm '>Deepen your connection with Allah and enhance your spiritual practice in a meaningful and sustainable way.
     
      </p>
      <button className='  w-112  p-2 bg-primary text-white mt-5'>follow us</button>
     </div>
   
</div>


    </div>
  )
}

export default ComponentName;
