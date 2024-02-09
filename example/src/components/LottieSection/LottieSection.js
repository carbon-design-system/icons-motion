import React, { useState, useRef, useEffect } from 'react'
import * as icons from '@carbon/icons-motion'
import '@carbon/icons-motion/dist/index.css'
import lottie from "lottie-web";
import styles from './lottie-section.module.scss'


const LottieSection = () => {

  const [toggleOn, setToggleOn] = useState(null)
  
  const [asleepAwakeToggleOn, setAsleepAwakeToggleOn] = useState(null)
  const [asleepToggleOn, setAsleepToggleOn] = useState(null)
  const [carouselToggleOn, setCarouselToggleOn] = useState(null)
  const [favoriteToggleOn, setFavoriteToggleOn] = useState(null)
	const [gridListToggleOn, setGridListToggleOn] = useState(null)
	const [lightToggleOn, setLightToggleOn] = useState(null)
	const [lockUnlockTwoToggleOn, setLockUnlockTwoToggleOn] = useState(null)

  	return (
	    <section className='icon-section'>
	        <div className='bx--grid'>
		        <div className='bx--row'>
		          	<h2>Lottie toggles</h2>
		          	{/*<AnimationTest />*/}
		          	 {/*<div ref={container} id="animation-container"></div>*/}
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
	          			  onClick={() => setToggleOn(!toggleOn)}
	            		>
	            			<h3>Lock / unlock</h3>
										<icons.LockUnlockLottie  width={32} height={32} toggleOn={toggleOn} loop={false}/>
			          	</li>
			           
			  {/*           <li className='lottie-icon-tile'
	          			  onClick={() => setLockUnlockTwoToggleOn(!lockUnlockTwoToggleOn)}
	            		>
	            			<h3>Lock / unlock alt</h3>
										<icons.LockUnlockTwoLottie width={32} height={32} toggleOn={lockUnlockTwoToggleOn} loop={false}/>
			          	</li>
			           */}

			       </ul>
			    </div>
		    </div>
    	</section>
  	)
}

export default LottieSection
