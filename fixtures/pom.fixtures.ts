import {test as base} from '@playwright/test';
import PomManager from  '../pages/ManagePage';
import user from '../test data/validUser.json';

type MyFixtures = {
    pm: PomManager;
    validUser: {username: string; password: string};
}   
export const test = base.extend<MyFixtures>({
    pm: async ({page}, use) => {
       await use (new PomManager(page));
    },

    validUser: user,
    
})  ;
export { expect } from '@playwright/test';