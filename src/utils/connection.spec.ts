import { connectDb } from './connection'
import { MONGODB_URI_TEST } from './constants'

test('Should successfully connect to DB', () => {
    const mockFn = jest.fn(async () => await connectDb(MONGODB_URI_TEST))
    expect(mockFn).not.toThrowError()
})