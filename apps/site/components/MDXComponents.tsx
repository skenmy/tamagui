import { ThemeTint, ThemeTintAlt } from '@tamagui/logo'
import { Link as LinkIcon } from '@tamagui/lucide-icons'
import { NextLink } from 'components/NextLink'
import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import type { ImageProps, XStackProps } from 'tamagui'
import {
  Button,
  Card,
  H1,
  H2,
  H3,
  H4,
  H5,
  Image,
  Paragraph,
  Separator,
  Spacer,
  Text,
  Theme,
  ThemeableStack,
  TooltipSimple,
  XGroup,
  XStack,
  YStack,
  styled,
} from 'tamagui'
import { LinearGradient } from 'tamagui/linear-gradient'

import { BenchmarkChart } from './BenchmarkChart'
import { BenchmarkChartNative } from './BenchmarkChartNative'
import { BenchmarkChartWeb } from './BenchmarkChartWeb'
import { Code, CodeInline } from './Code'
import { Preview } from './ComponentPreview'
import { DataTable } from './DataTable'
import * as Demos from './demos'
import { DocCodeBlock } from './DocsCodeBlock'
import { ExternalIcon } from './ExternalIcon'
import { Features } from './Features'
import { HeroContainer } from './HeroContainer'
import { ExampleAnimations } from './HeroExampleAnimations'
import { Highlights } from './Highlights'
import { HR } from './HR'
import { LI } from './LI'
import { MediaPlayer } from './MediaPlayer'
import { Notice, NoticeFrame } from './Notice'
import { OffsetBox } from './OffsetBox'
import { PropsTable } from './PropsTable'
import { SocialLinksRow } from './SocialLinksRow'
import { SponsorButton } from './SponsorButton'
import { SubTitle } from './SubTitle'
import { TamaguiCard } from './TamaguiCard'
import { TamaguiExamplesCode } from './TamaguiExamplesCode'
import { UL } from './UL'
import { unwrapText } from './unwrapText'
import { Link } from './Link'

const B = styled(Paragraph, {
  fontWeight: '800',
})

const IntroParagraph = ({ children, large, disableUnwrapText, ...props }: any) => {
  return (
    <Paragraph
      tag="p"
      size={large ? '$9' : '$8'}
      mb="$4"
      fow={large ? '200' : '300'}
      $sm={{
        size: '$7',
      }}
      {...props}
    >
      {disableUnwrapText ? children : unwrapText(children)}
    </Paragraph>
  )
}

const TableFrame = styled(ThemeableStack, {
  bordered: true,
  br: '$4',
  ov: 'hidden',
  my: '$4',
})

const Table = ({ heading, children, ...props }) => {
  return (
    <TableFrame className="no-scrollbar" overflow={'scroll' as any} {...props}>
      {!!heading && (
        <TableCell size="$4" bc="$color1" fow="500" color="$color9">
          {heading}
        </TableCell>
      )}
      <XStack minWidth="100%" ai="stretch">
        {children}
      </XStack>
    </TableFrame>
  )
}

const code = (props) => {
  const {
    hero,
    line,
    scrollable,
    className,
    children,
    id,
    showLineNumbers,
    collapsible,
    ...rest
  } = props
  if (!className) {
    return <CodeInline>{unwrapText(children)}</CodeInline>
  }
  return (
    <YStack mt="$3">
      <DocCodeBlock
        isHighlightingLines={line !== undefined}
        className={className}
        isHero={hero !== undefined}
        showLineNumbers={showLineNumbers !== undefined}
        {...rest}
      >
        {children}
      </DocCodeBlock>
    </YStack>
  )
}

const TableCell = styled(Paragraph, {
  bbw: 1,
  bbc: '$borderColor',
  fd: 'row',
  ai: 'center',
  pos: 'relative',
  f: 1,
  jc: 'center',
  ta: 'center',
  h: '$4',
  p: '$2',
  px: '$3',
  size: '$5',
  ellipse: true,

  variants: {
    head: {
      true: {
        bc: '$color1',
      },
    },
    highlight: {
      true: {
        bc: '$yellow2',
      },
    },
  } as const,
})

const TableCol = styled(ThemeableStack, {
  brw: 1,
  brc: '$borderColor',
  f: 1,
  mr: -1,
  fd: 'column',
})

const TableHighlight = styled(YStack, {
  fullscreen: true,
  bc: '$yellow1',
})

export const components = {
  SocialLinksRow: () => (
    <YStack mt="$6" mx="$-4">
      <SocialLinksRow />
    </YStack>
  ),

  Wide: (props) => (
    <YStack mx="$-8" $sm={{ mx: '$-2' }}>
      {props.children}
    </YStack>
  ),

  Table,
  TableCell,
  TableHighlight,
  TableCol,

  Spacer,
  ExampleAnimations,
  ScrollView,
  Features,
  Text,
  Paragraph,
  OffsetBox,
  YStack,
  XStack,
  Theme,
  BenchmarkChart,
  Separator,
  Code,
  HeroContainer,
  BenchmarkChartNative,
  BenchmarkChartWeb,
  TooltipSimple,

  ...Demos,

  Highlights,
  ThemeTint,
  PropsTable,
  DataTable,
  Description: SubTitle,
  UL,
  LI,

  TamaguiExamplesCode,

  TLDR: (props) => {
    return (
      <YStack
        $gtMd={{ mx: '$-4' }}
        mt="$5"
        mb="$3"
        px="$6"
        py="$2"
        br="$6"
        bw={1}
        o={0.8}
        boc="$borderColor"
        {...props}
      />
    )
  },

  Button,

  Beta: () => (
    <Button
      accessibilityLabel="Beta blog post"
      pe="none"
      size="$2"
      theme="pink_alt2"
      pos="absolute"
      t={-15}
      r={-75}
      rotate="5deg"
    >
      Beta
    </Button>
  ),

  IntroParagraph,

  Grid: (props) => <XStack flexWrap="wrap" jc="space-between" {...props} />,
  Card: TamaguiCard,

  Note: (props) => (
    <YStack
      tag="aside"
      mt="$5"
      mb="$5"
      borderRadius="$3"
      // & & p
      // fontSize: '$3',
      // color: '$slate11',
      // lineHeight: '23px',
      // margin: 0,
      {...props}
    />
  ),

  Notice,

  h1: (props) => <H1 width="max-content" pos="relative" mb="$2" {...props} />,

  h2: ({ children, ...props }) => (
    <H2
      pos="relative"
      width={`fit-content` as any}
      pt="$8"
      mt="$-4"
      mb="$2"
      data-heading
      {...props}
    >
      {children}
    </H2>
  ),

  h3: ({ children, id, ...props }) => (
    <LinkHeading pt="$8" mt="$-4" mb="$1" id={id}>
      <H3 pos="relative" width={`fit-content` as any} id={id} data-heading {...props}>
        {children}
      </H3>
      {getNonTextChildren(children)}
    </LinkHeading>
  ),

  h4: (props) => (
    <H4 pos="relative" width={`fit-content` as any} mt="$4" mb="$3" {...props} />
  ),

  h5: (props) => <H5 mt="$4" {...props} />,

  p: (props) => (
    <Paragraph
      className="docs-paragraph"
      display="block"
      size="$6"
      my="$2.5"
      {...props}
    />
  ),

  a: ({ href = '', children, ...props }) => {
    return (
      <NextLink className="link" href={href}>
        {/* @ts-ignore */}
        <Paragraph
          tag="a"
          // @ts-ignore
          fontSize="inherit"
          display="inline"
          cursor="pointer"
          {...props}
        >
          {children}
          {href.startsWith('http') ? (
            <>
              &nbsp;
              <Text
                // @ts-ignore
                fontSize="inherit"
                display="inline-flex"
                y={2}
                ml={-1}
              >
                <ExternalIcon />
              </Text>
            </>
          ) : null}
        </Paragraph>
      </NextLink>
    )
  },

  hr: HR,

  ul: ({ children }) => {
    return (
      <UL my="$4">
        {React.Children.toArray(children).map((x) => (typeof x === 'string' ? null : x))}
      </UL>
    )
  },

  ol: (props) => <YStack {...props} tag="ol" mb="$3" />,

  li: (props) => {
    return (
      <LI size="$6" my="$1.5" className="docs-paragraph">
        {props.children}
      </LI>
    )
  },

  strong: (props) => (
    <Paragraph tag="strong" fontSize="inherit" {...props} fontWeight="700" />
  ),

  img: ({ ...props }) => (
    <YStack tag="span" my="$6">
      {/* TODO make this a proper <Image /> component */}
      <YStack tag="img" {...props} maxWidth="100%" />
    </YStack>
  ),

  pre: ({ children }) => <>{children}</>,

  code,

  Image: ({
    children,
    size,
    overlap,
    linked,
    ...props
  }: ImageProps & { size?: 'hero'; overlap?: boolean; linked?: boolean }) => {
    const content = (
      <OffsetBox
        size={size}
        tag="figure"
        f={1}
        mx={0}
        mb="$3"
        ai="center"
        jc="center"
        ov="hidden"
        {...(overlap && {
          mt: '$-6',
        })}
      >
        <Image maxWidth="100%" {...props} />
        {!!children && (
          <Text tag="figcaption" lineHeight={23} color="$colorPress" mt="$2">
            {children}
          </Text>
        )}
      </OffsetBox>
    )

    if (linked) {
      return (
        <NextLink target="_blank" href={props.src as string}>
          {content}
        </NextLink>
      )
    }

    return content
  },

  Video: ({
    small,
    large,
    src,
    children = '',
    muted = true,
    autoPlay = true,
    controls,
    size,
    ...props
  }) => (
    <YStack tag="figure" mx={0} my="$6">
      <OffsetBox size={size}>
        <video
          src={src}
          autoPlay={autoPlay}
          playsInline
          muted={muted}
          controls={controls}
          loop
          style={{ width: '100%', display: 'block' }}
        ></video>
      </OffsetBox>
      <Text tag="figcaption" lineHeight={23} mt="$2" color="$colorPress">
        {children}
      </Text>
    </YStack>
  ),

  blockquote: ({ children, ...props }) => {
    return (
      <YStack
        my="$4"
        px="$6"
        ml="$3"
        borderLeftWidth={1}
        borderColor="$borderColor"
        jc="center"
        {...props}
      >
        <Paragraph
          fontFamily="$silkscreen"
          whiteSpace="revert"
          size="$8"
          lh="$9"
          fow="300"
          color="$color"
          opacity={0.65}
        >
          {unwrapText(children)}
        </Paragraph>
      </YStack>
    )
  },

  Preview: (props) => {
    return <Preview {...props} mt="$5" />
  },

  MediaPlayerDemo: ({ theme, ...props }) => {
    return (
      <Theme name={theme}>
        <MediaPlayer {...props} />
      </Theme>
    )
  },

  GroupDisabledDemo: () => {
    return (
      <XGroup als="center" disabled>
        <XGroup.Item>
          <Button>First</Button>
        </XGroup.Item>
        <XGroup.Item>
          <Button>Second</Button>
        </XGroup.Item>
        <XGroup.Item>
          <Button>Third</Button>
        </XGroup.Item>
      </XGroup>
    )
  },

  DemoButton: () => <Button>Hello world</Button>,

  SponsorButton,

  SponsorNotice: () => {
    return (
      <NoticeFrame theme="red">
        <YStack maw="100%" space>
          <H4 color="$color10" fontFamily="$silkscreen">
            👋 Hey! Listen!
          </H4>
          <YStack ov="hidden" f={1} o={0.85} space>
            <Paragraph>
              Tamagui is fully OSS, self-funded and built by{' '}
              <a href="https://twitter.com/natebirdman" target="_blank">
                me
              </a>
              .
            </Paragraph>
            <Paragraph>
              My goal is to support Tamagui development with sponsorships that get early
              access to <a href="#sponsors">some really interesting</a> new features.
            </Paragraph>
            <SponsorButton />
          </YStack>
        </YStack>
      </NoticeFrame>
    )
  },

  Blog: {
    ThemeBuilder: {
      ExamplePalette: React.lazy(() =>
        import('./BlogThemeBuilderExamples').then((x) => ({ default: x.ExamplePalette }))
      ),
      ExampleTemplate: React.lazy(() =>
        import('./BlogThemeBuilderExamples').then((x) => ({ default: x.ExampleTemplate }))
      ),
    },
  },

  DocsIntro: () => {
    return (
      <ThemeTintAlt offset={2}>
        <IntroParagraph size="$9" $sm={{ size: '$8' }}>
          Tamagui is a powerful, modern styling solution for React that works well on all
          platforms. Target just the web, or share styles with React Native.
        </IntroParagraph>

        <IntroParagraph>
          Tamagui is three things:&nbsp;
          <ThemeTintAlt>
            {/* @ts-ignore */}
            <Link fontSize="inherit" href="/docs/core/introduction">
              <span style={{ color: 'var(--color10)' }}>Core</span>
            </Link>
          </ThemeTintAlt>
          &nbsp;brings many features from CSS to the React Native style API, with no
          outside dependencies.{' '}
          <ThemeTintAlt offset={-1}>
            {/* @ts-ignore */}
            <Link fontSize="inherit" href="/docs/intro/compiler-install">
              <span style={{ color: 'var(--color10)' }}>Static</span>
            </Link>
          </ThemeTintAlt>{' '}
          is a smart optimizing compiler. And{' '}
          <ThemeTintAlt>
            {/* @ts-ignore */}
            <Link fontSize="inherit" href="/docs/components/stacks">
              <span style={{ color: 'var(--color10)' }}>Tamagui</span>
            </Link>
          </ThemeTintAlt>{' '}
          is a large component kit where all components come in styled and unstyled forms.
        </IntroParagraph>
      </ThemeTintAlt>
    )
  },

  GetStarted: () => {
    return (
      <XStack gap="$4" f={1} fw="wrap" my="$5">
        <ThemeTintAlt>
          <Card f={1}>
            <Card.Header gap="$2">
              <H4 size="$4" color="$color8">
                Quick start
              </H4>
              <Paragraph size="$6" color="$color9">
                Choose from a few starters with:
              </Paragraph>
            </Card.Header>

            <Card.Footer p="$6" pt={0}>
              <Code f={1} bc="$color4" p="$3" br="$4" size="$6">
                npm create tamagui@latest
              </Code>
            </Card.Footer>
          </Card>
        </ThemeTintAlt>

        <NextLink passHref href="/docs/intro/installation">
          <Card
            tag="a"
            animation="quickest"
            f={1}
            y={0}
            hoverStyle={{ y: -2, bc: '$backgroundHover' }}
            pressStyle={{ y: 2, bc: '$color2' }}
          >
            <Card.Header gap="$2">
              <H4 size="$4" color="$color8">
                Install
              </H4>
              <Paragraph size="$6" color="$color9">
                Set up an app.
              </Paragraph>
            </Card.Header>
          </Card>
        </NextLink>
      </XStack>
    )
  },

  Aside: ({ children, ...props }) => {
    const [cutoff, setCutoff] = useState(true)

    return (
      <YStack
        tag="aside"
        space="$2"
        bc="$color1"
        br="$4"
        p="$5"
        px="$5"
        pb="$10"
        mx="$-2"
        boc="$borderColor"
        bw={1}
        my="$4"
        pos="relative"
        {...(cutoff && {
          maxHeight: 300,
          overflow: 'hidden',
        })}
        {...props}
      >
        <YStack tag="span" my="$-5">
          {children}
        </YStack>

        {cutoff && (
          <LinearGradient
            pos="absolute"
            b={0}
            l={0}
            r={0}
            height={200}
            colors={['$backgroundTransparent', '$background']}
            zi={1000}
          >
            <Spacer f={1} />
            <Button onPress={() => setCutoff(!cutoff)} als="center">
              Show more
            </Button>
            <Spacer size="$4" />
          </LinearGradient>
        )}
      </YStack>
    )
  },
}

const LinkHeading = ({ id, children, ...props }: { id: string } & XStackProps) => (
  <XStack
    tag="a"
    href={`#${id}`}
    id={id}
    data-id={id}
    display="inline-flex"
    ai="center"
    space
    {...props}
  >
    {children}
    <YStack tag="span" opacity={0.3}>
      <LinkIcon size={12} color="var(--color)" aria-hidden />
    </YStack>
  </XStack>
)

const getNonTextChildren = (children) => {
  return React.Children.map(children, (x) => {
    if (typeof x === 'string') return null
    if (x['type'] === code) return null
    return x
  }).flat()
}
