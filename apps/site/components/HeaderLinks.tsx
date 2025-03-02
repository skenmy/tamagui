import { useUser } from 'hooks/useUser'
import { useRouter } from 'next/router'
import * as React from 'react'
import {
  Paragraph,
  Popover,
  Separator,
  SizableText,
  Text,
  TooltipSimple,
  XStack,
  YStack,
  getMedia,
  styled,
} from 'tamagui'

import { GithubIcon } from './GithubIcon'
import type { HeaderProps } from './HeaderProps'
import { NextLink } from './NextLink'

const HeadAnchor = styled(Paragraph, {
  tag: 'a',
  fontFamily: '$silkscreen',
  px: '$3',
  py: '$3',
  cursor: 'pointer',
  size: '$3',
  color: '$color10',
  tabIndex: -1,

  hoverStyle: {
    color: '$color',
    br: '$3',
  },

  pressStyle: {
    opacity: 0.25,
  },

  variants: {
    grid: {
      true: {
        fow: '200',
        size: '$4',
        ls: 1,
        textTransform: 'unset',
        w: '100%',
        f: 1,
        p: '$2',
        px: '$4',

        hoverStyle: {
          backgroundColor:
            'color-mix(in srgb, var(--color8) 10%, transparent 50%)' as any,
        },
      },
    },

    half: {
      true: {
        maxWidth: '48.5%',
        overflow: 'hidden',
      },
    },
  } as const,
})

export const HeaderLinks = (props: HeaderProps) => {
  const { showExtra, forceShowAllLinks, isHeader } = props
  const userSwr = useUser()
  const router = useRouter()
  // there is user context and supabase setup in the current page
  return (
    <>
      <NextLink passHref prefetch={false} href="/docs/intro/introduction">
        <HeadAnchor
          grid={forceShowAllLinks}
          $sm={{
            display: forceShowAllLinks ? 'flex' : 'none',
          }}
        >
          Docs
        </HeadAnchor>
      </NextLink>

      {forceShowAllLinks && (
        <NextLink legacyBehavior={false} prefetch={false} href="/takeout">
          <HeadAnchor
            grid={forceShowAllLinks}
            tag="span"
            $sm={{
              display: forceShowAllLinks ? 'flex' : 'none',
            }}
          >
            Starter Kit
          </HeadAnchor>
        </NextLink>
      )}

      {!forceShowAllLinks && <TakeoutHeaderLink {...props} />}

      {!forceShowAllLinks && process.env.NEXT_PUBLIC_IS_TAMAGUI_DEV && (
        <BentoHeaderLink {...props} />
      )}

      <NextLink passHref prefetch={false} href="/studio">
        <HeadAnchor
          grid={forceShowAllLinks}
          $md={{
            display: forceShowAllLinks ? 'flex' : 'none',
          }}
        >
          Studio
        </HeadAnchor>
      </NextLink>

      {forceShowAllLinks && (
        <NextLink passHref prefetch={false} href="/community">
          <HeadAnchor grid={forceShowAllLinks}>Community</HeadAnchor>
        </NextLink>
      )}

      {showExtra && (
        <NextLink passHref prefetch={false} href="/studio">
          <HeadAnchor grid={forceShowAllLinks}>Studio</HeadAnchor>
        </NextLink>
      )}

      {forceShowAllLinks && (
        <>
          <Separator my="$2" />

          <XStack fw="wrap" f={1} gap="$2" w="100%">
            {forceShowAllLinks && (
              <NextLink
                prefetch={false}
                legacyBehavior={true}
                passHref
                target="_blank"
                href="https://github.com/tamagui/tamagui"
              >
                <HeadAnchor half grid={forceShowAllLinks} tag="span">
                  Github{' '}
                  <YStack dsp={'inline-block' as any} y={10} my={-20} o={0.8}>
                    <GithubIcon width={16} />
                  </YStack>
                </HeadAnchor>
              </NextLink>
            )}

            <NextLink passHref prefetch={false} href="/blog">
              <HeadAnchor half grid={forceShowAllLinks}>
                Blog
              </HeadAnchor>
            </NextLink>

            <NextLink
              legacyBehavior={false}
              target="_blank"
              href="https://github.com/sponsors/natew"
            >
              <HeadAnchor half grid={forceShowAllLinks} tag="span">
                Sponsor
              </HeadAnchor>
            </NextLink>

            {userSwr.data?.userDetails && (
              <NextLink passHref prefetch={false} href="/account">
                <HeadAnchor half grid={forceShowAllLinks}>
                  Account
                </HeadAnchor>
              </NextLink>
            )}

            {!userSwr.data?.userDetails && (
              <NextLink passHref prefetch={false} href="/login">
                <HeadAnchor half grid={forceShowAllLinks}>
                  Login
                </HeadAnchor>
              </NextLink>
            )}
          </XStack>
        </>
      )}
    </>
  )
}

const TakeoutIcon = React.forwardRef((props, ref) => (
  <YStack {...props} ref={ref as any}>
    <svg width="24px" height="24px" viewBox="0 0 128 128">
      <defs>
        <linearGradient
          x1="67.1763271%"
          y1="100%"
          x2="34.8280675%"
          y2="7.64973958%"
          id="linearGradient-1"
        >
          <stop stopColor="#DADADA" offset="0%"></stop>
          <stop stopColor="#FFFFFF" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-2">
          <stop stopColor="#EEEEEE" offset="0%"></stop>
          <stop stopColor="#D8D8D8" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-3">
          <stop stopColor="#FDFDFD" offset="0%"></stop>
          <stop stopColor="#D0D0D0" offset="100%"></stop>
        </linearGradient>
        <linearGradient
          x1="77.7522044%"
          y1="41.0699775%"
          x2="50%"
          y2="69.6638897%"
          id="linearGradient-4"
        >
          <stop stopColor="#F7F7F7" offset="0%"></stop>
          <stop stopColor="#EDEDED" offset="88.7869068%"></stop>
          <stop stopColor="#ECECEC" offset="100%"></stop>
        </linearGradient>
      </defs>
      <g id="takeout-custom" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Group-2-Copy" transform="translate(6.000000, 1.000000)">
          <polygon
            id="Path"
            fill="#D8D8D8"
            points="0 31 59 49.5 59 127 7.58921162 108.75"
          ></polygon>
          <g id="Group" transform="translate(0.000000, 31.000000)" fillRule="nonzero">
            <polygon
              id="Path"
              fill="#FF0000"
              points="23.5020747 8 30.3568465 8 30.3568465 21.5 40.3941909 21.5 40.3941909 35.5 52.879668 35.5 52.879668 63.5 47.9834025 63.5 47.9834025 82 38.9253112 82 38.9253112 78.25 32.8049793 78.25 32.8049793 76.75 23.0124481 76.75 23.0124481 74 14.93361 74 14.93361 70.5 6.12033195 70.5 6.12033195 40 8.56846473 40 8.56846473 17 23.5020747 17"
            ></polygon>
            <path
              d="M20.3195021,5.25 L59,18 L59,28 L59,96 L6.12033195,78.25 L0,0 L21.7883817,6.75 L23.5020747,17 C19.7482711,11.8888889 17.8713693,8.47222222 17.8713693,6.75 C17.8713693,5.02777778 18.6874136,4.52777778 20.3195021,5.25 Z M24.4813278,16 C23.8964689,16.484 23.8964689,16.484 23.9591411,17.3625 L23.9610996,17.87775 C23.9610996,20.1975 23.9610996,20.1975 23.2964315,21.13575 C22.7524564,21.59375 22.7524564,21.59375 22.2082365,21.959 L21.7883817,22.25 L21.7883817,22.75 L20.8091286,23.25 L20.3807054,23.53125 C19.5392822,23.8655 18.7700788,23.7805 17.8713693,23.75 L17.6916763,23.23825 C17.1207718,21.50875 17.1207718,21.50875 15.9128631,20.25 C14.9722905,20.273 14.9722905,20.273 14.1991701,20.75 C13.9230207,22.56375 14.7629751,23.98 15.6680498,25.5 C16.4683444,26.5855 17.007668,26.9735 18.3609959,27.25 L18.3609959,32.25 L17.3817427,32.75 L17.0757261,33.15625 C16.3554855,33.73425 15.5808963,33.54475 14.6887967,33.5 L14.4469212,32.97075 L14.1225436,32.28125 L13.8042863,31.59575 C13.4843154,30.934 13.4843154,30.934 12.7302905,30.5 C11.9170207,30.581 11.6021909,30.652 11.0165975,31.25 C11.0165975,33.306 11.907473,34.6525 13.3002158,36.087 C14.2297718,37.09 14.2297718,37.09 15.4232365,37.5 C15.4247054,38.59925 15.4102614,39.69775 15.3926349,40.797 L15.3945934,41.74075 C15.3475892,43.982 15.3475892,43.982 14.8689793,44.74025 C14.2003942,45.34025 13.6855519,45.50325 12.806917,45.625 C11.9958506,45.5 11.9958506,45.5 11.552249,45.21875 C11.2614108,44.75 11.2614108,44.75 11.0320207,44.03125 C10.7414274,43.159 10.4393278,42.64175 9.79253112,42 C9.15944398,41.854 9.15944398,41.854 8.56846473,42 C7.99731535,42.484 7.99731535,42.484 7.95643154,43.34375 C8.00686307,45.11175 8.92246473,46.7845 10.0554606,48.08125 C11.0023983,49.015 11.0023983,49.015 12.2406639,49.25 L12.2406639,63.5 L9.30290456,62.5 L8.32365145,62.5 C8.02448963,63.111 8.02106224,63.5525 8.00221162,64.2345 L7.97454772,64.8975 C8.02693776,65.51575 8.02693776,65.51575 8.44605809,65.90725 C9.29311203,66.38175 10.1793361,66.68975 11.0932241,67 C11.5368257,67.15475 11.9806722,67.30975 12.4242739,67.465 L13.16361,67.72225 C14.4787469,68.18425 15.7887427,68.66125 17.0989834,69.13725 L18.5656598,69.66975 C20.1601286,70.24775 21.7543527,70.8265 23.3480871,71.40625 C27.5046205,72.916936 31.6668032,74.4113636 35.8345436,75.8895 L37.1648589,76.36125 L37.8165519,76.5925 C38.9554232,76.99725 40.0928257,77.40625 41.2275353,77.82325 C41.6848465,77.99125 42.1424025,78.158 42.5999585,78.3245 C43.1307252,78.5180118 43.6605887,78.7140973 44.1895311,78.91275 L44.8830871,79.164 L45.4686805,79.3815 C46.1306556,79.5225 46.6004523,79.425 47.2489627,79.25 C47.2687925,78.8075 47.2832365,78.36475 47.2949876,77.92175 L47.3206929,77.17475 C47.2359876,76.37675 47.1040332,76.24925 46.5145228,75.75 C46.0601494,75.516 46.0601494,75.516 45.5582822,75.34875 L45.006473,75.151 C44.8174772,75.0855 44.6284813,75.02025 44.43361,74.95325 L43.8607469,74.7465 C42.7664315,74.35825 42.7664315,74.35825 41.6182573,74.25 L41.6182573,59.25 L43.8215768,59 C44.8434274,58.47825 45.0382988,58.257 45.596473,57.29675 L45.9827884,56.65125 C46.2924772,55.94825 46.3485394,55.5115 46.2697095,54.75 C46.02,54.26575 46.02,54.26575 45.5352697,54 C44.8113568,53.8125 44.8113568,53.8125 44.06639,54 L43.6225436,54.75 C42.9681577,55.66675 42.9681577,55.66675 42.0924606,55.8125 C41.4116349,55.77775 41.0265436,55.637 40.5273693,55.158 C39.6680747,54.1655 38.9348589,53.08325 38.1908714,52 L37.7012448,51.5 C37.6231494,50.7775 37.6231494,50.7775 37.5998921,49.865 L37.571249,48.879 L37.5482365,47.84375 C37.5135542,46.6459457 37.4829523,45.4480218 37.4564315,44.25 C37.6831286,44.2575 37.9095809,44.2655 38.1431328,44.2735 C39.1936266,44.242 39.6041784,43.9515 40.3941909,43.25 C41.2113776,42.0625 41.5705187,40.96525 41.373444,39.5 C41.1178589,38.98875 41.1178589,38.98875 40.6390041,38.75 C40.0377427,38.5625 40.0377427,38.5625 39.4149378,38.75 C38.6692365,39.6445 38.6692365,39.6445 38.4356846,40.75 C37.5193485,40.82425 37.0713402,40.83375 36.2323651,40.5 C34.625166,39.03375 33.9416473,37.4875 33.7915768,35.323 C33.7606528,34.3823019 33.7582035,33.4408526 33.7842324,32.5 L34.5904025,32.41 C35.8022282,32.19625 36.119751,31.885 36.966805,31 C37.5810415,29.945 37.5330581,28.945 37.4564315,27.75 C36.9961826,27.1755 36.9961826,27.1755 36.2475436,27.17175 C35.5109004,27.1885 35.5109004,27.1885 35.0389004,27.5625 C34.6751079,28.0535 34.6751079,28.0535 34.7634855,29 C33.7773776,29.04275 33.2848133,28.9545 32.5229544,28.291 C31.2540871,26.88375 30.1661369,25.346 29.1366971,23.752 C28.6776722,23.027 28.6776722,23.027 28.2414149,22.498 C26.9975187,20.87 27.1987552,18.72525 27.1742739,16.75 L26.3786307,16.375 L25.931112,16.164 C25.3890954,15.94625 25.3890954,15.94625 24.4813278,16 Z"
              id="Shape"
              fill="url(#linearGradient-1)"
            ></path>
            <path
              d="M14.93361,50.5 C17.9301245,51.3345 17.9301245,51.3345 19.1872407,51.8595 C20.4438672,52.3835 21.7190996,52.79125 23.01661,53.19375 C24.8470788,53.765 26.6667759,54.372 28.4874523,54.97475 C28.9457427,55.12625 29.4045228,55.27725 29.8633029,55.4275 C30.5419253,55.65 31.2195685,55.874 31.8974564,56.09875 L32.4960249,56.29375 C34.681473,57.02225 36.7704647,57.89425 38.9253112,58.75 L39.1701245,73 C37.4564315,72.75 37.4564315,72.75 36.2323651,72.25 L36.2323651,60.75 L33.2946058,60 L33.2946058,71.25 L29.1327801,69.84375 L27.8465311,69.4105 L26.7918755,69.05275 L26.2758091,68.87975 C24.3491286,68.224 22.4709212,67.48 20.5643154,66.75 L20.5643154,55.25 L18.8506224,55 L17.626556,54.75 L17.626556,65.5 C15.4232365,64.75 15.4232365,64.75 14.93361,64.5 L14.93361,50.5 Z"
              id="Path"
              fill="#FFFFFF"
            ></path>
            <path
              d="M18.1161826,38.25 C20.377278,38.59525 22.4878133,39.38575 24.6343361,40.15625 C25.2054855,40.35925 25.7768797,40.5615 26.348029,40.76375 C26.7292033,40.89875 27.1101328,41.034 27.4913071,41.1695 C29.9884025,42.056 32.498473,42.90125 35.0082988,43.75 L35.0082988,52.25 C33.4187261,51.8075 31.8607344,51.36975 30.3054357,50.832 L29.7653776,50.6475 C29.1974108,50.45325 28.629444,50.258 28.061722,50.0625 L26.8836805,49.65875 C26.299556,49.45875 25.7154315,49.25875 25.1313071,49.058 C24.0188755,48.67625 22.9059544,48.29775 21.7913195,47.923 L21.0615311,47.677 C20.6288756,47.5314577 20.1960454,47.3864576 19.7630415,47.242 C18.3881701,46.7775 18.3881701,46.7775 18.1161826,46.5 C18.0952066,45.8905829 18.0872075,45.2807722 18.0921909,44.671 L18.0934149,44.117 C18.094639,43.53125 18.0978216,42.94525 18.1007593,42.3595 C18.1022282,41.963 18.1032075,41.56675 18.1041867,41.1705 C18.1068797,40.197 18.1110415,39.2235 18.1161826,38.25 L18.1161826,38.25 Z"
              id="Path"
              fill="#FFFFFF"
            ></path>
            <path
              d="M21.0539419,28 C22.2868216,28.4175 23.5194564,28.83575 24.7520913,29.25425 L26.0094523,29.6805 C26.612917,29.885 27.2163817,30.09 27.8198465,30.295 L28.3848755,30.486 L28.9193029,30.66775 C29.0730456,30.72025 29.2270332,30.77225 29.3854274,30.826 C29.960249,31.0335 30.525278,31.26875 31.0912863,31.5 L31.0912863,37.5 C29.7908382,37.31025 28.6769378,37.05875 27.4516473,36.63275 L26.9172199,36.45075 C26.5480415,36.3245 26.1788631,36.1975 25.8101743,36.07 C25.2434315,35.874 24.6759544,35.6805 24.1084772,35.4875 C23.7487988,35.3642281 23.3891681,35.2408114 23.0295851,35.11725 L22.5142531,34.94125 C21.3271535,34.529 21.3271535,34.529 21.0539419,34.25 C21.0326432,33.7865 21.0277469,33.3225 21.0299502,32.8585 L21.0323983,32.00625 L21.0385187,31.10925 L21.0419461,30.20925 C21.0448838,29.473 21.0488008,28.7365 21.0539419,28 L21.0539419,28 Z"
              id="Path"
              fill="#FFFFFF"
            ></path>
            <path
              d="M23.2572614,56.75 C24.3819336,56.914 25.259834,57.0555 26.3076349,57.3985 L27.0242033,57.63175 L27.7557054,57.875 L28.5045892,58.11825 C30.3230622,58.71575 30.3230622,58.71575 30.6016598,59 C30.6232033,59.612 30.6298133,60.217 30.6256515,60.829 L30.6244274,61.383 C30.6232033,61.96875 30.6200207,62.55475 30.617083,63.1405 C30.6142342,64.5103413 30.6090931,65.8801766 30.6016598,67.25 C29.510527,67.11375 28.5241743,66.9145 27.4888589,66.538 L26.8090124,66.294 L25.9656307,65.9845 L23.2572614,65 L23.2572614,56.75 Z"
              id="Path"
              fill="#FF0000"
            ></path>
            <path
              d="M23.9917012,30.75 C25.3942635,31.0275 26.5216959,31.483 27.7727921,32.25 C28.6068563,32.7613333 28.6068563,33.5113333 27.7727921,34.5 C26.4347308,34.03 25.2316766,33.485 23.9917012,32.75 L23.9917012,30.75 Z"
              id="Path"
              fill="#FF0000"
            ></path>
            <path
              d="M20.3195021,41.75 C21.4179793,41.882 21.9688091,42.32375 23.0124481,42.75 C22.9620873,43.9661997 22.9620873,44.8828664 23.0124481,45.5 C23.0164902,45.549533 23.0980947,45.6328664 23.2572614,45.75 C20.594917,45.03125 20.594917,45.03125 20.3195021,44.75 C20.3018755,44.245 20.2989378,43.7395 20.3040788,43.23425 L20.3109336,42.3975 L20.3195021,41.75 Z"
              id="Path"
              fill="#FF0000"
            ></path>
            <path
              d="M29.8672199,44.75 L32.560166,45.5 L32.560166,49 C30.1426349,48.28125 30.1426349,48.28125 29.8672199,48 C29.8505923,47.4532588 29.8454501,46.9062164 29.8517967,46.35925 L29.8586515,45.45225 L29.8672199,44.75 Z"
              id="Path"
              fill="#FF0000"
            ></path>
            <path
              d="M25.2157676,43.5 C26.0652697,43.6145 27.0944647,43.72275 27.9087137,44 L27.9087137,47.25 C26.6846473,47 26.1950207,47 24.9709544,46.5 L25.2157676,43.5 Z"
              id="Path"
              fill="#FF0000"
            ></path>
          </g>
          <polygon
            id="Path-5"
            fill="url(#linearGradient-2)"
            points="59 23.129771 69.3943662 12.5496183 88.6619718 6 111.985915 17.3358779 113 30.4351145 111.985915 39"
          ></polygon>
          <polygon
            id="Path-4"
            fill="url(#linearGradient-3)"
            points="59 49.5 117 31 111.2 109.25 59 127"
          ></polygon>
          <polygon
            id="Path-3"
            fill="#E7E7E7"
            transform="translate(33.381967, 18.427325) scale(1, -1) rotate(195.000000) translate(-33.381967, -18.427325) "
            points="7.53763115 30.3003987 8.49935595 28.9866404 9.76457151 18.5931112 25.126072 8.04576563 26.4008626 8.04306713 31.5242831 8.03222179 32.2408597 6.78415081 35.069498 6.55425188 36.7173688 7.95880387 43.474551 7.90810925 55.598392 16.4460225 59.226302 28.0671745"
          ></polygon>
          <polygon
            id="Path-6"
            fill="#DDDDDD"
            points="61.8531856 23 17 32.4245283 63.1274238 50 109 32.6792453"
          ></polygon>
          <polygon
            id="Path-3"
            fill="#FFFFFF"
            points="60.7885463 50 59 30.0120482 66.6651982 15.5903614 78.6740088 12.3012048 78.6740088 9.77108434 85.3171806 8.25301205 87.6167401 9.77108434 102.180617 8 113.167401 19.1325301 117 32.7951807"
          ></polygon>
          <polygon
            id="Path-2"
            fill="url(#linearGradient-4)"
            points="0 30.7291667 2.73839662 19.9375 10.7046414 13 21.907173 15.0555556 24.6455696 13.2569444 34.6033755 15.5694444 36.0970464 18.6527778 47.0506329 23.5347222 54.021097 33.2986111 59 50"
          ></polygon>
        </g>
      </g>
    </svg>
  </YStack>
))

const TakeoutHeaderLink = ({ forceShowAllLinks }: HeaderProps) => {
  const router = useRouter()
  const isDisabledRoute = router.asPath === '/' || router.asPath === '/takeout'
  const [disabled, setDisabled] = React.useState(isDisabledRoute)
  const [open, setOpen] = React.useState(false)
  const [hasOpenedOnce, setHasOpenedOnce] = React.useState(false)

  if (disabled && open) {
    setOpen(false)
  }

  const openIt = () => {
    if (getMedia().xs) return
    setOpen(true)
    setHasOpenedOnce(true)
  }

  // open just a touch delayed to show the animation
  React.useEffect(() => {
    if (open || disabled || hasOpenedOnce) return

    const tm = setTimeout(openIt, 0)

    return () => {
      clearTimeout(tm)
    }
  }, [open, disabled])

  // remember if you closed it
  React.useEffect(() => {
    const key = 'tkt-cta-times-close2'
    const timesClosed = +(localStorage.getItem(key) || 0)
    if (timesClosed > 3) {
      setDisabled(true)
    }
    localStorage.setItem(key, `${timesClosed + 1}`)
  }, [])

  return (
    <NextLink legacyBehavior={false} prefetch={false} href="/takeout">
      <Popover
        open={open}
        onOpenChange={(open) => {
          if (open) {
            openIt()
          } else {
            setOpen(false)
          }
        }}
        offset={12}
      >
        <Popover.Trigger asChild>
          <HeadAnchor
            grid={forceShowAllLinks}
            tag="span"
            fontSize={24}
            $sm={{
              display: 'none',
            }}
          >
            <TooltipSimple label="Starter kit">
              <TakeoutIcon />
            </TooltipSimple>
          </HeadAnchor>
        </Popover.Trigger>

        <Popover.Content
          unstyled
          animation={[
            'bouncy',
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ]}
          enterStyle={{ y: -10, opacity: 0 }}
          exitStyle={{ y: -10, opacity: 0 }}
        >
          <Popover.Arrow size="$3" />
          <XStack
            tag="a"
            cur="pointer"
            bg="$background"
            ai="center"
            py="$2"
            px="$3"
            br="$4"
            hoverStyle={{
              bg: '$backgroundHover',
            }}
            elevation="$0.25"
          >
            <SizableText ff="$silkscreen">Takeout </SizableText>
            <Text
              ff="$body"
              fontSize="$3"
              color="$color10"
              $sm={{ dsp: 'none' }}
              y={0.98}
              ml={6}
            >
              starter kit
            </Text>
          </XStack>
        </Popover.Content>
      </Popover>
    </NextLink>
  )
}

const BentoHeaderLink = ({ forceShowAllLinks }: HeaderProps) => {
  return (
    <NextLink legacyBehavior={false} prefetch={false} href="/bento">
      <HeadAnchor
        grid={forceShowAllLinks}
        tag="span"
        fontSize={24}
        $sm={{
          display: 'none',
        }}
      >
        <TooltipSimple label="Pro Components & Screens">
          <Text>🍱</Text>
        </TooltipSimple>
      </HeadAnchor>
    </NextLink>
  )
}
