// const {verifyDataUserMock} = require("../__mocks__/loginMocks")
// import Login from "../components/Login/login"
// import {render,fireEvent} from "@testing-library/react"
// import {AccountProvider} from "../context/accountContext" 
// enableFetchMocks();
// import { enableFetchMocks } from 'jest-fetch-mock';
import {email as emailCorrect, password as correctPassword,verifyDataUserMock} from "../__mocks__/fileMock"




describe('verifyDataUserMock', () => {
  test('returns expected response when server succeeds', async () => {
    const mockFields = {
      email: emailCorrect,
      password: correctPassword,
    };

    const mockResponse = {
      verify: true,
      message: 'all correct',
      error: undefined,
      email: emailCorrect,
    };

    const fetchMock = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      })
    );

    global.fetch = fetchMock;

    const response = await verifyDataUserMock({ fields: mockFields });

    expect(fetchMock).toHaveBeenCalledWith(
      'http://localhost:3000/api/loginVerify',
      {
        method: 'POST',
        body: JSON.stringify(mockFields),
      }
    );
    expect(response).toEqual(mockResponse);

  });
////////////////////////////////////////////////////////////////////////////////////
  test('returns expected response when server fails,incorrect password', async () => {
    const mockFields = {
      email: emailCorrect,
      password: 'Password',
    };

    const mockResponseNotGod = {
      verify: false,
      message: 'please send a correctly password',
      error: 'Password incorrectly',
      email: emailCorrect,
    };
    // const fetchMock = jest.fn(() => Promise.reject());

    const fetchMock = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockResponseNotGod),
    })
  );

    global.fetch = fetchMock;

    const response = await verifyDataUserMock({ fields: mockFields });

    expect(fetchMock).toHaveBeenCalledWith(
      'http://localhost:3000/api/loginVerify',
      {
        method: 'POST',
        body: JSON.stringify(mockFields),
      }
    );

    expect(response).toEqual(mockResponseNotGod);
  });
  /////////////////////////////////////////////////////////////////////////////////////
  test('returns expected response when server fails,incorrect email', async () => {
    const mockFields = {
      email: "incorrectEmail@mail.com",
      password: correctPassword,
    };

    const mockResponseNotGod = {
      verify: false,
      message: 'please send a correctly email',
      error: 'user Not found',
      email: "incorrectEmail@mail.com",
    };

    // const fetchMock = jest.fn(() => Promise.reject());
    const fetchMock = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockResponseNotGod),
    })
  );

    global.fetch = fetchMock;

    const response = await verifyDataUserMock({ fields: mockFields });

    expect(fetchMock).toHaveBeenCalledWith(
      'http://localhost:3000/api/loginVerify',
      {
        method: 'POST',
        body: JSON.stringify(mockFields),
      }
    );

    expect(response).toEqual(mockResponseNotGod);
  });
});
// !///////////////////////////////////////////////////////////////////////////////////////
test('returns expected response when server fails,server dead', async () => {
  const mockFields = {
    email: "anything@mail.com",
    password: "Anything",
  };

  const mockError = {
    verify: false,
    message: "server failed",
    error: "server failed",
    email: "",
   }

  const fetchMock = jest.fn(() => Promise.reject());
 


  global.fetch = fetchMock;

  const response = await verifyDataUserMock({ fields: mockFields });

  expect(fetchMock).toHaveBeenCalledWith(
    'http://localhost:3000/api/loginVerify',
    {
      method: 'POST',
      body: JSON.stringify(mockFields),
    }
  );

  expect(response).toEqual(mockError);

});