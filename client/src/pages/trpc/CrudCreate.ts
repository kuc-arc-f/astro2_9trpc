import LibCrud from '../../lib/LibCrud';

const Crud = {
  /**
  * startProc
  * @param
  *
  * @return
  */   
  startProc :async function (): Promise<void> 
  {
    try{
      console.log("#startProc");
      const valid = await LibCrud.validLogin();
//console.log("valid=", valid);
      if(valid === false) {
//        alert("NG, valid Login");
      }
      //btn
      const button: any = document.querySelector('#btn_save');
      button.addEventListener('click', async () => {
        const result = await LibCrud.addItem();
        console.log("result=", result);
        window.location.href = '/trpc';
      }); 
    } catch (e) {
      console.error(e);
    }    
  } 
}
//
Crud.startProc();

export default Crud;
