## SyntaxInput
An input field with formalized syntax.

[![](https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png)](https://storybook.grommet.io/?selectedKind=SyntaxInput&full=0&addons=0&stories=1&panelRight=0) [![](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=syntaxinput&module=%2Fsrc%2FSyntaxInput.js)
## Usage

```javascript
import { SyntaxInput } from 'grommet';
<SyntaxInput id='item' name='item' />
```

## Properties

**id**

The id attribute of the input.

```
string
```

**name**

The name attribute of the input.

```
string
```

**onChange**

Function that will be called when the user types in the input.

```
function
```

**schema**

Describes the structure of the syntax.

```
[{
  length: 
    number
    [number],
  onActive: function,
  onInactive: function,
  fixed: string,
  options: [string]
}]
```

**size**

The size of the SyntaxInput.

```
small
medium
large
xlarge
string
```

**value**

What text to put in the input. It will automatically take
      care of schema alignment

```
string
```
  