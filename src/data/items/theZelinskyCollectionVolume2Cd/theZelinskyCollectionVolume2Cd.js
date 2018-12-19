import volumeTwo01 from './img/volumeTwo01.jpg';
import volumeTwo02 from './img/volumeTwo02.jpg';
import volumeTwo03 from './img/volumeTwo03.jpg';
import volumeTwo04 from './img/volumeTwo04.jpg';

export default {
  name: 'the-zelinsky-collection-volume-2-cd',
  title: 'Musée Mécanique presents The Zelinsky Collection Volume 2',
  shortDescription: `
    <p>
      Antique, coin-operated, automatic mechanical musical instruments. Recorded live inside the Musée Mécanique at the historic Cliff House in San Francisco.
    </p>
    <p>
      27 tracks.
    </p>
  `,
  longDescription: `
    <p>
      Antique, coin-operated, automatic mechanical musical instruments. Recorded live inside the Musée Mécanique at the historic Cliff House in San Francisco.
    </p>
    <p>
      27 tracks.
    </p>
  `,
  form: `
    <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
      <input type="submit" name="submit" class="addToCartButton" value="Add to Cart">
      <input type="hidden" name="add" value="1">
      <input type="hidden" name="cmd" value="_cart">
      <input type="hidden" name="business" value="coad01@yahoo.com">
      <input type="hidden" name="item_name" value="The Zelinsky Collection Volume 2 CD">
      <input type="hidden" name="amount" value="10.00">
      <input type="hidden" name="no_shipping" value="2">
      <input type="hidden" name="no_note" value="0">
      <input type="hidden" name="currency_code" value="USD">
      <input type="hidden" name="ls" value="US">
      <input type="hidden" name="bn" value="PP-ShopCartBF">
    </form>
  `,
  price: '$10.00',
  images: [volumeTwo01, volumeTwo02, volumeTwo03, volumeTwo04]
};
