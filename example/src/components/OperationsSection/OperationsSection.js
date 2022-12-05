import React, { useState } from 'react'
import * as icons from '@carbon/icons-motion'
import '@carbon/icons-motion/dist/index.css'

const OperationsSection = () => {

  const [addCommentAnimating, setAddCommentAnimating] = useState(false)
  const [arrowShiftDownAnimating, setArrowShiftDownAnimating] = useState(false)
  const [arrowsHorizontalAnimating, setArrowsHorizontalAnimating] = useState(false)
  const [arrowsVerticalAnimating, setArrowsVerticalAnimating] = useState(false)
  const [bookmarkAnimating, setBookmarkAnimating] = useState(false)
  const [bookmarkAddAnimating, setBookmarkAddAnimating] = useState(false)
  const [bookmarkFilledAnimating, setBookmarkFilledAnimating] = useState(false)
  const [caretSortAnimating, setCaretSortAnimating] = useState(false)  
  const [caretSortDownAnimating, setCaretSortDownAnimating] = useState(false) 
  const [caretSortUpAnimating, setCaretSortUpAnimating] = useState(false) 
  const [chatAnimating, setChatAnimating] = useState(false)   
  const [chatLaunchAnimating, setChatLaunchAnimating] = useState(false)
  const [chatOffAnimating, setChatOffAnimating] = useState(false)    
  const [chevronMiniAnimating, setChevronMiniAnimating] = useState(false)
  const [chevronSortAnimating, setChevronSortAnimating] = useState(false)
  const [collapseAllAnimating, setCollapseAllAnimating] = useState(false)
  const [connectAnimating, setConnectAnimating] = useState(false)
  const [exploreAnimating, setExploreAnimating] = useState(false)
  const [dragHorizontalAnimating, setDragHorizontalAnimating] = useState(false)
  const [dragVerticalAnimating, setDragVerticalAnimating] = useState(false)
  const [exitAnimating, setExitAnimating] = useState(false)
  const [filterAnimating, setFilterAnimating] = useState(false)
  const [filterEditAnimating, setFilterEditAnimating] = useState(false)
  const [filterRemoveAnimating, setFilterRemoveAnimating] = useState(false)
  const [filterResetAnimating, setFilterResetAnimating] = useState(false)
  const [flagAnimating, setFlagAnimating] = useState(false)
  const [flagFilledAnimating, setFlagFilledAnimating] = useState(false)
  const [imageSearchAnimating, setImageSearchAnimating] = useState(false)
  const [jumpLinkAnimating, setJumpLinkAnimating] = useState(false)
  const [launchAnimating, setLaunchAnimating] = useState(false)
  const [layersAnimating, setLayersAnimating] = useState(false)
  const [loopAnimating, setLoopAnimating] = useState(false)
  const [loginAnimating, setLoginAnimating] = useState(false)
  const [logoutAnimating, setLogoutAnimating] = useState(false)
  const [maximizeAnimating, setMaximizeAnimating] = useState(false)
  const [minimizeAnimating, setMinimizeAnimating] = useState(false)
  const [moveAnimating, setMoveAnimating] = useState(false)
  const [newTabAnimating, setNewTabAnimating] = useState(false)
  const [panHorizontalAnimating, setPanHorizontalAnimating] = useState(false)
  const [panVerticalAnimating, setPanVerticalAnimating] = useState(false)
  const [pinAnimating, setPinAnimating] = useState(false)
  const [pinFilledAnimating, setPinFilledAnimating] = useState(false)
  const [recommendAnimating, setRecommendAnimating] = useState(false)
  const [redoAnimating, setRedoAnimating] = useState(false)
  const [renewAnimating, setRenewAnimating] = useState(false)
  const [repeatAnimating, setRepeatAnimating] = useState(false)
  const [resetAnimating, setResetAnimating] = useState(false)
  const [resetAltAnimating, setResetAltAnimating] = useState(false)
  const [restartAnimating, setRestartAnimating] = useState(false)
  const [reviewAnimating, setReviewAnimating] = useState(false)
  const [sendAnimating, setSendAnimating] = useState(false)
  const [sendAltAnimating, setSendAltAnimating] = useState(false)
  const [sendAltFilledAnimating, setSendAltFilledAnimating] = useState(false)
  const [sendFilledAnimating, setSendFilledAnimating] = useState(false)
  const [tagAnimating, setTagAnimating] = useState(false)
  const [tagEditAnimating, setTagEditAnimating] = useState(false)
  const [tagExportAnimating, setTagExportAnimating] = useState(false)
  const [tagImportAnimating, setTagImportAnimating] = useState(false)
  const [tagGroupAnimating, setTagGroupAnimating] = useState(false)
  const [tagNoneAnimating, setTagNoneAnimating] = useState(false)
  const [translateAnimating, setTranslateAnimating] = useState(false)
  const [undoAnimating, setUndoAnimating] = useState(false)
  const [xAxisAnimating, setXAxisAnimating] = useState(false)
  const [yAxisAnimating, setYAxisAnimating] = useState(false)
  const [zAxisAnimating, setZAxisAnimating] = useState(false)

	return (
		<section className="icon-section">	
			<div className='bx--grid'>
        <div className='bx--row'>
          <h2>Operations</h2>
        </div>
  			<ul className='bx--row'>
          <li
            className='icon-tile'
            onMouseEnter={() => setAddCommentAnimating(true)}
            onMouseLeave={() => setAddCommentAnimating(false)}
          >
            <h3>Add comment</h3>
            <icons.AddCommentMotion 
              isAnimating={addCommentAnimating} 
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setArrowShiftDownAnimating(true)}
            onMouseLeave={() => setArrowShiftDownAnimating(false)}
          >
            <h3>Arrow shift down</h3>
            <icons.ArrowShiftDownMotion
              isAnimating={arrowShiftDownAnimating} 
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setArrowsHorizontalAnimating(true)}
            onMouseLeave={() => setArrowsHorizontalAnimating(false)}
          >
            <h3>Arrows horizontal</h3>
            <icons.ArrowsHorizontalMotion 
              isAnimating={arrowsHorizontalAnimating} 
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setArrowsVerticalAnimating(true)}
            onMouseLeave={() => setArrowsVerticalAnimating(false)}
          >
            <h3>Arrows vertical</h3>
            <icons.ArrowsVerticalMotion 
              isAnimating={arrowsVerticalAnimating} 
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setBookmarkAnimating(true)}
            onMouseLeave={() => setBookmarkAnimating(false)}
          >
            <h3>Bookmark</h3>
            <icons.BookmarkMotion 
              isAnimating={bookmarkAnimating} 
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setBookmarkAddAnimating(true)}
            onMouseLeave={() => setBookmarkAddAnimating(false)}
          >
            <h3>Bookmark Add</h3>
            <icons.BookmarkAddMotion 
              isAnimating={bookmarkAddAnimating} 
              size={32} />
          </li>
  				<li
            className='icon-tile'
            onMouseEnter={() => setBookmarkFilledAnimating(true)}
            onMouseLeave={() => setBookmarkFilledAnimating(false)}
          >
            <h3>Bookmark Filled</h3>
            <icons.BookmarkFilledMotion 
              isAnimating={bookmarkFilledAnimating} 
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setChevronMiniAnimating(true)}
            onMouseLeave={() => setChevronMiniAnimating(false)}
          >
            <h3>Chevron mini</h3>
            <icons.ChevronMiniMotion 
              isAnimating={chevronMiniAnimating} 
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setChevronSortAnimating(true)}
            onMouseLeave={() => setChevronSortAnimating(false)}
          >
            <h3>Chevron sort</h3>
            <icons.ChevronSortMotion 
              isAnimating={chevronSortAnimating} 
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setCaretSortAnimating(true)}
            onMouseLeave={() => setCaretSortAnimating(false)}
          >
            <h3>Caret sort</h3>
            <icons.CaretSortMotion 
              isAnimating={caretSortAnimating} 
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setCaretSortDownAnimating(true)}
            onMouseLeave={() => setCaretSortDownAnimating(false)}
          >
            <h3>Caret sort down</h3>
            <icons.CaretSortDownMotion 
              isAnimating={caretSortDownAnimating} 
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setCaretSortUpAnimating(true)}
            onMouseLeave={() => setCaretSortUpAnimating(false)}
          >
            <h3>Caret sort up</h3>
            <icons.CaretSortUpMotion 
              isAnimating={caretSortUpAnimating} 
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setChatAnimating(true)}
            onMouseLeave={() => setChatAnimating(false)}
          >
            <h3>Chat</h3>
            <icons.ChatMotion 
              isAnimating={chatAnimating} 
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setChatLaunchAnimating(true)}
            onMouseLeave={() => setChatLaunchAnimating(false)}
          >
            <h3>Chat launch</h3>
            <icons.ChatLaunchMotion 
              isAnimating={chatLaunchAnimating} 
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setChatOffAnimating(true)}
            onMouseLeave={() => setChatOffAnimating(false)}
          >
            <h3>Chat off</h3>
            <icons.ChatOffMotion 
              isAnimating={chatOffAnimating} 
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setCollapseAllAnimating(true)}
            onMouseLeave={() => setCollapseAllAnimating(false)}
          >
            <h3>Collapse all</h3>
            <icons.CollapseAllMotion 
              isAnimating={collapseAllAnimating} 
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setConnectAnimating(true)}
            onMouseLeave={() => setConnectAnimating(false)}
          >
            <h3>Connect</h3>
            <icons.ConnectMotion 
              isAnimating={connectAnimating} 
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setExploreAnimating(true)}
            onMouseLeave={() => setExploreAnimating(false)}
          >
            <h3>Explore</h3>
            <icons.ExploreMotion 
              isAnimating={exploreAnimating} 
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setDragHorizontalAnimating(true)}
            onMouseLeave={() => setDragHorizontalAnimating(false)}
          >
            <h3>Drag horizontal</h3>
            <icons.DragHorizontalMotion 
              isAnimating={dragHorizontalAnimating}
            size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setDragVerticalAnimating(true)}
            onMouseLeave={() => setDragVerticalAnimating(false)}
          >
            <h3>Drag vertical</h3>
            <icons.DragVerticalMotion 
              isAnimating={dragVerticalAnimating} 
            size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setExitAnimating(true)}
            onMouseLeave={() => setExitAnimating(false)}
          >
            <h3>Exit</h3>
            <icons.ExitMotion 
              isAnimating={exitAnimating} 

              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setFilterAnimating(true)}
            onMouseLeave={() => setFilterAnimating(false)}
          >
            <h3>Filter</h3>
            <icons.FilterMotion 
              isAnimating={filterAnimating} 
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setFilterEditAnimating(true)}
            onMouseLeave={() => setFilterEditAnimating(false)}
          >
            <h3>Filter edit</h3>
            <icons.FilterEditMotion 
              isAnimating={filterEditAnimating} 
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setFilterRemoveAnimating(true)}
            onMouseLeave={() => setFilterRemoveAnimating(false)}
          >
            <h3>Filter remove</h3>
            <icons.FilterRemoveMotion 
              isAnimating={filterRemoveAnimating} 
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setFilterResetAnimating(true)}
            onMouseLeave={() => setFilterResetAnimating(false)}
          >
            <h3>Filter reset</h3>
            <icons.FilterResetMotion 
              isAnimating={filterResetAnimating} 
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setFlagAnimating(true)}
            onMouseLeave={() => setFlagAnimating(false)}
          >
            <h3>Flag</h3>
            <icons.FlagMotion 
              isAnimating={flagAnimating} 
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setFlagFilledAnimating(true)}
            onMouseLeave={() => setFlagFilledAnimating(false)}
          >
            <h3>Flag filled</h3>
            <icons.FlagFilledMotion 
              isAnimating={flagFilledAnimating} 
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setImageSearchAnimating(true)}
            onMouseLeave={() => setImageSearchAnimating(false)}
          >
            <h3>Image search</h3>
            <icons.ImageSearchMotion 
              isAnimating={imageSearchAnimating} 
              size={32} />
          </li>
         <li
            className='icon-tile'
            onMouseEnter={() => setJumpLinkAnimating(true)}
            onMouseLeave={() => setJumpLinkAnimating(false)}
          >
            <h3>Jump Link</h3>
            <icons.JumpLinkMotion
              isAnimating={jumpLinkAnimating}
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setLaunchAnimating(true)}
            onMouseLeave={() => setLaunchAnimating(false)}
          >
            <h3>Launch</h3>
            <icons.LaunchMotion
              isAnimating={launchAnimating}
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setLayersAnimating(true)}
            onMouseLeave={() => setLayersAnimating(false)}
          >
            <h3>Layers</h3>
            <icons.LayersMotion 
              isAnimating={layersAnimating} 
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setLoginAnimating(true)}
            onMouseLeave={() => setLoginAnimating(false)}
          >
            <h3>Log in</h3>
            <icons.LoginMotion
              isAnimating={loginAnimating}  
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setLogoutAnimating(true)}
            onMouseLeave={() => setLogoutAnimating(false)}
          >
            <h3>Logout</h3>
            <icons.LogoutMotion
              isAnimating={logoutAnimating}  
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setLoopAnimating(true)}
            onMouseLeave={() => setLoopAnimating(false)}
          >
            <h3>Loop</h3>
            <icons.LoopMotion 
              isAnimating={loopAnimating} 
              size={32}
            />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setMaximizeAnimating(true)}
            onMouseLeave={() => setMaximizeAnimating(false)}
          >
            <h3>Maximize</h3>
            <icons.MaximizeMotion 
              isAnimating={maximizeAnimating} 
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setMinimizeAnimating(true)}
            onMouseLeave={() => setMinimizeAnimating(false)}
          >
            <h3>Minimize</h3>
            <icons.MinimizeMotion 
              isAnimating={minimizeAnimating} 
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setMoveAnimating(true)}
            onMouseLeave={() => setMoveAnimating(false)}
          >
            <h3>Move</h3>
            <icons.MoveMotion 
              isAnimating={moveAnimating} 
              size={32} />
          </li>
          <li className='icon-tile'
            onMouseEnter={() => setNewTabAnimating(true)}
            onMouseLeave={() => setNewTabAnimating(false)}
          >
            <h3>New tab</h3>
            <icons.NewTabMotion 
              isAnimating={newTabAnimating} 
              size={32} />
          </li>   
          <li className='icon-tile'
            onMouseEnter={() => setPanHorizontalAnimating(true)}
            onMouseLeave={() => setPanHorizontalAnimating(false)}
          >
            <h3>Pan Horizontal</h3>
            <icons.PanHorizontalMotion 
              isAnimating={panHorizontalAnimating} 
              size={32} />
          </li>
          <li className='icon-tile'
            onMouseEnter={() => setPanVerticalAnimating(true)}
            onMouseLeave={() => setPanVerticalAnimating(false)}
          >
            <h3>Pan Vertical</h3>
            <icons.PanVerticalMotion 
              isAnimating={panVerticalAnimating} 
              size={32} />
          </li>      
          <li
            className='icon-tile'
            onMouseEnter={() => setRecommendAnimating(true)}
            onMouseLeave={() => setRecommendAnimating(false)}
          >
            <h3>Recommend</h3>
            <icons.RecommendMotion 
              isAnimating={recommendAnimating} 
              size={32} />
          </li>
          <li className='icon-tile'
            onMouseEnter={() => setRedoAnimating(true)}
            onMouseLeave={() => setRedoAnimating(false)}
          >
            <h3>Redo</h3>
            <icons.RedoMotion 
              isAnimating={redoAnimating} 
              size={32} />
          </li>
          <li className='icon-tile'
            onMouseEnter={() => setPinAnimating(true)}
            onMouseLeave={() => setPinAnimating(false)}
          >
            <h3>Pin</h3>
            <icons.PinMotion 
              isAnimating={pinAnimating} 
              size={32} />
          </li>
          <li className='icon-tile'
            onMouseEnter={() => setPinFilledAnimating(true)}
            onMouseLeave={() => setPinFilledAnimating(false)}
          >
            <h3>Pin filled</h3>
            <icons.PinFilledMotion 
              isAnimating={pinFilledAnimating} 
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setRecommendAnimating(true)}
            onMouseLeave={() => setRecommendAnimating(false)}
          >
            <h3>Recommend</h3>
            <icons.RecommendMotion 
              isAnimating={recommendAnimating} 
              size={32} />
          </li>
          <li 
            className='icon-tile'
            onMouseEnter={() => setRedoAnimating(true)}
            onMouseLeave={() => setRedoAnimating(false)}
          >
            <h3>Redo</h3>
            <icons.RedoMotion 
              isAnimating={redoAnimating} 
              size={32} />
          </li>
          <li 
            className='icon-tile'
            onMouseEnter={() => setRenewAnimating(true)}
            onMouseLeave={() => setRenewAnimating(false)}
          >
            <h3>Renew</h3>
            <icons.RenewMotion 
              isAnimating={renewAnimating} 
              size={32} />
          </li>
          <li className='icon-tile'
            onMouseEnter={() => setRepeatAnimating(true)}
            onMouseLeave={() => setRepeatAnimating(false)}
          >
            <h3>Repeat</h3>
            <icons.RepeatMotion 
              isAnimating={repeatAnimating} 
              size={32} />
          </li>
          <li className='icon-tile'
            onMouseEnter={() => setResetAnimating(true)}
            onMouseLeave={() => setResetAnimating(false)}
          >
            <h3>Reset</h3>
            <icons.ResetMotion 
              isAnimating={resetAnimating} 
              size={32} />
          </li>
          <li className='icon-tile'
            onMouseEnter={() => setResetAltAnimating(true)}
            onMouseLeave={() => setResetAltAnimating(false)}
          >
            <h3>Reset alt</h3>
            <icons.ResetAltMotion 
              isAnimating={resetAltAnimating} 
              size={32} />
          </li>
          <li className='icon-tile'
            onMouseEnter={() => setRestartAnimating(true)}
            onMouseLeave={() => setRestartAnimating(false)}
          >
            <h3>Restart</h3>
            <icons.RestartMotion 
              isAnimating={restartAnimating} 
              size={32} />
          </li>
          <li className='icon-tile'
            onMouseEnter={() => setReviewAnimating(true)}
            onMouseLeave={() => setReviewAnimating(false)}
          >
            <h3>Review</h3>
            <icons.ReviewMotion 
              isAnimating={reviewAnimating} 
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setSendAnimating(true)}
            onMouseLeave={() => setSendAnimating(false)}
          >
            <h3>Send</h3>
            <icons.SendMotion 
              isAnimating={sendAnimating} 
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setSendAltAnimating(true)}
            onMouseLeave={() => setSendAltAnimating(false)}
          >
            <h3>Send alt</h3>
            <icons.SendAltMotion 
              isAnimating={sendAltAnimating} 
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setSendAltFilledAnimating(true)}
            onMouseLeave={() => setSendAltFilledAnimating(false)}
          >
            <h3>Send alt filled</h3>
            <icons.SendAltFilledMotion 
              isAnimating={sendAltFilledAnimating} 
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setSendFilledAnimating(true)}
            onMouseLeave={() => setSendFilledAnimating(false)}
          >
            <h3>Send filled</h3>
            <icons.SendFilledMotion 
              isAnimating={sendFilledAnimating} 
              size={32} />
          </li> 
          <li className='icon-tile'
            onMouseEnter={() => setTagAnimating(true)}
            onMouseLeave={() => setTagAnimating(false)}
          >
            <h3>Tag</h3>
            <icons.TagMotion 
              isAnimating={tagAnimating} 
              size={32} />
          </li>
          <li className='icon-tile'
            onMouseEnter={() => setTagEditAnimating(true)}
            onMouseLeave={() => setTagEditAnimating(false)}
          >
            <h3>Tag edit</h3>
            <icons.TagEditMotion 
              isAnimating={tagEditAnimating} 
              size={32} />
          </li>
          <li className='icon-tile'
            onMouseEnter={() => setTagExportAnimating(true)}
            onMouseLeave={() => setTagExportAnimating(false)}
          >
            <h3>Tag export</h3>
            <icons.TagExportMotion 
              isAnimating={tagExportAnimating} 
              size={32} />
          </li> 
          <li className='icon-tile'
            onMouseEnter={() => setTagGroupAnimating(true)}
            onMouseLeave={() => setTagGroupAnimating(false)}
          >
            <h3>Tag group</h3>
            <icons.TagGroupMotion 
              isAnimating={tagGroupAnimating} 
              size={32} />
          </li>
          <li className='icon-tile'
            onMouseEnter={() => setTagImportAnimating(true)}
            onMouseLeave={() => setTagImportAnimating(false)}
          >
            <h3>Tag import</h3>
            <icons.TagImportMotion 
              isAnimating={tagImportAnimating} 
              size={32} />
          </li>
          <li className='icon-tile'
            onMouseEnter={() => setTagNoneAnimating(true)}
            onMouseLeave={() => setTagNoneAnimating(false)}
          >
            <h3>Tag none</h3>
            <icons.TagNoneMotion 
              isAnimating={tagNoneAnimating} 
              size={32} />
          </li>
          <li className='icon-tile'
            onMouseEnter={() => setTranslateAnimating(true)}
            onMouseLeave={() => setTranslateAnimating(false)}
          >
            <h3>Translate</h3>
            <icons.TranslateMotion 
              isAnimating={translateAnimating} 
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setUndoAnimating(true)}
            onMouseLeave={() => setUndoAnimating(false)}
          >
            <h3>Undo</h3>
            <icons.UndoMotion 
              isAnimating={undoAnimating} 
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setXAxisAnimating(true)}
            onMouseLeave={() => setXAxisAnimating(false)}
          >
            <h3>X axis</h3>
            <icons.XAxisMotion 
              isAnimating={xAxisAnimating} 
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setYAxisAnimating(true)}
            onMouseLeave={() => setYAxisAnimating(false)}
          >
            <h3>Y axis</h3>
            <icons.YAxisMotion 
              isAnimating={yAxisAnimating} 
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setZAxisAnimating(true)}
            onMouseLeave={() => setZAxisAnimating(false)}
          >
            <h3>Z axis</h3>
            <icons.ZAxisMotion 
              isAnimating={zAxisAnimating} 
              size={32} />
          </li>
  		  </ul>
		  </div>
		</section>
	)
}

export default OperationsSection
