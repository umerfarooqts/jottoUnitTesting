/*
Moxios is basically a test server that you use to mock the axios HTTP requests.
 */
import moxios from 'moxios';
import { getSecretWord } from "./index";

describe('GetSecretWord', ()=>{
    beforeEach(()=>{
        moxios.install();
    });

    afterEach(()=>{
        moxios.uninstall();
    });

    test('SecretWord is returned', ()=>{
        // Here we define the moxios response (mocking)
        moxios.wait(()=>{
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: 'party',
            });
        }); //End of Moxios Wait

        // For Async operation, we need to wait for them to resolve
        // Otherwise your test will complete before the promise is resolved
        return getSecretWord()
            .then((secretWord) => {
                expect(secretWord).toBe("party");
            });

    }); //End of test
})