const countries = [
  {
    name: "Angola",
    description:
      "Angolan coffees are known for their earthy and wine-like flavors, often exhibiting a bold profile with low acidity.",
  },
  {
    name: "Bolivia",
    description:
      "Bolivian coffee offers a clean, bright cup with floral and fruity notes, often accompanied by a pleasant acidity.",
  },
  {
    name: "Brazil",
    description:
      "Brazilian coffees are characterized by their nutty, chocolatey flavors with low acidity and a heavy body, making them ideal for espresso blends.",
  },
  {
    name: "Burundi",
    description:
      "Burundian coffee is known for its delicate, clean, and bright profile, featuring citrus, floral, and chocolate notes with a bright acidity.",
  },
  {
    name: "Cameroon",
    description:
      "Cameroonian coffee has a heavy body with flavor notes including toffee, chocolate, caramel, and hints of molasses and blackberry.",
  },
  {
    name: "Colombia",
    description:
      "Colombian coffee is renowned for its balanced flavor profile, featuring toffee, apple, and a fairly heavy body with bright acidity.",
  },
  {
    name: "Costa Rica",
    description:
      "Costa Rican coffees are known for their medium body and sharp acidity, often described as having perfect balance with notes of raisins, walnut, and green apples.",
  },
  {
    name: "Cuba",
    description:
      "Cuban coffee is typically strong and full-bodied with a rich, earthy flavor and a hint of sweetness, often enjoyed as espresso.",
  },
  {
    name: "Congo",
    description:
      "Coffee from the Congo offers a mildly acidic profile with flavor notes such as tropical fruits, chocolate, toasted nuts, tobacco, and honey.",
  },
  {
    name: "Dominican Republic",
    description:
      "Dominican coffees are medium-bodied with low acidity, offering earthy and creamy flavors with hints of brown sugar and caramel.",
  },
  {
    name: "Ecuador",
    description:
      "Ecuadorian coffees are medium-bodied and fairly acidic, with straightforward flavors typical of Central and South American coffees.",
  },
  {
    name: "El Salvador",
    description:
      "Salvadoran coffee is gentle and soft with mild acidity, featuring notes of nuts, chocolate, caramel, honey, fruits, and floral undertones.",
  },
  {
    name: "Ethiopia",
    description:
      "Ethiopian coffee is known for its bright and mild cup with flavors of citrus-like acidity, floral, fruity, and tropical fruits, varying by region.",
  },
  {
    name: "Gabon",
    description:
      "Gabonese coffee offers a bold cup with tastes including bitterness, earthiness, and wine-like flavors.",
  },
  {
    name: "Ghana",
    description:
      "Ghanaian coffee is less prominent globally but is known to have a mild flavor profile with subtle acidity and earthy notes.",
  },
  {
    name: "Guatemala",
    description:
      "Guatemalan coffees are medium-to-full-bodied with complex, rich flavors that are almost spicy or chocolatey, often with a 'citric' note and higher acidity.",
  },
  {
    name: "Guinea",
    description:
      "Guinean coffee typically has a strong, bold flavor with earthy undertones and a hint of bitterness.",
  },
  {
    name: "Haiti",
    description:
      "Haitian coffee is sweet and smooth, offering a mellow cup with low acidity and subtle chocolate notes.",
  },
  {
    name: "Honduras",
    description:
      "Honduran coffee features caramel, red fruits, and chocolate flavors, grown at high elevations for a bright acidity and complex profile.",
  },
  {
    name: "India",
    description:
      "Indian coffees are known for their earthy, spicy flavors with notes of clove and low acidity, often used in espresso blends.",
  },
  {
    name: "Indonesia",
    description:
      "Indonesian coffees are generally full-bodied and smooth with low acidity, often comprising exotic and earthy taste elements.",
  },
  {
    name: "Ivory Coast",
    description:
      "Ivorian coffee is typically robusta, known for its earthy and bitter flavors, often used in espresso blends for added strength.",
  },
  {
    name: "Jamaica",
    description:
      "Jamaican Blue Mountain coffee is renowned for its mild flavor, smooth body, and lack of bitterness, often with sweet and floral notes.",
  },
  {
    name: "Kenya",
    description:
      "Kenyan coffee is celebrated for its bright acidity, full body, and rich flavors of dried fruit and raisin.",
  },
  {
    name: "Laos",
    description:
      "Laotian coffee offers a medium body with a combination of mild citrus and floral tones, known for its consistent flavor profile.",
  },
  {
    name: "Liberia",
    description:
      "Liberian coffee, primarily robusta, is known for its strong, bold flavor with earthy and bitter notes.",
  },
  {
    name: "Madagascar",
    description:
      "Madagascan coffee, mainly robusta, has a bitter profile with earthy undertones and a full body.",
  },
  {
    name: "Malawi",
    description:
      "Malawian coffee is known for its medium body, bright acidity, and flavors of citrus and floral notes.",
  },
  {
    name: "Mexico",
    description:
      "Mexican coffees are smooth and nutty with medium body and mild acidity, often featuring chocolate and vanilla notes.",
  },
  {
    name: "Myanmar",
    description:
      "Myanmar coffee beans offer a chocolate, nutty, herby, honey flavor with a smooth body that is sweet as it cools.",
  },
  {
    name: "Nepal",
    description:
      "Nepalese coffee is relatively new to the global market, offering a mild flavor with subtle acidity and floral notes.",
  },
  {
    name: "Nicaragua",
    description:
      "Nicaraguan coffee produces a medium-bodied cup with well-balanced bitterness and sweetness, characterized by light acidity, citrus, and slight sweetness.",
  },
  {
    name: "Panama",
    description:
      "Panamanian coffee offers a bright, clean, light-bodied cup with complex and unusual flavor notes including spice, fruits, berries, citrus, mango, jasmine, bergamot, and cut grass.",
  },
  {
    name: "Papua New Guinea",
    description:
      "Papua New Guinea coffee has a heavy body with flavors of mandarin orange, caramel, and chocolate, grown in mountainous regions.",
  },
  {
    name: "Paraguay",
    description:
      "Paraguayan coffee is less prominent globally but is known to have a mild flavor profile with low acidity and earthy notes.",
  },
  {
    name: "Peru",
    description:
      "Peruvian coffee is smooth, gentle, and bright with vibrant aromas, featuring low acidity, vanilla, nuts, flowers, rich sweetness, orange and other citrus fruits, caramel, and chocolate.",
  },
  {
    name: "Philippines",
    description:
      "Philippine coffee offers a full-bodied cup with low acidity, featuring earthy and nutty flavors, often with hints of chocolate.",
  },
  {
    name: "Rwanda",
    description:
      "Rwandan coffee is known for its cherries, nectarines, and black currant flavors, grown at high elevations for a bright acidity.",
  },
  {
    name: "Sierra Leone",
    description:
      "Sierra Leonean coffee is primarily robusta, offering a strong, bold flavor with earthy and bitter notes.",
  },
  {
    name: "Sri Lanka",
    description:
      "Sri Lankan coffee has a mild flavor with low acidity, featuring earthy and nutty notes, often used in blends.",
  },
  {
    name: "Tanzania",
    description:
      "Tanzanian coffee is known for its fruity, berry, and cedar flavors, offering a bright acidity and medium body.",
  },
  {
    name: "Thailand",
    description:
      "Thai coffee offers a citrusy and smooth profile, with a medium body and low acidity, often featuring floral notes.",
  },
  {
    name: "Timor-Leste",
    description:
      "Timorese coffee is known for its full body and smooth flavor, with low acidity and earthy, nutty notes.",
  },
  {
    name: "Togo",
    description:
      "Togolese coffee, primarily robusta, offers a strong, bold flavor with earthy and bitter notes.",
  },
  {
    name: "Trinidad and Tobago",
    description:
      "Coffee from Trinidad and Tobago has a mild flavor with low acidity, featuring earthy and nutty notes.",
  },
  {
    name: "Uganda",
    description:
      "Ugandan coffee offers earthy, floral, and savory flavors, with a full body and low acidity.",
  },
  {
    name: "Venezuela",
    description:
      "Venezuelan coffee is bright and clean with low acidity, dominated by fruity and sweet flavors.",
  },
  {
    name: "Vietnam",
    description:
      "Vietnamese coffee is known for its earthy and bitter flavors, primarily produced as robusta, often used in strong brews.",
  },
  {
    name: "Yemen",
    description:
      "Yemeni coffee is renowned for its complex flavors, featuring wine-like acidity, rich body, and notes of dried fruit and chocolate.",
  },
  {
    name: "Zambia",
    description:
      "Zambian coffee offers a medium body with bright acidity, featuring fruity and floral notes.",
  },
  {
    name: "Zimbabwe",
    description:
      "Zimbabwean coffee is known for its medium body, bright acidity, and flavors of citrus and floral notes.",
  },
];

export default countries;