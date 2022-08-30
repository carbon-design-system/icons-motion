import React, { useState } from 'react'
import * as icons from 'carbon-10-icon-animations'

const NavigationSection = () => {
	const [addToSubtractAnimating, setAddToSubtractAnimating] = useState(false)
	const [arrowUpAnimating, setArrowUpAnimating] = useState(false)
	const [chevronDownAnimating, setChevronDownAnimating] = useState(false)
	const [chevronUpAnimating, setChevronUpAnimating] = useState(false)
	const [downToBottomAnimating, setDownToBottomAnimating] = useState(false)
	const [draggableAnimating, setDraggableAnimating] = useState(false)
	const [homeAnimating, setHomeAnimating] = useState(false)
	const [menuToCloseAnimating, setMenuToCloseAnimating] = useState(false)
	const [overflowMenuHorizontalAnimating, setOverflowMenuHorizontalAnimating] =
		useState(false)
	const [pageFirstAnimating, setPageFirstAnimating] = useState(false)
	const [pageLastAnimating, setPageLastAnimating] = useState(false)
	const [selectWindowAnimating, setSelectWindowAnimating] = useState(false)
	const [switcherToCloseAnimating, setSwitcherToCloseAnimating] =
		useState(false)
	const [upToTopAnimating, setUpToTopAnimating] = useState(false)
	const [zoomInAreaAnimating, setZoomInAreaAnimating] = useState(false)

	return (
		<section>
			<h2>Navigation</h2>
			<div className='bx--grid'>
				<ul className='bx--row'>
					<li
						className='icon-tile'
						onMouseEnter={() => setAddToSubtractAnimating(true)}
						onMouseLeave={() => setAddToSubtractAnimating(false)}
					>
						<h3>Add to subtract</h3>
						<icons.AddToSubtractMotion
							isAnimating={addToSubtractAnimating}
							size={32}
						/>
					</li>
					<li
						className='icon-tile'
						onMouseEnter={() => setArrowUpAnimating(true)}
						onMouseLeave={() => setArrowUpAnimating(false)}
					>
						<h3>Arrow up</h3>
						<icons.ArrowUpMotion isAnimating={arrowUpAnimating} size={32} />
					</li>
					<li
						className='icon-tile'
						onMouseEnter={() => setChevronDownAnimating(true)}
						onMouseLeave={() => setChevronDownAnimating(false)}
					>
						<h3>Chevron down</h3>
						<icons.ChevronDownMotion
							isAnimating={chevronDownAnimating}
							size={32}
						/>
					</li>
					<li
						className='icon-tile'
						onMouseEnter={() => setChevronUpAnimating(true)}
						onMouseLeave={() => setChevronUpAnimating(false)}
					>
						<h3>Chevron up</h3>
						<icons.ChevronUpMotion isAnimating={chevronUpAnimating} size={32} />
					</li>
					<li
						className='icon-tile'
						onMouseEnter={() => setDownToBottomAnimating(true)}
						onMouseLeave={() => setDownToBottomAnimating(false)}
					>
						<h3>Down to bottom</h3>
						<icons.DownToBottomMotion
							isAnimating={downToBottomAnimating}
							size={32}
						/>
					</li>
					<li
						className='icon-tile'
						onMouseEnter={() => setDraggableAnimating(true)}
						onMouseLeave={() => setDraggableAnimating(false)}
					>
						<h3>Draggable</h3>
						<icons.DraggableMotion isAnimating={draggableAnimating} size={32} />
					</li>
					<li
						className='icon-tile'
						onMouseEnter={() => setHomeAnimating(true)}
						onMouseLeave={() => setHomeAnimating(false)}
					>
						<h3>Home</h3>
						<icons.HomeMotion isAnimating={homeAnimating} size={32} />
					</li>
					<li
						className='icon-tile'
						onMouseEnter={() => setMenuToCloseAnimating(true)}
						onMouseLeave={() => setMenuToCloseAnimating(false)}
					>
						<h3>Menu to close</h3>
						<icons.MenuToCloseMotion
							isAnimating={menuToCloseAnimating}
							size={32}
						/>
					</li>
					<li
						className='icon-tile'
						onMouseEnter={() => setOverflowMenuHorizontalAnimating(true)}
						onMouseLeave={() => setOverflowMenuHorizontalAnimating(false)}
					>
						<h3>Overflow menu horizontal</h3>
						<icons.OverflowMenuHorizontalMotion
							isAnimating={overflowMenuHorizontalAnimating}
							size={32}
						/>
					</li>
					<li
						className='icon-tile'
						onMouseEnter={() => setPageFirstAnimating(true)}
						onMouseLeave={() => setPageFirstAnimating(false)}
					>
						<h3>Page first</h3>
						<icons.PageFirstMotion isAnimating={pageFirstAnimating} size={32} />
					</li>
					<li
						className='icon-tile'
						onMouseEnter={() => setPageLastAnimating(true)}
						onMouseLeave={() => setPageLastAnimating(false)}
					>
						<h3>Page last</h3>
						<icons.PageLastMotion isAnimating={pageLastAnimating} size={32} />
					</li>
					<li
						className='icon-tile'
						onMouseEnter={() => setSelectWindowAnimating(true)}
						onMouseLeave={() => setSelectWindowAnimating(false)}
					>
						<h3>Select window</h3>
						<icons.SelectWindowMotion
							isAnimating={selectWindowAnimating}
							size={32}
						/>
					</li>
					<li
						className='icon-tile'
						onMouseEnter={() => setSwitcherToCloseAnimating(true)}
						onMouseLeave={() => setSwitcherToCloseAnimating(false)}
					>
						<h3>Switcher to close</h3>
						<icons.SwitcherToCloseMotion
							isAnimating={switcherToCloseAnimating}
							size={32}
						/>
					</li>
					<li
						className='icon-tile'
						onMouseEnter={() => setUpToTopAnimating(true)}
						onMouseLeave={() => setUpToTopAnimating(false)}
					>
						<h3>Up to top</h3>
						<icons.UpToTopMotion isAnimating={upToTopAnimating} size={32} />
					</li>
					<li
						className='icon-tile'
						onMouseEnter={() => setZoomInAreaAnimating(true)}
						onMouseLeave={() => setZoomInAreaAnimating(false)}
					>
						<h3>Zoom in area</h3>
						<icons.ZoomInAreaMotion
							isAnimating={zoomInAreaAnimating}
							size={32}
						/>
					</li>
				</ul>
			</div>
		</section>
	)
}

export default NavigationSection
