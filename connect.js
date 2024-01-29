(() => {
    document.addEventListener("DOMContentLoaded", ()=> {
        document.getElementById('btnconnect').addEventListener('click', () => {
            usbVendorId = 0x2E8A;
            usbProductId = 0x000A;
            navigator.serial.requestPort({ filters: [{ usbVendorId, usbProductId}] })
            .then(async (port) => {            
                console.log("port paired");
                await port.open({ baudRate: 115200 });    
                console.log("port opened");
                document.getElementById('btnconnect').setAttribute("disabled","disabled");
                document.getElementById("btnWriteData").addEventListener('click', async ()=> {
                    const writer = port.writable.getWriter();
                    const code = Number(document.getElementById("codetosend").value);
                    const data = new Uint8Array([code]);
                    await writer.write(data);
                    writer.releaseLock();
                });

                document.getElementById("btnClosePort").addEventListener('click',async () => {                                
                    await port.close();
                    await port.forget();             
                    document.getElementById('btnconnect').removeAttribute("disabled");
                });                

            })
            .catch((e) => {
                console.log("error accesing serial ports");
            });
        });
    });    
}) ()
