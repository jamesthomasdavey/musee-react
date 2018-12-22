import sutros1954Cd01 from './img/sutros1954Cd01.jpg';

export default {
  name: 'sutros-1954-cd',
  title: `Sutro's: San Francisco, 1954`,
  shortDescription: `
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
      <input type="submit" name="submit" class="addToCartButton" value="Add to Cart">
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
  images: [sutros1954Cd01]
};
