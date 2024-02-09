import React, { useState } from 'react'
import * as icons from '@carbon/icons-motion'
import '@carbon/icons-motion/dist/index.css'

const LottieSection = () => {

  const [asleepAwakeToggleOn, setAsleepAwakeToggleOn] = useState(null)
  const [asleepToggleOn, setAsleepToggleOn] = useState(null)
  const [carouselToggleOn, setCarouselToggleOn] = useState(null)
  const [favoriteToggleOn, setFavoriteToggleOn] = useState(null)
	const [gridListToggleOn, setGridListToggleOn] = useState(null)
	const [lightToggleOn, setLightToggleOn] = useState(null)
	const [lockUnlockToggleOn, setLockUnlockToggleOn] = useState(null)
	const [lockUnlockTwoToggleOn, setLockUnlockTwoToggleOn] = useState(null)
	const [notificationNewToggleOn, setNotificationNewToggleOn] = useState(null)
	const [notificationOnOffToggleOn, setNotificationOnOffToggleOn] = useState(null)
	const [starToggleOn, setStarToggleOn] = useState(null)
	const [viewOnOffToggleOn, setViewOnOffToggleOn] = useState(null)

  return (
    <section className='icon-section'>
      <div className='bx--grid'>
        <div className='bx--row'>
        	<h2>Lottie toggles</h2>
        	<ul className='bx--row icon-tiles-grid'>
        		
        		<li className='lottie-icon-tile'
              	onClick={() => setAsleepAwakeToggleOn(!asleepAwakeToggleOn)}
          		>
          		<h3>Asleep / awake</h3>
        			<icons.AsleepAwakeLottie  width={32} height={32} toggleOn={asleepAwakeToggleOn} loop={false}/>
        		</li>

        		<li className='lottie-icon-tile'
              	onClick={() => setAsleepToggleOn(!asleepToggleOn)}
          		>
          		<h3>Asleep</h3>
        			<icons.AsleepLottie  width={32} height={32} toggleOn={asleepToggleOn} loop={false}/>
        		</li>

        		<li className='lottie-icon-tile'
              	onClick={() => setCarouselToggleOn(!carouselToggleOn)}
          		>
          		<h3>Carousel vertical / horizontal</h3>
        			<icons.CarouselLottie  width={32} height={32} toggleOn={carouselToggleOn} loop={false}/>
        		</li>

        		<li className='lottie-icon-tile'
      			  	onClick={() => setFavoriteToggleOn(!favoriteToggleOn)}
        			>
        			<h3>Favorite</h3>
							<icons.FavoriteLottie  width={32} height={32} toggleOn={favoriteToggleOn} loop={false}/>
          	</li>
           
          	<li className='lottie-icon-tile'
      			  onClick={() => setGridListToggleOn(!gridListToggleOn)}
        		>
        			<h3>Grid / list</h3>
							<icons.GridListLottie  width={32} height={32} toggleOn={gridListToggleOn} loop={false}/>
          	</li>
           
        		<li className='lottie-icon-tile'
      			  onClick={() => setLightToggleOn(!lightToggleOn)}
        		>
        			<h3>Light</h3>
							<icons.LightLottie  width={32} height={32} toggleOn={lightToggleOn} loop={false}/>
          	</li>
           
        		<li className='lottie-icon-tile'
      			  onClick={() => setLockUnlockToggleOn(!lockUnlockToggleOn)}
        		>
        			<h3>Lock / unlock</h3>
							<icons.LockUnlockLottie  width={32} height={32} toggleOn={lockUnlockToggleOn} loop={false}/>
          	</li>
           
						<li className='lottie-icon-tile'
      			  onClick={() => setLockUnlockTwoToggleOn(!lockUnlockTwoToggleOn)}
        		>
        			<h3>Lock / unlock alt</h3>
							<icons.LockUnlockTwoLottie width={32} height={32} toggleOn={lockUnlockTwoToggleOn} loop={false}/>
          	</li>

          	 <li className='lottie-icon-tile'
      			  onClick={() => setNotificationNewToggleOn(!notificationNewToggleOn)}
        		>
        			<h3>Notification new</h3>
							<icons.NotificationNewLottie width={32} height={32} toggleOn={notificationNewToggleOn} loop={false}/>
          	</li>

             <li className='lottie-icon-tile'
      			  onClick={() => setNotificationOnOffToggleOn(!notificationOnOffToggleOn)}
        		>
        			<h3>Notification on / off</h3>
							<icons.NotificationOnOffLottie width={32} height={32} toggleOn={notificationOnOffToggleOn} loop={false}/>
          	</li>

          	<li className='lottie-icon-tile'
      			  onClick={() => setStarToggleOn(!starToggleOn)}
        		>
        			<h3>Star</h3>
							<icons.StarLottie width={32} height={32} toggleOn={starToggleOn} loop={false}/>
          	</li>

            <li className='lottie-icon-tile'
      			  onClick={() => setViewOnOffToggleOn(!viewOnOffToggleOn)}
        		>
        			<h3>View on / off</h3>
							<icons.ViewOnOffLottie width={32} height={32} toggleOn={viewOnOffToggleOn} loop={false}/>
          	</li>
	       	</ul>
		    </div>
	    </div>
  	</section>
  )
}

export default LottieSection
