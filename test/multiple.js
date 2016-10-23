import multiple from '../modules/multiple'

describe('Combining multiple css functions', () => {
  it('should concatenate each function', () => {
    expect(multiple('translateX(30px) translateY(40px)')).to.eql('translateX(30px) translateY(40px)')
  })
})
