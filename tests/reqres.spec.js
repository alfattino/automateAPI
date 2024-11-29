const reqres = require('../pages/reqres.js');

describe('Reqres Automation Test', () => {
    it('[CREATE] Create User', async () => {
        const res = await reqres.CreateUser();
        console.log(res);
        expect(res.body.name).toBe(name);
        expect(res.body.job).toBe(job);
    });
    it('[READ] Get User List', async () => {
        const res = await reqres.GetUserList();
        console.log(res.body);
        const perpage = res.body.per_page;
        expect(res.body.data.length).toBe(perpage);
    });
    it('[UPDATE] Update User', async () => {
        const name = 'morpheus';
        const job = 'programmer';
        const res = await reqres.UpdateUser(name, job);
        console.log(res.body);
        expect(res.body.name).toBe(name);
        expect(res.body.job).toBe(job);
    });
    it('[DELETE] Delete User', async () => {
        const userid = 2;
        const res = await reqres.DeleteUser(userid);
        console.log(res.body);
        expect(res.status).toBe(204);
    });
});