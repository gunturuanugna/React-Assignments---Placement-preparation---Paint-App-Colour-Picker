import React from 'react';

const Selection = (props) =>{
  // const {updateSelectionStyle} = applyColor
   const [style, setStyle] = useState({background :""});
   console.log(style);
   return (
       <div className="fix-box" style={style} onClick={() => {props.applyColor(setStyle)}}>
           <h2 className="subheading">Selection</h2>
       </div>
   )
}
export default ColourSelector;
