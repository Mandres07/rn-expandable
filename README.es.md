# rn-expandable

Un componente expandible para react native utilizando react-native-reanimated.

## English README
[English](https://github.com/Mandres07/rn-expandable/)

## Instalación

`$ npm i rn-expandable`

## Uso

### Import
`import { RNExpandable } from 'rn-expandable';`

### Como declararlo en JSX
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

### Propiedades
| Propiedad | Descripción | Valor por defecto | Requerido
| :---         | :---         | :---          | :---
| initialToggle | Indica si el componente estara expandido o replegado al inicio. true = replegado, false = espandido | false | Si
| titleComponent | Componente que se renderizará como título | Ninguno | Si
| titleContainerPaddingHorizontal | Padding horizontal para el contenedor del título | 15 | No
| titleContainerPaddingVertical | Padding vertical para el contenedor del título | 15 | No
| iconComponent | Componente que se renderizará como icono | Ninguno | Si
| separator | Indica si se debe dibujar el separador al final del contenido | true | Si
| separatorColor | Color para la línea del separador | black | No
| separatorHeight | Altura o grosor para la línea del separador | 1 | No
| separatorMargin | Margen de abajo del separador para cuando el contenido esté expandido | 5 | No
| initialRotation | Rotación inicial en el eje Z del icono, en grados | 0 |  No
| finalRotation | Rotación final en el eje Z del icono, en grados | 90 |  No