import React from 'react';

const AppPage = () =>{

  // const getData = () => {
  //   const pr1 = fetch("https://dummyjson.com/products");
  //   pr1.then((res)=>{
  //     console.log("Response : ",res);

  //     const pr2 = res.json();

  //     pr2.then((data)=>{
  //       console.log("Data : ",data);
  //     })
  //   }).catch((err)=>{
  //     console.log("Error Occured : "+err);
  //   });
  // };

console.log("A");

  const getData = async () => {
    try{
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      console.log("▄█ : ",data);
      console.log("B");
    }
    catch(err){
      console.log("Error Occured : ",err);
    }
    finally{
      console.log("Finally Block, Completed Successfully");
      console.log("C");
    }
  };


  getData();

  console.log("D");

  console.log("After getData");
    return(
        <>
            <h1>App Page</h1>

        </>
    );
}

export default AppPage;