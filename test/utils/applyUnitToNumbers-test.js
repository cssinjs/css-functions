import applyUnitToNumbers from '../../modules/utils/applyUnitToNumbers'

describe('Applying units to numbers', () => {
  it('should default to px', () => {
    expect(applyUnitToNumbers([ 3, 4 ])).to.eql([ '3px', '4px' ])
  })

  it('should use the passed unit', () => {
    expect(applyUnitToNumbers([ 3, 4 ], 'deg')).to.eql([ '3deg', '4deg' ])
  })

  it('should not apply units to strings', () => {
    expect(applyUnitToNumbers([ '3px', 4 ])).to.eql([ '3px', '4px' ])
  })
})
