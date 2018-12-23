// audio
import skatersWaltz from './audio/skatersWaltz.m4a';

// img
import volumeThree01 from './img/volumeThree01.jpg';
import volumeThree02 from './img/volumeThree02.jpg';
import volumeThree03 from './img/volumeThree03.jpg';
import volumeThree04 from './img/volumeThree04.jpg';

export default {
  name: 'the-zelinsky-collection-volume-3-cd',
  title: 'The Zelinsky Collection: Vol. 3',
  audio: skatersWaltz,
  shortDescription: `
    <p>
      Antique, coin-operated, automatic mechanical musical instruments. Recorded live inside the Musée Mécanique at the historic Cliff House in San Francisco.
    </p>
    <p>
      28 tracks.
    </p>
  `,
  longDescription: `
    <p>
      Antique, coin-operated, automatic mechanical musical instruments. Recorded live inside the Musée Mécanique at the historic Cliff House in San Francisco.
    </p>
    <p>
      28 tracks.
    </p>
  `,
  form: `
    <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
      <input type="submit" name="submit" class="addToCartButton" value="Add to Cart">
      <input type="hidden" name="add" value="1">
      <input type="hidden" name="cmd" value="_cart">
      <input type="hidden" name="business" value="coad01@yahoo.com">
      <input type="hidden" name="item_name" value="The Zelinsky Collection Volume 3 CD">
      <input type="hidden" name="amount" value="10.00">
      <input type="hidden" name="no_shipping" value="2">
      <input type="hidden" name="no_note" value="0">
      <input type="hidden" name="currency_code" value="USD">
      <input type="hidden" name="ls" value="US">
      <input type="hidden" name="bn" value="PP-ShopCartBF">
    </form>
  `,
  price: '$10.00',
  images: [volumeThree01, volumeThree02, volumeThree03, volumeThree04]
};
