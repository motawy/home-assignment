import { getExtentionUtil } from './extention'

test('Find extention', () => {
    expect(getExtentionUtil('image/jpg')).toEqual('.jpg')
})

test('Fail to find extention', () => {
    expect(getExtentionUtil('pdf')).toEqual('')
})