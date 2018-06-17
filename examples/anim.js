import 'material-ui-color-picker/assets/index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import ColorPicker from 'material-ui-color-picker';

function changeHandler(colors) {
  console.log(colors);
}

ReactDOM.render(
  <div style={{ margin: '20px 20px 20px', textAlign: 'center' }}>
    <ColorPicker
      animation="slide-up"
      color={'#36c'}
      onChange={changeHandler}
    />
  </div>,
  document.getElementById('__react-content')
);
