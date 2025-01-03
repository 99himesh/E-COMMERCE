import { Button } from "antd";

const Cards=({buttonText,btn})=>{
    console.log(btn);
    
    return(
        <>
        <div className="flex justify-center flex-col w-[200px] align-center mx-auto text-center gap-3">
          <h1>{buttonText}</h1>
          <Button>{btn.btTxt}</Button>
        </div>
        </>
    )
}


export default Cards;