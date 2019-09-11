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
- Starting cards are: Baby Pie (1), Factory-made Pie Crust (4), Generic Apple Blend (2), Generic Chocolate Blend (2), Egg Wash (1), Hot Oven (1)

# Cards
Baby Pie
  Used in: Kitchen
  Type: Recipe (Pie)
  Complexity: *
  Time: 1 minute
  Requires:
    1 Crust
    1 Filling
  Flavor Text: Small and simple, a good place to start.

Factory-made Pie Crust
  Used in: Kitchen
  Type: Crust
  Effects:
    5 Quality
    50 Completion
    -50 Cooking time
  Flavor Text: Tasteless, but pre-baked.

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
    5% Rarity Chance
  Flavor text: Finishing with an egg wash gives your crust that wonderful golden color.

Hot Oven
  Used in: Kitchen
  Type: Technique
  Effects:
    -50 Cooking time
    Discard 2
  Flavor text: Turn the oven up, work fast, and clean up the mess later!

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
