function Parent(){
  const [count,setCount]= useState(0);
  return (
    <div>
      <Child count={count} increment={()=-> setCount(count+1)}/>
    </div>
  );
}

function Child ({count,increment}){
  return (
    <div>
      <p>count</p>
       <button onClick={increment}>+</button>
    </div>
  );
}
