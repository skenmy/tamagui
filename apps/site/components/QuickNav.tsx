import { classNames } from '@tamagui/remove-scroll'
import { NextLink } from 'components/NextLink'
import { useEffect, useState } from 'react'
import { Circle, H4, Paragraph, ScrollView, XStack, YStack } from 'tamagui'

import type { LinkProps } from './Link'

const QuickNavLink = ({ href, ...rest }: LinkProps) => (
  <NextLink href={href}>
    <Paragraph
      tag="span"
      size="$3"
      color="$color"
      o={0.5}
      cursor="pointer"
      py="$0.5"
      hoverStyle={{
        o: 1,
        color: '$colorHover',
      }}
      {...rest}
    />
  </NextLink>
)

export function QuickNav() {
  const [headings, setHeadings] = useState<HTMLHeadingElement[]>([])

  useEffect(() => {
    const headingElements: HTMLHeadingElement[] = Array.from(
      document.querySelectorAll('[data-heading]')
    )
    setHeadings(headingElements)
  }, [])

  // Function to determine the Heading Level based on `nodeName` (H2, H3, etc)
  const getLevel = (nodeName) => {
    return Number(nodeName.replace('H', ''))
  }

  return (
    <YStack
      tag="aside"
      // Components that hide the scrollbar (like Dialog) add padding to
      // account for the scrollbar gap to avoid layout jank. This does not
      // work for position: fixed elements. Since we use react-remove-scroll
      // under the hood for those primitives, we can add this helper class
      // provided by that lib to deal with that for the QuickNav.
      // https://github.com/radix-ui/website/issues/64
      // https://github.com/theKashey/react-remove-scroll#positionfixed-elements
      className={classNames.zeroRight}
      display="none"
      $gtLg={{
        display: 'flex',
        width: 220,
        flexShrink: 0,
        zIndex: 1,
        position: 'fixed' as any,
        left: '50%',
        top: 105,
        marginLeft: 450,
      }}
    >
      <YStack
        tag="nav"
        aria-labelledby="site-quick-nav-heading"
        px="$5"
        display={headings.length === 0 ? 'none' : 'block'}
        space
      >
        <H4 size="$2" o={0.5} id="site-quick-nav-heading">
          Quick nav
        </H4>
        <ScrollView maxHeight="calc(100vh - var(--space-25))">
          <ul style={{ margin: 0, padding: 0 }}>
            {/* loading ... {headings.length === 0 && (
              <YStack tag="li">
                <QuickNavLink>
                  <YStack />
                </QuickNavLink>
              </YStack>
            )} */}

            {headings.map(({ id, nodeName, innerText }, i) => {
              const level = getLevel(nodeName)
              return (
                <XStack key={i} tag="li" ai="center">
                  {level > 2 && <Circle size={4} mx="$2" />}
                  <QuickNavLink href={`#${id}`}>{innerText}</QuickNavLink>
                </XStack>
              )
            })}
          </ul>
        </ScrollView>
      </YStack>
    </YStack>
  )
}
