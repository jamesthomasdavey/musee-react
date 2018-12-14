// image
import lostAndFound from './img/lostAndFound.jpg';
import zelinskyCollectionDvd from './img/zelinskyCollectionDvd.jpg';
import wurlitzerCd from './img/wurlitzerCd.jpg';
import wurlitzerCdBack from './img/wurlitzerCdBack.jpg';
import cdVol1 from './img/cdVol1.jpg';
import cdVol2 from './img/cdVol2.jpg';
import cdVol3 from './img/cdVol3.jpg';
import sutrosCd from './img/sutrosCd.jpg';

const addToCartButton = `<input type="submit" name="submit" class="addToCartButton" value="Add to Cart">`;

const shopItems = [
  {
    name: 'lost-and-found-at-musee-mecanique-photobook',
    title: 'Photos: Lost and Found at the Musée Mécanique',
    description: `
      <p>
        Lost and Found at the Musée Mécanique! This amazing collection of photobooth strips from the Musée Mécanique was 35 years in the making. Made entirely of abandoned photostrips found in and around the Musée Mécanique's coin operated photobooth.
      </p>
    `,
    longDescription: `
      <p>
        Lost and Found at the Musée Mécanique! This amazing collection of photobooth strips from the Musée Mécanique was 35 years in the making. Made entirely of abandoned photostrips found in and around the Musée Mécanique's coin operated photobooth (OK, there's a few of our friends in there too!), we've compiled them in a unique format, the likes of which you've never seen before. There are about 160 sets of photos (640 pictures) in each book.
      </p>
    `,
    form: `
      <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
        <input type="hidden" name="cmd" value="_s-xclick">
        <input type="hidden" name="hosted_button_id" value="YTGKQJD2SJ7X6">
        ${addToCartButton}
      </form>
    `,
    price: '$10.00',
    image: [lostAndFound]
  },
  {
    name: 'the-zelinsky-collection-dvd',
    title: 'The Zelinsky Collection on DVD',
    description: `
      <p>
        A 68 minute dvd video tour featuring highlights of the Musée Mécanique, produced and Directed by Garry Newkirk and Dan Zelinsky.
      </p>
    `,
    longDescription: `
      <p>
        A 68 minute dvd video tour featuring highlights of the Musée Mécanique, produced and Directed by Garry Newkirk and Dan Zelinsky.
      </p>

      <p>
        The world is enriched by men like Edward Galland Zelinsky; collector, restorer, and preserver of fascinating automata... marvelous machines whose only purpose is to amaze and delight. His collection includes hundreds of musical and mechanical machines that bewitch the eye with their beauty and craftsmanship. Some are over a century old, and some so cleverly restored they seem to be ageless.
      </p>
      
      <p>
        Edward's son, Daniel Galland Zelinsky... a fifth generation San Franciscan and a second generation collector... oversees the exhibit, and is a primary force in its expansion. Peep shows (early San Francisco scenes/bawdy comedy), fortune tellers, photo booth, and several games of chance and skill are among the many arcade attractions with several nickelodeons, music boxes and the original mechanical farm. A hand crafted carnival is fully automated... dozens of fascinating attractions and distractions including a sensational 1914 San Francisco exposition gypsy fortune teller. And of course, Laughing Sal. Any worn or broken parts are manufactured on the premises in our machine shop and most repairs are done in house by the Musée Mécanique staff.
      </p>
      
      <p>
        Whether to revisit your childhood memories or to create new ones, this historic collection offers a smile to all ages.
      </p>
    `,
    form: `
      <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
        ${addToCartButton}
        <input type="hidden" name="add" value="1">
        <input type="hidden" name="cmd" value="_cart">
        <input type="hidden" name="business" value="coad01@yahoo.com">
        <input type="hidden" name="item_name" value="The Zelinsky Collection DVD">
        <input type="hidden" name="amount" value="19.95">
        <input type="hidden" name="no_shipping" value="2">
        <input type="hidden" name="no_note" value="0">
        <input type="hidden" name="currency_code" value="USD">
        <input type="hidden" name="ls" value="US">
        <input type="hidden" name="bn" value="PP-ShopCartBF">
      </form>
  `,
    price: '$19.95',
    image: [zelinskyCollectionDvd]
  },
  {
    name: 'wurlitzer-band-organ-cd',
    title: 'Musée Mécanique presents The Mighty Wurlitzer Military Band Organ',
    description: `
        <p>
          Antique, coin-operated, automatic mechanical musical instruments. Recorded live inside the Musée Mécanique.
        </p>
        <p>
          20 tracks.
        </p>
      `,
    form: `
      <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
        ${addToCartButton}
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
    image: [wurlitzerCd, wurlitzerCdBack]
  },
  {
    name: 'the-zelinsky-collection-volume-1-cd',
    title: 'Musée Mécanique presents The Zelinsky Collection Volume 1',
    description: `
        <p>
        Antique, coin-operated, automatic mechanical musical instruments. Recorded live inside the Musée Mécanique at the historic Cliff House in San Francisco.
        </p>
        <p>
          27 tracks.
        </p>
      `,
    form: `
      <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
        ${addToCartButton}
        <input type="hidden" name="add" value="1">
        <input type="hidden" name="cmd" value="_cart">
        <input type="hidden" name="business" value="coad01@yahoo.com">
        <input type="hidden" name="item_name" value="The Zelinsky Collection Volume 1 CD">
        <input type="hidden" name="amount" value="10.00">
        <input type="hidden" name="no_shipping" value="2">
        <input type="hidden" name="no_note" value="0">
        <input type="hidden" name="currency_code" value="USD">
        <input type="hidden" name="ls" value="US">
        <input type="hidden" name="bn" value="PP-ShopCartBF">
      </form>
    `,
    price: '$10.00',
    image: [cdVol1]
  },
  {
    name: 'the-zelinsky-collection-volume-2-cd',
    title: 'Musée Mécanique presents The Zelinsky Collection Volume 2',
    description: `
        <p>
        Antique, coin-operated, automatic mechanical musical instruments. Recorded live inside the Musée Mécanique at the historic Cliff House in San Francisco.
        </p>
        <p>
          27 tracks.
        </p>
      `,
    form: `
      <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
        ${addToCartButton}
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
    image: [cdVol2]
  },
  {
    name: 'the-zelinsky-collection-volume-3-cd',
    title: 'Musée Mécanique presents The Zelinsky Collection Volume 3',
    description: `
        <p>
          Antique, coin-operated, automatic mechanical musical instruments. Recorded live inside the Musée Mécanique at the historic Cliff House in San Francisco.
        </p>
        <p>
          28 tracks.
        </p>
      `,
    form: `
      <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
        ${addToCartButton}
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
    image: [cdVol3]
  },
  {
    name: 'sutros-1954-cd',
    title: `Sutro's San Francisco 1954`,
    description: `
      <p>
        The musical instruments featured in this recording were from the Musical Museum in the collection of George Whitney, owner of Sutro's at the Beach in San Francisco, "a museum that has devoted itself to the color and background of 'the good old days'".
      </p>
    `,
    longDescription: `
      <p>
      The musical instruments featured in this recording were from the Musical Museum in the collection of George Whitney, owner of Sutro's at the Beach in San Francisco, "a museum that has devoted itself to the color and background of 'the good old days'".
      </p>
      <p>
        The recordings from the Musical Museum were made in 1954 by an all night staff announcer for a Bay Area radio station named Al Leavitt who desired to preserve the sound of these rare old machines. "the juke boxes of their day", to delight and charm further generations.
      </p>
      <p>
        Produced for CD from original LP by Dan Zelinsky.
      </p>
      <p>
        39 minutes.
      </p>
    `,
    form: `
      <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
        ${addToCartButton}
        <input type="hidden" name="add" value="1">
        <input type="hidden" name="cmd" value="_cart">
        <input type="hidden" name="business" value="coad01@yahoo.com">
        <input type="hidden" name="item_name" value="Sutro's 1954 CD">
        <input type="hidden" name="amount" value="15.00">
        <input type="hidden" name="no_shipping" value="2">
        <input type="hidden" name="no_note" value="0">
        <input type="hidden" name="currency_code" value="USD">
        <input type="hidden" name="ls" value="US">
        <input type="hidden" name="bn" value="PP-ShopCartBF">
      </form>
    `,
    price: '$15.00',
    image: [sutrosCd]
  }
];

export default shopItems;
