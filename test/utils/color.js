import { expect } from 'chai'
import { hexToRgb } from '../../modules/utils/color'

describe('Color utils', () => {
  it('should convert hex to rgb', () => {
    expect(hexToRgb('#0033ff')).to.eql([ 0, 51, 255 ])
  })

  it('should convert shorthand hex to rgb', () => {
    expect(hexToRgb('#03f')).to.eql([ 0, 51, 255 ])
  })

  it('should default to black', () => {
    expect(hexToRgb()).to.eql([ 0, 0, 0 ])
  })
})
