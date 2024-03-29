import lostAndFound01 from './img/lostAndFound01.jpg';

export default {
  name: 'lost-and-found-at-musee-mecanique-photobook',
  title: 'Lost and Found Photos Vol. 1',
  shortDescription: `
    <p>
      Volume 1 of Lost and Found at the Musée Mécanique! This amazing collection of photobooth strips from the Musée Mécanique was 35 years in the making. Made entirely of abandoned photostrips found in and around the Musée Mécanique's coin operated photobooth.
    </p>
  `,
  longDescription: `
    <p>
      Volume 1 of Lost and Found at the Musée Mécanique! This amazing collection of photobooth strips from the Musée Mécanique was 35 years in the making. Made entirely of abandoned photostrips found in and around the Musée Mécanique's coin operated photobooth (OK, there's a few of our friends in there too!), we've compiled them in a unique format, the likes of which you've never seen before. There are about 160 sets of photos (640 pictures) in each book.
    </p>
  `,
  form: `
    <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
      <input type="hidden" name="cmd" value="_s-xclick">
      <input type="hidden" name="hosted_button_id" value="YTGKQJD2SJ7X6">
      <input type="submit" name="submit" class="addToCartButton" value="Add to Cart">
    </form>
  `,
  price: '$10.00',
  isSoldOut: false,
  images: [lostAndFound01]
};
