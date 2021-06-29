import React from "react";
import "./index.scss";
import Switch from '@material-ui/core/Switch';


const SwitchBuuton = (props) => {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <div style={{border:`2px solid ${props.color}`, color:props.color}} className="switch">
      {props.text}
      <Switch
      
      style={{ color: props.color, backgroundColor:""}}
        checked={state.checkedA}
        onChange={handleChange}
        name="checkedA"
        // inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
    </div>
  );
};

export default SwitchBuuton;
