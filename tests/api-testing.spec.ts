import {test, expect} from '@playwright/test';
import pageToAllUsers from '../test data/data-page2.json'

test('API Testing Example', async ({request})=>{
    // Get all users: Compare to save response
    const response = await request.get('https://reqres.in/api/users?page=2');
    // verify the status code 
    expect(response.status()).toBe(200);
    // parse the response body
    const responseBody = await response.json();
    // Compare the response body to the expected data
    expect(responseBody).toEqual (pageToAllUsers);
    console.log(responseBody);
    console.log(response.status());

})
 // Get response for single user
    test('Get single user API Test', async ({request})=>{ 
        const response = await request.get('https://reqres.in/api/users/2');
        const responseBody = await response.json();
        expect(response.status()).toBe(200);
        expect(responseBody.data.id).toBe(2);
        expect(responseBody.data.email).toBe("janet.weaver@reqres.in");
        expect(responseBody.data.first_name).toBe("Janet");
        expect(responseBody.data.last_name).toBe("Weaver");
        console.log(responseBody);
    })
    // Post request to create a user
    test('Create User API Test', async({request})=>{
        const userData = {
            "name": "Osama",
            "job": "QA Engineer" }
        const response = await request.post('https://reqres.in/api/users',{
            data: userData,
            headers: {
                'x-api-key': 'reqres-free-v1'}
        });
        expect (response.status()).toBe(201);

        const responseBody = await response.json();
        expect(responseBody.name).toBe(userData.name);
        expect(responseBody.job).toBe(userData.job);
        
        console.log(responseBody);
    })
    //Put request to update a user 
    test('Update User API Test', async({request})=>{
        const updatedUserData = {
            "name": "Osama Saeed",
            "job": "Senior QA Engineer" }
        const response = await request.put('https://reqres.in/api/users/2',{
            data: updatedUserData,  
            headers: {
                'x-api-key': 'reqres-free-v1'}
        });
        expect (response.status()).toBe(200);   
        const responseBody = await response.json();
        expect(responseBody.name).toBe(updatedUserData.name);
        expect(responseBody.job).toBe(updatedUserData.job);
        console.log(responseBody);
    })
    // Delete request to delete a user
    test.only('Delete User API Test', async({request})=>{
        const response = await request.delete('https://reqres.in/api/users/2',
        { headers: {'x-api-key': 'reqres-free-v1'} }
        )
        expect (response.status()).toBe(204);
        console.log(response.status());
    })