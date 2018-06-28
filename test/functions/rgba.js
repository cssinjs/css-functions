import { expect } from 'chai'
import rgba from '../../modules/functions/rgba'

describe('rgba', () => {
  it('should return plain rgba value for regular use', () => {
    expect(rgba(33, 44, 55, 0.3)).to.eql('rgba(33,44,55,0.3)')
  })

  it('should support object with red, green, blue and alpha values', () => {
    expect(rgba({ red: 33, green: 44, blue: 55, alpha: 0.3 })).to.eql('rgba(33,44,55,0.3)')
  })

  it('should support hex color and an alpha', () => {
    expect(rgba('#792763', 0.2)).to.eql('rgba(121,39,99,0.2)')
    expect(rgba('#362', 0.5)).to.eql('rgba(51,102,34,0.5)')
  })
})
