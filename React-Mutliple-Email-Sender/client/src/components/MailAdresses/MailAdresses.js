import { useState } from 'react';

import MailAdressesForm from './MailAdressesForm';
import MailAdressItem from './MailAdressItem';

export default function MailAdresses({ adressList, setAdressList }) {

    let i = 0;
    const [adressName, setAdressName] = useState("");
    const [adressType, setAdressType] = useState("@gmail.com");

    const addMail = () => {
        if (adressName) {
            console.log(adressName + adressType);
            // setAdressList([{adress: (adressName + adressType), id:adressList.length+1}, ...adressList]);
            adressList.push({ adress: (adressName + adressType), id: adressList.length + 1 });
            setAdressList(adressList)
            localStorage.setItem("adressList", JSON.stringify([...adressList]));
            setAdressName("");
        }
    }

    const removeMail = (id) => {
        setAdressList([...adressList].filter((mailAdress) => mailAdress.id !== id));
        localStorage.setItem("adressList", JSON.stringify([...adressList].filter((mailAdress) => mailAdress.id !== id)));
    }



    return (

        <div className=' container col-lg-6 mt-4'>
            <MailAdressesForm addMail={addMail} setAdressType={setAdressType} adressName={adressName} setAdressName={setAdressName} />
              

            <hr className='text-secondary mx-2'></hr>


            <div className='text-center display-6 text-light rounded mt-3'>Mail Adresses</div>
            <div className=''>
                {

                    adressList.map((mailAdress) => {
                        mailAdress.id = i;
                        i++;
                        return (
                            <MailAdressItem mailAdress={mailAdress} removeMail={removeMail} />

                        )
                    })
                }
            </div>
        </div>


    )
}