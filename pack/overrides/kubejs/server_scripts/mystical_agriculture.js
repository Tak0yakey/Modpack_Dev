ServerEvents.recipes(event => {
  event.custom({
    type: "mysticalagriculture:infusion",
    input: { item: 'mysticalagriculture:prosperity_seed_base' },
    result: { id: 'mysticalagriculture:saltpeter_seeds' }, // ← "id" キーを使う
    ingredients: [
      { item: 'immersiveengineering:dust_saltpeter' },
      { item: 'mysticalagriculture:prudentium_essence' },
      { item: 'immersiveengineering:dust_saltpeter' },
      { item: 'mysticalagriculture:prudentium_essence' },
      { item: 'immersiveengineering:dust_saltpeter' },
      { item: 'mysticalagriculture:prudentium_essence' },
      { item: 'immersiveengineering:dust_saltpeter' },      
      { item: 'mysticalagriculture:prudentium_essence' }
    ]
  });
});