/**
 * These are props that dont pass down below Tamagui styled components
 */
export const skipProps = {
  untilMeasured: 1,
  animation: 1,
  space: 1,
  animateOnly: 1,
  disableClassName: 1,
  debug: 1,
  componentName: 1,
  disableOptimization: 1,
  tag: 1,
  style: 1, // handled after loop so pseudos set usedKeys and override it if necessary
  group: 1,
}

if (process.env.NODE_ENV === 'test') {
  skipProps['data-test-renders'] = 1
}

// native only skips
if (process.env.TAMAGUI_TARGET === 'native') {
  Object.assign(skipProps, {
    whiteSpace: 1,
    wordWrap: 1,
    textOverflow: 1,
    textDecorationDistance: 1,
    cursor: 1,
    contain: 1,
    boxSizing: 1,
    boxShadow: 1,
    outlineStyle: 1,
    outlineOffset: 1,
    outlineWidth: 1,
    outlineColor: 1,
  })
} else {
  if (process.env.NODE_ENV !== 'production') {
    // native only, not web props
    // we only skip them in dev to avoid warnings, in prod they silently drop
    Object.assign(skipProps, {
      accessibilityElementsHidden: 1,
      accessibilityIgnoresInvertColors: 1,
      accessibilityLanguage: 1,
      adjustsFontSizeToFit: 1,
      allowFontScaling: 1,
      dataDetectorType: 1,
      dynamicTypeRamp: 1,
      elevationAndroid: 1,
      hapticFeedback: 1,
      importantForAccessibility: 1,
      lineBreakStrategyIOS: 1,
      maxFontSizeMultiplier: 1,
      minimumFontScale: 1,
      needsOffscreenAlphaCompositing: 1,
      nextFocusDown: 1,
      nextFocusForward: 1,
      nextFocusLeft: 1,
      nextFocusRight: 1,
      nextFocusUp: 1,
      onMagicTap: 1,
      selectionColor: 1,
      shouldRasterizeIOS: 1,
      suppressHighlighting: 1,
      textBreakStrategy: 1,
    })
  }
}
