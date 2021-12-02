import createComponent from "./test";
import createComponentV4 from "./test-v4";

export default [
  {
    title: "Preset: SlideFromRightIOS",
    Component: createComponent("SlideFromRightIOS"),
    ComponentV4: createComponentV4("SlideFromRightIOS"),
    ComponentNative: null,
  },
  {
    title: "Preset: ModalSlideFromBottomIOS",
    Component: createComponent("ModalSlideFromBottomIOS"),
    ComponentV4: createComponentV4("ModalSlideFromBottomIOS"),
    ComponentNative: null,
  },
  {
    title: "Preset: ModalPresentationIOS",
    Component: createComponent("ModalPresentationIOS"),
    ComponentV4: createComponentV4("ModalPresentationIOS"),
    ComponentNative: null,
  },
  {
    title: "Preset: FadeFromBottomAndroid",
    Component: createComponent("FadeFromBottomAndroid"),
    ComponentV4: createComponentV4("FadeFromBottomAndroid"),
    ComponentNative: null,
  },
  {
    title: "Preset: RevealFromBottomAndroid",
    Component: createComponent("RevealFromBottomAndroid"),
    ComponentV4: createComponentV4("RevealFromBottomAndroid"),
    ComponentNative: null,
  },
  {
    title: "Preset: ScaleFromCenterAndroid",
    Component: createComponent("ScaleFromCenterAndroid"),
    ComponentV4: createComponentV4("ScaleFromCenterAndroid"),
    ComponentNative: null,
  },
  {
    title: "Preset: DefaultTransition",
    Component: createComponent("DefaultTransition"),
    ComponentV4: createComponentV4("DefaultTransition"),
    ComponentNative: null,
  },
  {
    title: "Preset: ModalTransition",
    Component: createComponent("ModalTransition"),
    ComponentV4: createComponentV4("ModalTransition"),
    ComponentNative: null,
  },
  {
    title: "Preset: BottomSheetAndroid",
    Component: createComponent("BottomSheetAndroid"),
    ComponentV4: null,
    ComponentNative: null,
  },
  {
    title: "Preset: ModalFadeTransition",
    Component: createComponent("ModalFadeTransition"),
    ComponentV4: null,
    ComponentNative: null,
  },
];