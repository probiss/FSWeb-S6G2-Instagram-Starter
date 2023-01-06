/* 
  Buradan başlayın ve iç içe geçmiş bileşenlere doğru ilerleyin.
  Projedeki tüm dosyalara kod eklenmesi gerekmez.
  Nerelerde değişiklik yapmanız gerektiğini anlamak için her dosyayı inceleyin.
*/

// State hook u import edin
import React , { useState } from 'react';
import AramaÇubuğu from './bileşenler/AramaÇubuğu/AramaÇubuğu'
import Gönderiler from './bileşenler/Gönderiler/Gönderiler'

// Gönderiler (çoğul!) ve AramaÇubuğu bileşenlerini import edin, çünkü bunlar App bileşeni içinde kullanılacak
// sahteVeri'yi import edin
import './App.css';
import sahteVeri from './sahte-veri'

const App = () => {
const [gonderiler ,setGonderiler] = useState(sahteVeri);
const [arama, setArama] = useState('');

  // Gönderi nesneleri dizisini tutmak için "gonderiler" adlı bir state oluşturun, **sahteVeri'yi yükleyin**.
  // Artık sahteVeri'ye ihtiyacınız olmayacak.
  // Arama çubuğunun çalışması için , arama kriterini tutacak başka bir state'e ihtiyacımız olacak.
	
  const gonderiyiBegen = gonderiID => {

    setGonderiler(gonderiler.map(item => {
      if(gonderiID === item.id) {
        item.likes ++};
        return item;
    }))
  };

  const aramaYap =(arama) => {
    let filterArr = [];
    filterArr = sahteVeri.filter((item) => {
      return item.username.includes(arama);
    })
    setGonderiler(filterArr)
  }

  return (
    <div className='App'>
      <AramaÇubuğu aramaYap={aramaYap} />
      <Gönderiler gonderiyiBegen = {gonderiyiBegen} gonderiler= {gonderiler}/>
    </div>
  );
};

export default App;
