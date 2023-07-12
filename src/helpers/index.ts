import { URL } from 'src/constants'
import type { ImageLoaderT } from 'src/types'

export const imageLoader = ({ src, width }: ImageLoaderT) =>
  `${URL}${src}?w=${width}`
