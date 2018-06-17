# Material UI Color Picker

Material UI React Color Picker (A fork of [rc-color-picker](https://github.com/react-component/color-picker))

[![npm version](http://img.shields.io/npm/v/material-ui-rc-color-picker.svg)](https://www.npmjs.org/package/material-ui-rc-color-picker) 
[![npm download](http://img.shields.io/npm/dm/material-ui-rc-color-picker.svg)](https://www.npmjs.org/package/material-ui-rc-color-picker)
[![npm dependency](https://david-dm.org/timmo001/material-ui-rc-color-picker.svg)](https://david-dm.org/timmo001/material-ui-rc-color-picker)


## Screenshots



## Features

* Supports color modes RGB, HSB and HSL

## Installation

```bash
yarn add material-ui-rc-color-picker

OR

npm install material-ui-rc-color-picker
```

## install

[![material-ui-rc-color-picker](https://nodei.co/npm/material-ui-rc-color-picker.png)](https://npmjs.org/package/material-ui-rc-color-picker)

## Usage

```js
import ColorPicker from 'material-ui-rc-color-picker';



```

## API

### ColorPicker.props

| name                 | type                                                                      | default                                               | description                                                 |
|:---------------------|:--------------------------------------------------------------------------|:------------------------------------------------------|:------------------------------------------------------------|
| align                | Object: alignConfig of [dom-align](https://github.com/yiminghe/dom-align) |                                                       | popup 's align config                                       |
| alpha                | Number                                                                    | `100`                                                 | opacity of the color                                        |
| animation            | String                                                                    |                                                       | index.css support 'slide-up'                                |
| children             | Node                                                                      | `<span className='react-colorpicker-trigger'></span>` | additional trigger appended to picker                       |
| className            | String                                                                    | ''                                                    | Aditional class to be added to component                    |
| color                | String                                                                    | `#ff0000`                                             | color board current background color                        |
| defaultAlpha         | Number                                                                    | `100`                                                 | opacity of the color                                        |
| defaultColor         | String                                                                    | `#ff0000`                                             | color board current background color                        |
| enableAlpha          | Boolean                                                                   | `true`                                                | enable alpha  controls                                      |
| getCalendarContainer | Function():Element                                                        | `function(){return document.body;}`                   | dom node where picker to be rendered into                   |
| mode                 | String                                                                    | `RGB`                                                 | color mode, support mode 'RGB', 'HSB' or 'HSL'              |
| onChange             | Function                                                                  | noop                                                  | when select color                                           |
| onClose              | Function                                                                  | noop                                                  | when color picker popup close                               |
| onOpen               | Function                                                                  | noop                                                  | when color picker popup open                                |
| placement            | String                                                                    | `topLeft`                                             | one of ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'] |
| transitionName       | String                                                                    |                                                       | css class for animation                                     |


### ColorPicker.Panel.props

| name         | type     | default   | description                                    |
|:-------------|:---------|:----------|:-----------------------------------------------|
| alpha        | Number   | `100`     | opacity of the color                           |
| className    | String   | `''`      | Aditional class to be added to component       |
| color        | String   | `#ff0000` | color board current background color           |
| defaultAlpha | Number   | `100`     | opacity of the color                           |
| defaultColor | String   | `#ff0000` | color board current background color           |
| enableAlpha  | Boolean  | `true`    | enable alpha  controls                         |
| mode         | String   | `RGB`     | color mode, support mode 'RGB', 'HSB' or 'HSL' |
| onBlur       | Function |           | when picker loose focus                        |
| onChange     | Function |           | when select color trigger                      |
| onFocus      | Function |           | when picker focus trigger                      |
| style        | Object   | `{}`      | root node CSS style                            |
