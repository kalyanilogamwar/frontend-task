const op=process.argv[2];
if(op=="sub" || op=="div")
{
    if(process.argv.length>5)
    {
        console.log("you can enter only two numbers for sub and div ");
       
    }
    else if(op=="sub")
    {
        var n1=parseFloat(process.argv[3]);
        var n2=parseFloat(process.argv[4]);
        const res=n1-n2;
        console.log("operation is subtraction--");
        console.log("Result is:",res);
    }
    else if(op=="div")
    {
        var n1=parseFloat(process.argv[3]);
        var n2=parseFloat(process.argv[4]);
        const res=n1/n2;
        console.log("operation is division--");
        console.log("Result is",res);
    }
    
}
if(op=="add" || op=="mul")
{
    var arr=[];
    for(i=3;i<process.argv.length;i++)
    { 
        num=parseFloat(process.argv[i]);
        if(!isNaN(num))
       {
            arr.push(num);
       }
       

    }
    if(op=="add")
    {
        var sum=0;
        for(i=0;i<arr.length;i++)
        {
            sum=sum+arr[i];
        }
        console.log("operation is addition--");
        console.log("Result is:",sum);
    }
    if(op=="mul")
    {
        var pdt=1;
        for(i=0;i<arr.length;i++)
        {
            pdt=pdt*arr[i];
        }
        console.log("operation is multiplication--");
        console.log("Result is:",pdt);
    }
   
}