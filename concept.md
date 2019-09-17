# From Scratch
- Beginning with a store-bought crust and premade filling, start baking pies with your grandma's phone help, adding more and more complexity
- Different tabs have different variables to manage
  - Kitchen performs the assembly of ingredients; "Let' get cooking!"
  - Sunroom is where crust, dough, jellies, and jams are made; "Let's get prepped!"
  - Garden is where fruits and vegetables are grown; "Let's get planting!"
  - Mill is where sugar, corn, wheat, and spices are ground; "Let's get grinding!"
  - Barn is where cows are bred and raised; "Let's get tending!"
- All actions are performed by cards

# Kitchen
- Begin with recipe and a hand of three cards
- Work towards a batch of five baked goods
- If the recipe's complexity is passed before the requirements are fulfilled it fails
- When the deck is emptied, the current recipe ends, even if the complexity isn't passed
- With Baby Pie, each good will take 2-3 cards, so five will take an average of 13, 10 is a good starting deck size (recipe isn't played during baking, so doesn't count)
- Bonuses are applied based on the composition of the batch:
  - Finished batch: +20%, no failures
  - Flush: +10%, five of all same filling
  - Full house: +20%, 3 one filling and 2 of a second filling
  - Straight: +30%, five of all different fillings
- Starting cards are: Baby Pie (5), Factory-made Crust (4), Generic Apple Blend (2), Generic Chocolate Blend (2), Egg Wash (1), Hot Oven (1)

# Possible effects for cards
- Increase/decrease quality
- Increase/decrease completion
- Increase/decrease premium chance
- Increase/decrease cooking time
- Draw/discard cards from hand
- Increase/reduce quality multiplier
- Increase/reduce completion multiplier
- Act as a wildcard for recipe requirements
- Add cards to the deck
- Move cards from discard to deck

# Cards
Baby Pie
  Used in: Kitchen
  Type: Recipe (Pie)
  Complexity: **
  Time: 1 minute
  Requires:
    1 Pastry
    1 Filling
  Flavor text: Small and simple, a good place to start.

Lattice Pie
  Used in: Kitchen
  Type: Recipe (Pie)
  Complexity: ***
  Time: 2 minutes
  Requires:
    2 Pastry
    1 Filling
  Flavor text: The crossed latice crust is equal parts pretty and crisp.

Factory-made Pastry
  Used in: Kitchen
  Type: Pastry
  Effects:
    5 Quality
    40-60 Completion
    -50 Cooking time
  Flavor text: Tasteless, but pre-baked pastry sheet.

Generic Apple Blend
  Used in: Kitchen
  Type: Filling (Apple)
  Effects:
    10 Quality
    40-60 Completion
    5% Premium Chance
  Flavor text: Red like a fire engine, and lasts forever.

Generic Chocolate Pudding
  Used in: Kitchen
  Type: Filling (Chocolate)
  Effects:
    12 Quality
    40-60 Completion
  Flavor text: It's pudding, but it tastes kind of... dusty?

Egg Wash
  Used in: Kitchen
  Type: Topping
  Effects:
    12 Quality
    80 Completion
    5% Premium Chance
  Flavor text: Finishing with an egg wash gives your crust that wonderful golden color.

Hot Oven
  Used in: Kitchen
  Type: Technique
  Effects:
    -50 Cooking time
    Discard 2
  Flavor text: Turn the oven up, work fast, and clean up the mess later!

Fruit-blended Chocolate
  Used in: Kitchen
  Type: Filling (Chocolate)
  Effects:
    Discard any number of fruit cards, for each discarded:
    20 Quality
    30 Completion
  Flavor text: The fruit flavor is lost in the chocolate, but it's incredibly rich.

Blueberry Jam
  Used in: Kitchen
  Type: Filling (Berry)
  Effects:
    5 Quality
    30-50 Completion
    Draw two cards
  Flavor text: Crammed full of so many blueberries it's about to burst.

Key Lime Custard
  Used in: Kitchen
  Type: Filling (Citrus)
  Effects:
    30 Quality
    70-90 Completion
    10% Premium chance
  Flavor text: A dominating flavor, but can turn out marvelously in the right hands.

Strawberry Preserves
  Used in: Kitchen
  Type: Filling (Berry)
  Effects:
    15 Quality
    50-70 Completion
    Move a card from the discard pile to your hand
  Flavor text: Sweet and mellow, strawberries pair well with other flavors.

Slow and Steady
  Used in: Kitchen
  Type: Technique
  Effects:
    25 Cooking time
    15% Quality multiplier
    5% Premium chance
  Flavor text: Double check your measurements, mise en place.

Chocolate Mousse
  Used in: Kitchen
  Type: Filling (Chocolate)
  Effects:
    10 Quality
    40-60 Completion
    Shuffle 2 "Chocolate Fluff" cards into your deck.
  Flavor text: The whipped cream increases the volume like you wouldn't believe.

Chocolate Fluff
  Used in: Kitchen
  Type: Topping (Chocolate)
  Effects:
    5 Quality
    10-30 Completion
  Flavor text: Simple, dark, and creamy.

Flakey Pastry
  Used in: Kitchen
  Type: Pastry
  Effects:
    50 Cooking time
    70-90 Completion
    50% Quality multiplier
  Flavor text: It takes time, but a perfectly flakey pastry makes it all taste better.

Filo Pastry
  Used in: Kitchen
  Type: Pastry
  Effects:
    20 Quality
    10-30 Completion
    50% Completion multiplier
  Flavor text: Gracefully thin and layered, take care to work carefully around it.

Change of Perspective
  Used in: Kitchen
  Type: Technique
  Effects:
    If completion is > 75%, decrease completion by 30
  Flavor text: Now that you look from another angle, you could fit in more, right?

# General interface:
- Thin bar on left with available areas, beginning with Kitchen and Phone
- Kitchen:
  - Container that shows icons for current goods, $ amount, time remaining; when this is full, clicking sells the batch
  - If no finshed batch, bar that reads "Let's get cooking!"
  - When cooking:
    - Begin by selecting from recipies
    - Counters on top for # goods remaining in batch, current quality, remaining completion
    - Three cards below, clicking to play animates them up
    - New cards animate from the left
    - Discarded cards are animated down
