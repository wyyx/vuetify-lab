export function getCssRotate(transformValue: string | null): number {
  if (!transformValue) {
    return 0
  }
  const reg = /rotate\((-?\d+)deg\)/
  const matchResult = transformValue.match(reg)
  console.log('TCL: matchResult', matchResult)
  const currentRotate = (matchResult && parseInt(matchResult[1])) || 0
  return currentRotate
}
