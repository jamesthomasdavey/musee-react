// img
import wurlitzerCd01 from './img/wurlitzerCd01.jpg';
import wurlitzerCd02 from './img/wurlitzerCd02.jpg';

// audio
import surfinSafari from './audio/surfinSafari.m4a';

export default {
  name: 'wurlitzer-band-organ-cd',
  title: 'The Mighty Wurlitzer: Military Band Organ',
  audio: surfinSafari,
  shortDescription: `
    <p>
      Antique, coin-operated, automatic mechanical musical instruments. Recorded live inside the Musée Mécanique.
    </p>
    <p>
      20 tracks.
    </p>
  `,
  longDescription: `
    <p>
      Antique, coin-operated, automatic mechanical musical instruments. Recorded live inside the Musée Mécanique.
    </p>
    <p>
      20 tracks.
    </p>
  `,
  form: `
      <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
        <input type="submit" name="submit" class="addToCartButton" value="Add to Cart">
        <input type="hidden" name="add" value="1">
        <input type="hidden" name="cmd" value="_cart">
        <input type="hidden" name="business" value="coad01@yahoo.com">
        <input type="hidden" name="item_name" value="Wurlitzer Band Organ CD">
        <input type="hidden" name="amount" value="10.00">
        <input type="hidden" name="no_shipping" value="2">
        <input type="hidden" name="no_note" value="0">
        <input type="hidden" name="currency_code" value="USD">
        <input type="hidden" name="ls" value="US">
        <input type="hidden" name="bn" value="PP-ShopCartBF">
      </form>
    `,
  price: '$10.00',
  images: [wurlitzerCd01, wurlitzerCd02]
};
