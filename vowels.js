const str="Blackflux technology";
const val="a,e,i,o,u";
let count=0;
let index=str.toLowerCase();
vowelsCount();
function vowelsCount(){
for(let i=0;i<index.length;i++)
{
    for(let j=0;j<val.length;j++)
    {
        if(index[i]==val[j])
        count++;
    }
    
}
return count;

}
console.log("The vowels count in the given string: "+count);