
const getSvgTitle = (title, defaultTitle) => {
    if (typeof title == 'string'){
        return title
      }
      else if (title == true){
        return defaultTitle
      }
      else {
        return null
      }
 }

export default getSvgTitle
