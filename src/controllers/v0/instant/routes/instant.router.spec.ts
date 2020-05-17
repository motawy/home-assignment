import frisby from 'frisby'
import path from 'path'
import fs from 'fs'
import { ENDPOINT_GET_ALL, ENDPOINT_CREATE_INSTANT, ENDPOINT_SENDRESIZE_TOQUEUE } from '../../../../utils/constants'

/**
 * This test gets elements from the DB from the /all endpoint
 */
test('Should get elements from DB', () => {
    return frisby
        .get(ENDPOINT_GET_ALL)
        .expect('status', 200);
})

/**
 * Test insertion of instant in the DB. It takes the image from /public/test
 */
test('Should insert instant in the DB successfully', () => {
    const imgPath = path.resolve('public/test/mock-img.png');
    let content: any = fs.createReadStream(imgPath);
    let formData = frisby.formData();
    formData.append("username", "mido")
    formData.append("photoname", "space")
    formData.append("weight", "313kb")
    formData.append("length", "long")
    formData.append("latitude", "12s 44n")
    formData.append("longitude", "33e 13w")
    formData.append('details', content);

    return frisby
        .post(ENDPOINT_CREATE_INSTANT, { body: formData })
        .inspectRequestHeaders()
        .expect('status', 200)
})

/**
 * This test needs an existing ID to pass otherwise it will return 404
 */
test('Should send resize job to the queue', () => {
    return frisby
        .post(`${ENDPOINT_SENDRESIZE_TOQUEUE}45e9dbd1-01a2-4ccb-9b86-a069bb5077b7`)
        .expect('status', 200);
})

/**
 * This test will pass with the wrong ID
 */
test('Should fail to send resize job to the queue with wrong id', () => {
    return frisby
        .post(`${ENDPOINT_SENDRESIZE_TOQUEUE}737b6724-6c50-499f-ad3b-1aa4854fe995`)
        .expect('status', 404);
})