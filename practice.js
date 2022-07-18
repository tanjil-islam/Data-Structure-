const nemo =['nemo'];

function findNemo(array)
{
    for(let i=0; i<array.length; i++)
    {
        if(array[i]==='tanjil')
        {
            console.log('Found Nemo!');
        }
        else{
            console.log('Not Found Nemo!');
        }
    }
}

findNemo(nemo);