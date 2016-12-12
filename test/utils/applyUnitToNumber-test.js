import applyUnitToNumber from '../../modules/utils/applyUnitToNumber'

describe('Applying a unit to a number', () => {
  it('should default to px', () => {
    expect(applyUnitToNumber(3)).to.eql('3px')
  })

  it('should use the passed unit', () => {
    expect(applyUnitToNumber(3, 'deg')).to.eql('3deg')
  })

  it('should not apply a unit to strings', () => {
    expect(applyUnitToNumber('3px')).to.eql('3px')
  })
})
