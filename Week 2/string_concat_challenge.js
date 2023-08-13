let cardTitle = "Paragraph Name",
  cardDesc = "lorem ipsum dolor sit amet",
  cardDate = "25\\10";
const myCard = `
<div>
  <h3>Hello ${cardTitle}</h3>
  <p>${cardDesc}</p>
  <span>${cardDate}</span>
</div>
`;

document.write(myCard.repeat(4));
