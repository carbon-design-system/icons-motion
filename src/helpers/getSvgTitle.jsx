const getSvgTitle = (props, defaultTitle) => {
    if (props.needsTitle){
      if (props.customTitle) {
        return props.customTitle
      }
      else {
        return defaultTitle
      }
    }
    else {
      return null
    }
 }

export default getSvgTitle