import imageResizerUtil from './resizer'

test('Should resize image', async () => {
    const mockImg = {
        "_id": "123123",
        "instant": {
            "fieldname": "instant",
            "originalname": "4e6d5a31a4ab30f3bbec30e079dc2951.jpg",
            "encoding": "7bit",
            "mimetype": "image/jpeg",
            "destination": "/app/public/uploads/",
            "filename": "fa774226-1c0f-4ced-88e7-715b152d6700_original.jpg",
            "path": "/app/public/uploads/fa774226-1c0f-4ced-88e7-715b152d6700_original.jpg",
        }
    }
    const mockFn = jest.fn(() => imageResizerUtil(mockImg))
    expect(mockFn).not.toReturnWith(null)
})

test('Should fail to resize image', async () => {
    const mockImg = {
        "_id": "123123",
        "instant": {
            "fieldname": "instant",
        }
    }
    const mockFn = jest.fn(() => imageResizerUtil(mockImg))
    expect(mockFn).not.toReturn()
})