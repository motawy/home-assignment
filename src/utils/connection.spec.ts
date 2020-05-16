import { connectDb } from './connection'
import { MONGODB_URI_TEST } from './uris'

test('Should connect to the DB', () => {
    let mockFn = null;
    mockFn = jest.fn(async () => await connectDb(MONGODB_URI_TEST))
    expect(mockFn).not.toThrowError()
})
