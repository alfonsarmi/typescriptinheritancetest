import { getUsefulContents } from '/modules/file.ts';

getUsefulContents('http://www.example.com',
    data => { doSomethingUseful(data); });