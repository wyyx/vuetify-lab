export function getCssRotate(transformValue: string | null): number {
  if (!transformValue) {
    return 0
  }
  const reg = /rotate\((-?\d+)deg\)/
  const matchResult = transformValue.match(reg)
  const currentRotate = (matchResult && parseInt(matchResult[1])) || 0
  return currentRotate
}

export function getCssScaley(transformValue: string | null): number | null {
  if (!transformValue) {
    return null
  }
  const reg = /scaleY\((-?\d+)\)/
  const matchResult = transformValue.match(reg)
  const scaley = matchResult && parseInt(matchResult[1])
  return scaley
}

export function getCssScalex(transformValue: string | null): number | null {
  if (!transformValue) {
    return null
  }
  const reg = /scaleX\((-?\d+)\)/
  const matchResult = transformValue.match(reg)
  const scaleX = matchResult && parseInt(matchResult[1])
  return scaleX
}

export function rotateImage(img: HTMLImageElement, value: number) {
  const currentRotate = getCssRotate(img.style.transform)

  // reset rotate to 0, when rotate one round
  const rotate = currentRotate === 360 || currentRotate === -360 ? 0 : currentRotate

  // set rotate
  img.style.transform = `rotate(${rotate + value}deg)`
}

export function setMargin(img: HTMLImageElement) {
  const currentRotate = Math.abs(getCssRotate(img.style.transform))

  if (currentRotate === 90 || currentRotate === 270) {
    img.style.marginTop = `${(img.width - img.height) / 2}px`
    img.style.marginBottom = `${(img.width - img.height) / 2}px`
  } else {
    img.style.marginTop = `0px`
    img.style.marginBottom = `0px`
  }
}

export function flipVertical(img: HTMLImageElement) {
  const currentScaley = getCssScaley(img.style.transform)
  const currentRotate = getCssRotate(img.style.transform)
  if (currentScaley === null) {
    img.style.transform = `rotate(${currentRotate}deg) scaleY(-1)`
  } else {
    img.style.transform = `rotate(${currentRotate}deg) scaleY(${-currentScaley})`
  }
}

export function flipHorizon(img: HTMLImageElement) {
  const currentScalex = getCssScalex(img.style.transform)
  const currentRotate = getCssRotate(img.style.transform)
  if (currentScalex === null) {
    img.style.transform = `rotate(${currentRotate}deg) scaleX(-1)`
  } else {
    img.style.transform = `rotate(${currentRotate}deg) scaleX(${-currentScalex})`
  }
}
