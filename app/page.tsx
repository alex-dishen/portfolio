'use client'

import Image, { ImageLoaderProps } from 'next/image'
import { options } from './constants'
import RightArrow from 'src/assets/icons/arrow-right.svg'
import {
  StyledHome,
  Welcome,
  TopGreeting,
  Greeting,
  ImageHolder,
  Name,
  Position,
  NavigationSection,
  Option,
  ArrowContainer,
  Text,
  StyledLink,
} from './styles'

const imageLoader = ({
  src,
  width,
  quality,
}: {
  src: string
  width: number
  quality?: number
}) => `${src}?w=${width}&q=${quality}`

const Home = () => (
  <StyledHome>
    <Welcome>
      <TopGreeting>
        <Greeting>Hey, I'm</Greeting>
        <ImageHolder>
          <Image
            src="/black-shirt.webp"
            alt="Oleksandr in black shirt"
            width={100}
            height={100}
            quality={100}
            loader={imageLoader}
          />
        </ImageHolder>
        <Name>Oleksandr</Name>
      </TopGreeting>
      <Position>A Software Engineer</Position>
    </Welcome>
    <NavigationSection>
      {options.map(({ page, variant, text }, index) => (
        <Option
          href={page}
          key={page}
          index={index}
          target={page.includes('http') ? '_blank' : ''}
        >
          <div>
            <p>{variant}</p> {text}
          </div>
          <ArrowContainer>
            <RightArrow />
            <RightArrow />
          </ArrowContainer>
        </Option>
      ))}
    </NavigationSection>
    <Text>
      Never Mind -- <StyledLink href="/contact">Just Say Hi</StyledLink>
    </Text>
  </StyledHome>
)

export default Home
