let p = 10;
{
        let p = 20; 
    {
            let p = 30;
        {
                let p = 40;
            {   
                let p = 50;
                {
                    let p = 60;
                    console.log('Level 6 p value -->', p);
                }
                console.log('Level 5 p value -->', p);
            }
            console.log('Level 4 p value -->', p);
        }
        console.log('Level 3 p value -->', p);
    }
    console.log('Level 2 p value -->', p);
}
console.log('Level 1 p value -->', p);