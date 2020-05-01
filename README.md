# react-split-props

## Installation

```
yarn add react-split-props
```

## Usage

Given the following component...

```js
import splitProps from 'react-split-props';

function MyButton({text, ...props}) {
  const [touchableProps, textProps, rest] = splitProps(props,
    ['disabled', 'onPress'],
    ['allowFontScaling', 'numberOfLines' 'ellipsizeMode']
  );
  return (
    <View {...rest}>
      <TouchableWithoutFeedback {...touchableProps}>
        <Text {...textProps}>
          {text}
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
}
```

Then you can use it like this...

```js
  <MyButton
    title="Accept"
    onPres={() => null}
    numberOfLines={2} />
```

Props aliases are allowed...

```js
function MyButton({text, ...props}) {
  const [touchableProps, textProps, rest] = splitProps(props,
    ['containerStyle:style', 'onPress', 'disabled'],
    ['textStyle:style', 'numberOfLines' 'ellipsizeMode'],
  );
  return (
    <View {...rest}>
      <TouchableWithoutFeedback {...containerStyle}>
        <Text {...textProps}>
          {text}
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
}
```

Then simply use as follows...

```js
  <MyButton
    title="Accept"
    style={{...}}
    containerStyle={{...}}
    textStyle={{...}} />
```
