import updateImageUtil from './update-image'

test('Should update record with resized image', async () => {
    const mockImg = {
        _id: "123123",
        instant: {
            "fullsizename": "fa774226-1c0f-4ced-88e7-715b152d6700_original.jpg",
            "originalname": "4e6d5a31a4ab30f3bbec30e079dc2951.jpg",
            "mimetype": "image/jpeg",
            "path": "/app/public/uploads/fa774226-1c0f-4ced-88e7-715b152d6700_140x140.jpeg"
        }
    }
    const instantUpdated = updateImageUtil(mockImg)
    expect(instantUpdated).not.toEqual(null)
})

test('Should fail to record the resized image', async () => {
    const mockImg = {
        _id: "123123123",
        instant: {
            "fullsizename": "fa774226-1c0f-4ced-88e7-715b152d6700_original.jpg",
            "originalname": "4e6d5a31a4ab30f3bbec30e079dc2951.jpg",
            "mimetype": "image/jpeg",
        }
    }
    const mockFn = jest.fn(() => updateImageUtil(mockImg))
    expect(mockFn).not.toReturn()
})