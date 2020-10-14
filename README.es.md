# rn-expandable

A simple expandable/collapsible component for react native using react-native-reanimated.

## Spanish README
[Leeme en español](https://github.com/Mandres07/rn-expandable/blob/main/README.es.md)

## Installation

`$ npm i rn-expandable`

## Usage

### Import
`import { RNExpandable } from 'rn-expandable';`

### Declarative Usage
```
<RNExpandable 
   separator={true}
   initialToggle={false}
   titleComponent={<Text style={{ color: 'black', fontSize: 16 }}>Expandable Component</Text>}
   iconComponent={<Ionicons name={Platform.OS === 'android' ? 'md-arrow-down' : 'ios-arrow-down'} size={20} color='black' />}
   separatorColor='black'
   separatorHeight={1}
   separatorMargin={5}
   titleContainerPaddingHorizontal={15}
   titleContainerPaddingVertical={15}
   initialRotation={0}
   finalRotation={90}>
   <View style={{ paddingVertical: 15, paddingHorizontal: 15 }}>
      <Text>Custom text</Text>
      <View style={{ flexDirection: 'row', marginVertical: 20 }}>
         <View style={{ backgroundColor: 'blue', height: 35, flex: 1 }} />
         <View style={{ backgroundColor: 'red', height: 35, flex: 1 }} />
         <View style={{ backgroundColor: 'yellow', height: 35, flex: 1 }} />
      </View>
      <Text>Custom text</Text>
   </View>
</RNExpandable>
```

### Properties
|     Prop     |  Description | Default Value | Required
| :---         | :---         | :---          | :---
| initialToggle | Whether or not to start the expandable component expanded. true: collapsed, false: expanded | false | Yes
| titleComponent | Component that will be rendered in the title section | None | Yes
| titleContainerPaddingHorizontal | Horizontal padding for the title contaier | 15 | No
| titleContainerPaddingVertical | Vertical padding for the title contaier | 15 | No
| iconComponent | Component that will be rendered in the icon section | None | Yes
| separator | Whether or not to draw a separator line below the content | true | Yes
| separatorColor | Color for the separator line | black | No
| separatorHeight | Height for the separator line | 1 | No
| separatorMargin | Bottom margin for the separator line when the content is expanded | 5 | No
| initialRotation | Initial Z rotation of the icon in degrees | 0 |  No
| finalRotation | Final Z rotation of the icon in degrees | 90 |  No