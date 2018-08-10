class register {
    constructor() {
        this.centers = [];
    }

    getAllCenter = () => {
        const x = [];
        for(let i = 0; i<10; i++) {
            x.push({
                theCenter: `ศุนย์ที่ ${i}`,
                theAddress1: 'ที่อยู่ 1',
                theAddress2: 'ที่อยู่ 2',
                theProvince:'10',
                theAmphor: '1002',
                theNumber: '123456'
            });
        }
       return  [...this.centers, ...x];
    } 

    registerCenter = (center) => {
        this.centers.push(center);
    }
}

export { register };