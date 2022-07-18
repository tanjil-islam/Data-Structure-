const nemo=['nemo'];
const everyone=['tanjil','momin vai','ikhlas vai','mamun vai','mehedi bodda'];

const large=new Array(10000).fill('nemo');

function findNemo(array)
{
    let t0=performance.now();
    for(let i=0;i<array.length;i++)
    {
        if(array[i]==='nemo')
        {
            console.log('Found nemo!');
        }
    }
    let t1=performance.now();

    console.log('Call to find took '+(t1-t0)+' miliseconds');
}

findNemo(nemo);