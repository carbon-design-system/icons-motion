import React, { useState } from 'react'
import * as icons from '@carbon/icons-motion'
import '@carbon/icons-motion/dist/index.css'

const LottieSection = () => {

  const [cleanLottieAnimating, setCleanLottieAnimating] = useState(null)
  const [cropLottieAnimating, setCropLottieAnimating] = useState(null)
  const [exploreLottieAnimating, setExploreLottieAnimating] = useState(null)
  // const [asleepToggleOn, setAsleepToggleOn] = useState(null)
  // const [asleepAwakeToggleOn, setAsleepAwakeToggleOn] = useState(null)
  // const [asleepToggleOn, setAsleepToggleOn] = useState(null)
  // const [asleepAwakeToggleOn, setAsleepAwakeToggleOn] = useState(null)
  // const [asleepToggleOn, setAsleepToggleOn] = useState(null)
  // const [asleepAwakeToggleOn, setAsleepAwakeToggleOn] = useState(null)
  // const [asleepToggleOn, setAsleepToggleOn] = useState(null)
  // const [asleepAwakeToggleOn, setAsleepAwakeToggleOn] = useState(null)
  // const [asleepToggleOn, setAsleepToggleOn] = useState(null)

  return (
    <section className='icon-section'>
      <div className='bx--grid'>
        <div className='bx--row'>
        	<h2>Lottie events</h2>
        	<ul className='bx--row icon-tiles-grid'>
        		
        		<li className='lottie-icon-tile'
              	onClick={() => setCleanLottieAnimating(true)}
          		>
          		<h3>Clean</h3>
        			<icons.CleanLottieEvent  width={32} height={32} toggleOn={cleanLottieAnimating} loop={false}/>
        		</li>

        		<li className='lottie-icon-tile'
              	onClick={() => setCropLottieAnimating(true)}
          		>
          		<h3>Crop</h3>
        			<icons.CropLottieEvent  width={32} height={32} toggleOn={cropLottieAnimating} loop={false}/>
        		</li>

            <li className='lottie-icon-tile'
                onClick={() => setExploreLottieAnimating(true)}
              >
              <h3>Explore</h3>
              <icons.ExploreLottieEvent  width={32} height={32} toggleOn={exploreLottieAnimating} loop={false}/>
            </li>

       {/*     <li className='lottie-icon-tile'
                onClick={() => setAsleepAwakeToggleOn(!asleepAwakeToggleOn)}
              >
              <h3>Filter</h3>
              <icons.FilterLottieEvent  width={32} height={32} toggleOn={asleepAwakeToggleOn} loop={false}/>
            </li>

             <li className='lottie-icon-tile'
                onClick={() => setAsleepAwakeToggleOn(!asleepAwakeToggleOn)}
              >
              <h3>FilterReset</h3>
              <icons.FilterResetLottieEvent  width={32} height={32} toggleOn={asleepAwakeToggleOn} loop={false}/>
            </li>

            <li className='lottie-icon-tile'
                onClick={() => setAsleepAwakeToggleOn(!asleepAwakeToggleOn)}
              >
              <h3>Globe</h3>
              <icons.GlobeLottieEvent  width={32} height={32} toggleOn={asleepAwakeToggleOn} loop={false}/>
            </li>

             <li className='lottie-icon-tile'
                onClick={() => setAsleepAwakeToggleOn(!asleepAwakeToggleOn)}
              >
              <h3>Magic wand</h3>
              <icons.MagicWandLottieEvent  width={32} height={32} toggleOn={asleepAwakeToggleOn} loop={false}/>
            </li>
            
             <li className='lottie-icon-tile'
                onClick={() => setAsleepAwakeToggleOn(!asleepAwakeToggleOn)}
              >
              <h3>Model</h3>
              <icons.ModelLottieEvent  width={32} height={32} toggleOn={asleepAwakeToggleOn} loop={false}/>
            </li>

            <li className='lottie-icon-tile'
                onClick={() => setAsleepAwakeToggleOn(!asleepAwakeToggleOn)}
              >
              <h3>Recently viewed</h3>
              <icons.RecentlyViewedLottieEvent  width={32} height={32} toggleOn={asleepAwakeToggleOn} loop={false}/>
            </li>

            <li className='lottie-icon-tile'
                onClick={() => setAsleepAwakeToggleOn(!asleepAwakeToggleOn)}
              >
              <h3>Reply</h3>
              <icons.ReplyLottieEvent  width={32} height={32} toggleOn={asleepAwakeToggleOn} loop={false}/>
            </li>

             <li className='lottie-icon-tile'
                onClick={() => setAsleepAwakeToggleOn(!asleepAwakeToggleOn)}
              >
              <h3>Reply all</h3>
              <icons.ReplyAllLottieEvent  width={32} height={32} toggleOn={asleepAwakeToggleOn} loop={false}/>
            </li>

            <li className='lottie-icon-tile'
                onClick={() => setAsleepAwakeToggleOn(!asleepAwakeToggleOn)}
              >
              <h3>Scan alt</h3>
              <icons.ScanAltLottieEvent  width={32} height={32} toggleOn={asleepAwakeToggleOn} loop={false}/>
            </li>

            <li className='lottie-icon-tile'
                onClick={() => setAsleepAwakeToggleOn(!asleepAwakeToggleOn)}
              >
              <h3>View</h3>
              <icons.ViewLottieEvent  width={32} height={32} toggleOn={asleepAwakeToggleOn} loop={false}/>
            </li>
*/}
	       	</ul>
		    </div>
	    </div>
  	</section>
  )
}

export default LottieSection
