import React, { useState, useRef, useEffect } from 'react';
import { View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Animated, { Easing } from 'react-native-reanimated';
import PropTypes from 'prop-types';

const { Value, timing, concat } = Animated;

const RNExpandable = (props) => {
   const [toggle, setToggle] = useState(props.initialToggle ? true : false);
   const [minHeight, setMinHeight] = useState(null);
   const [maxHeight, setMaxHeight] = useState(null);

   const height = useRef(new Value(props.initialToggle ? 1 : 0)).current;

   const onPress = () => {
      setToggle(current => !current);
   };

   useEffect(() => {
      timing(height, {
         toValue: toggle ? 1 : 0,
         duration: 400,
         easing: Easing.inOut(Easing.ease)
      }).start();
   }, [toggle]);

   const onHeaderLayout = ({ nativeEvent }) => {
      if (!minHeight) {
         setMinHeight(nativeEvent.layout.height);
      }
   };

   const onContentLayout = ({ nativeEvent }) => {
      if (!maxHeight) {
         setMaxHeight(nativeEvent.layout.height);
      }
   };

   const componentHeight = (maxHeight) ? height.interpolate({
      inputRange: [0, 1],
      outputRange: [0, maxHeight]
   }) : 'auto';

   const separatorMargin = height.interpolate({
      inputRange: [0, 1],
      outputRange: [0, props.separatorMargin]
   });

   const rotation = height.interpolate({
      inputRange: [0, 1],
      outputRange: [props.initialRotation, props.finalRotation]
   });


   return (
      <View style={{ overflow: 'hidden', width: '100%' }}>
         <RectButton style={{ paddingHorizontal: props.titleContainerPaddingHorizontal, paddingVertical: props.titleContainerPaddingVertical }} onPress={onPress}>
            <View onLayout={onHeaderLayout} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
               {props.titleComponent && props.titleComponent}
               <Animated.View style={{ transform: [{ rotateZ: concat(rotation, 'deg') }] }}>
                  {props.iconComponent && props.iconComponent}
               </Animated.View>
            </View>
         </RectButton>
         <Animated.View onLayout={onContentLayout} style={{ flexGrow: 1, marginBottom: separatorMargin, height: componentHeight }}>
            {props.children}
         </Animated.View>
         {props.separator &&
            <View style={{ height: props.separatorHeight, backgroundColor: props.separatorColor }} />
         }
      </View>
   );
};

RNExpandable.propTypes = {
   initialToggle: PropTypes.bool.isRequired,
   separator: PropTypes.bool.isRequired,
   titleComponent: PropTypes.node.isRequired,
   iconComponent: PropTypes.node.isRequired,
   initialRotation: PropTypes.number,
   finalRotation: PropTypes.number,
   separatorHeight: PropTypes.number,
   separatorColor: PropTypes.string,
   separatorMargin: PropTypes.number,
   titleContainerPaddingHorizontal: PropTypes.number,
   titleContainerPaddingVertical: PropTypes.number
};

RNExpandable.defaultProps = {
   initialToggle: false,
   separator: true,
   initialRotation: 0,
   finalRotation: 90,
   separatorHeight: 1,
   separatorColor: 'black',
   separatorMargin: 5,
   titleContainerPaddingHorizontal: 15,
   titleContainerPaddingVertical: 15
};

export default RNExpandable;